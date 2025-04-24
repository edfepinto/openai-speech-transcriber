export async function transcribeAudio(audioBlob: Blob): Promise<string> {
  const formData = new FormData();
  const file = new File([audioBlob], "audio.webm", { type: "audio/webm" });
  formData.append("file", file);

  const response = await fetch("/api/transcribe", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Erro na transcrição");
  }

  return data.text || "Sem resposta";
}

