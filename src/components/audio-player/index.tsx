import React from "react";
import styles from "./styles.module.css";

interface AudioPlayerProps {
  blob: Blob;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ blob }) => {
  return (
    <div className={styles["audio-player-container"]}>
      <strong>Prévia do Áudio:</strong>
      <audio controls src={URL.createObjectURL(blob)} />
    </div>
  );
};

export default AudioPlayer;
