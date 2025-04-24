import React from "react";
import styles from "./styles.module.css";

interface TranscriptionProps {
  transcription: string;
  error: string | null;
}

const Transcription: React.FC<TranscriptionProps> = ({
  transcription,
  error,
}) => {
  return (
    <div className={styles["transcription-container"]}>
      <h2>Resultado da Transcrição</h2>
      {error ? (
        <p className={styles["error"]}>{error}</p>
      ) : (
        <p>{transcription || "Nenhuma transcrição disponível."}</p>
      )}
    </div>
  );
};

export default Transcription;
