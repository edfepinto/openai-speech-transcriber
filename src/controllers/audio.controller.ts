import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { transcribeAudio } from "../services/openai-whisper.service";

export const useAudioController = () => {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [transcription, setTranscription] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const toggleRecording = async () => {
    if (!isRecording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const recorder = new MediaRecorder(stream);
        const chunks: Blob[] = [];

        recorder.ondataavailable = (e) => chunks.push(e.data);
        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: "audio/webm" });
          setAudioBlob(blob);
          toast.success("Áudio gravado com sucesso!");
        };

        recorder.start();
        mediaRecorderRef.current = recorder;
        setIsRecording(true);
        setError(null);
        toast.info("Gravação iniciada...");
      } catch (err) {
        setError("Erro ao acessar o microfone.");
        toast.error("Erro ao acessar o microfone.");
        console.error(err);
      }
    } else {
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
      toast.info("Gravação encerrada.");
    }
  };

  const handleTranscribe = async () => {
    if (!audioBlob) return;

    toast.info("Enviando áudio para transcrição...");
    try {
      const text = await transcribeAudio(audioBlob);
      setTranscription(text);
      toast.success("Transcrição concluída!");
      setError(null);
    } catch (err: any) {
      setError(err.message || "Erro na transcrição.");
      toast.error("Erro na transcrição.");
      console.error(err);
    }
  };

  return {
    isRecording,
    audioBlob,
    transcription,
    error,
    toggleRecording,
    handleTranscribe,
  };
};
