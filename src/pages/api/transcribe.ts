import type { NextApiRequest, NextApiResponse } from "next";
import busboy from "busboy";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const audioBuffer = await parseAudioUpload(req);
    const transcription = await transcribeAudio(audioBuffer);
    return res.status(200).json({ text: transcription });
  } catch (error: any) {
    console.error("Erro ao processar transcrição:", error);
    return res.status(500).json({ error: error.message || "Erro interno no servidor" });
  }
}

const parseAudioUpload = (req: NextApiRequest): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const parser = busboy({ headers: req.headers });
    const chunks: Buffer[] = [];

    parser.on("file", (_fieldName, fileStream) => {
      fileStream.on("data", (chunk: Buffer) => chunks.push(chunk));
      fileStream.on("end", () => resolve(Buffer.concat(chunks)));
    });

    parser.on("error", (err) => reject(err));
    parser.on("finish", () => {
      if (chunks.length === 0) {
        reject(new Error("Nenhum arquivo de áudio encontrado"));
      }
    });

    req.pipe(parser);
  });
};

const transcribeAudio = async (audioBuffer: Buffer): Promise<string> => {
  const formData = new FormData();
  const audioFile = new File([audioBuffer], "audio.webm", {
    type: "audio/webm",
  });

  formData.append("file", audioFile);
  formData.append("model", "whisper-1");

  const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.WHISPER_OPENAI_API_KEY}`,
    },
    body: formData,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error?.message || "Erro na transcrição");
  }

  return result.text;
};

