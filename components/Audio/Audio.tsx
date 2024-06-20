"use client";
import { useRef, useState, HTMLAttributes, RefObject } from "react";
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
      // audioContext!.close();
    } else {
      if (!audioContext) {
        audioContext = new AudioContext();
      }
      if (audioRef.current && !source.current) {
        audioContext = new AudioContext();
        source.current = audioContext.createMediaElementSource(
          audioRef.current
        );
        analyser.current = audioContext.createAnalyser();
        source.current.connect(analyser.current);
        analyser.current.connect(audioContext.destination);
        // analyser.current.smoothingTimeConstant = 1;
      }

      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <Card {...rest}>
      <audio ref={audioRef} src={src} />
      <Visualisation
        className={withBaseName("visualisation")}
        isPlaying={isPlaying}
        analyser={analyser}
      />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        toggleAudioPlay={toggleAudioPlay}
        src={src}
      />
    </Card>
  );
};
