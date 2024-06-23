"use client";
import { useRef, useState, HTMLAttributes } from "react";
import { Player } from "./Player";
import { Visualisation } from "./Visualisation";
import { Card } from "../Card";
import { makePrefixer } from "../../utils/makePrefixer";

let audioContext;

const withBaseName = makePrefixer("audioPlayer");

export interface AudioProps extends HTMLAttributes<HTMLDivElement> {
  skipDuration?: 5 | 10 | 15;
  title?: string;
  className?: string;
  src: string;
}

export const Audio = ({
  className,
  src,
  skipDuration,
  ...rest
}: AudioProps) => {
  const audioRef = useRef();
  const source = useRef();
  const analyser = useRef();

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudioPlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      audioContext = null;
    } else {
      if (!audioContext) {
        audioContext = new AudioContext();
      }
      if (audioRef.current && !source.current) {
        audioContext = new AudioContext();
        source.current = audioContext.createMediaElementSource(
          audioRef.current,
        );
        analyser.current = audioContext.createAnalyser();
        source.current.connect(analyser.current);
        analyser.current.connect(audioContext.destination);
      }

      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <Card {...rest} className={"audioPlayer-container"}>
      <audio ref={audioRef} src={src} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        toggleAudioPlay={toggleAudioPlay}
        src={src}
      />
      <Visualisation
        className={withBaseName("visualisation")}
        isPlaying={isPlaying}
        analyser={analyser}
      />
    </Card>
  );
};
