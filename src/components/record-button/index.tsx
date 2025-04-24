import React from "react";
import styles from "./styles.module.css";

interface RecordButtonProps {
  isRecording: boolean;
  toggleRecording: () => void;
}

const RecordButton: React.FC<RecordButtonProps> = ({
  isRecording,
  toggleRecording,
}) => {
  return (
    <button
      onClick={toggleRecording}
      className={`${styles["record-btn"]} ${
        isRecording ? styles["recording"] : ""
      }`}
    >
      {isRecording ? "Parar Gravação" : "Iniciar Gravação"}
    </button>
  );
};

export default RecordButton;
