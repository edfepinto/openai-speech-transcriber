import React from "react";
import styles from "./styles.module.css";

interface ProcessButtonProps {
  onClick: () => void;
  isDisabled: boolean;
}

const ProcessButton: React.FC<ProcessButtonProps> = ({
  onClick,
  isDisabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={styles["process-btn"]}
    >
      Processar Transcrição
    </button>
  );
};

export default ProcessButton;
