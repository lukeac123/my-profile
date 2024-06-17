"use client";
import { Stack, Button, Text, Flex, Slider } from "@mantine/core";
import {
  useEffect,
  useState,
  useCallback,
  forwardRef,
  HTMLAttributes,
  RefObject,
} from "react";
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconPlayerSkipForward,
  IconPlayerSkipBack,
  IconDownload,
  IconVolume,
  IconVolumeOff,
} from "@tabler/icons-react";
import "./AudioPlayer.component.css";
import { makePrefixer } from "../../utils/makePrefixer";

//TODO: Fix issues with loading - guards added on line 26 + 125 to prevent null errors

export interface PlayerProps extends HTMLAttributes<HTMLDivElement> {
  skipDuration?: 5 | 10 | 15;
  title?: string;
  className?: string;
  audioRef: RefObject<AudioNode>;
  src: string;
  isPlaying: boolean;
  setIsPlaying: () => void;
  toggleAudioPlay: () => void;
}

function timeFormat(durationS: number) {
  if (durationS) {
    const date = new Date(0);
    date.setSeconds(durationS);
    const timeString = date.toISOString().substring(11, 19);
    return timeString;
  } else return "00:00:00";
}

export const Player = ({
  audioRef,
  src,
  title,
  skipDuration = 15,
  className,
  toggleAudioPlay,
  isPlaying,

  ...rest
}: PlayerProps) => {
  const [mute, setMute] = useState(false);
  const [playDisabled, setPlayDisabled] = useState(true);
  const [durationString, setDurationString] = useState("00:00:00");
  const [timeNowString, setTimeNowString] = useState("00:00:00");
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [timeNowSeconds, setTimeNowSeconds] = useState(0);
  const withBaseName = makePrefixer("audioPlayer");

  const timeUpdate = useCallback(() => {
    if (audioRef.current) {
      const currentTimeFormatted = timeFormat(audioRef.current.currentTime);
      setTimeNowString(currentTimeFormatted);
      setTimeNowSeconds(audioRef.current.currentTime);
      const durationFormatted = timeFormat(audioRef.current.duration);
      setDurationString(durationFormatted);
      setDurationSeconds(audioRef.current.duration);
    }
  }, [audioRef.current]);

  const onLoad = useCallback(() => {
    if (audioRef.current) {
      const durationFormatted = timeFormat(audioRef.current.duration);
      setDurationString(durationFormatted);
      setDurationSeconds(audioRef.current.duration);
      setPlayDisabled(false);
      timeUpdate;
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", timeUpdate);
      audioRef.current.addEventListener("loadeddata", onLoad);
      const durationFormatted = timeFormat(audioRef.current.duration);
      setDurationString(durationFormatted);
      setDurationSeconds(audioRef.current.duration);
      setPlayDisabled(false);
      timeUpdate;
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", timeUpdate);
        audioRef.current.removeEventListener("loadeddata", onLoad);
      }
    };
  }, [audioRef.current, timeUpdate]);

  const handleFastforward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += skipDuration;
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= skipDuration;
    }
  };

  const togglePlay = () => {
    toggleAudioPlay();
  };

  const handleMute = () => {
    if (audioRef.current?.volume) {
      audioRef.current.volume = 0;
      setMute(true);
    } else if (audioRef.current) {
      audioRef.current.volume = 1;
      setMute(false);
    }
  };

  const handleSliderInput = (event) => {
    if (audioRef.current && event) {
      audioRef.current.currentTime = event;
      timeUpdate();
    }
  };

  return (
    <Stack
      className={"audioPlayer-container"}
      aria-label={title}
      align="center"
      gap={3}
    >
      <Flex direction={"row"} gap={"xs"}>
        <a href={src} download target="_blank" rel="noreferrer">
          <Button
            className={withBaseName("button")}
            variant="default"
            aria-label="download audio"
          >
            <IconDownload className={withBaseName("icon")} />
          </Button>
        </a>
        <Button
          className={withBaseName("button")}
          variant="default"
          aria-label="skip audio backwards"
          onClick={handleRewind}
        >
          <IconPlayerSkipBack className={withBaseName("icon")} />
        </Button>
        <Button
          className={withBaseName("button")}
          variant="default"
          onClick={togglePlay}
          // disabled={playDisabled}
          aria-label={isPlaying ? "pause audio" : "play audio"}
        >
          {isPlaying ? (
            <IconPlayerPause className={withBaseName("icon")} />
          ) : (
            <IconPlayerPlay className={withBaseName("icon")} />
          )}
        </Button>
        <Button
          className={withBaseName("button")}
          variant="default"
          aria-label="skip audio forward"
          onClick={handleFastforward}
        >
          <IconPlayerSkipForward className={withBaseName("icon")} />
        </Button>
        <Button
          className={withBaseName("button")}
          variant="default"
          onClick={handleMute}
        >
          {mute ? (
            <IconVolumeOff className={withBaseName("icon")} />
          ) : (
            <IconVolume className={withBaseName("icon")} />
          )}
        </Button>
      </Flex>
      <Flex
        className={"audioPlayer-sliderContainer"}
        direction={"row"}
        gap={"md"}
      >
        <Text>{timeNowString}</Text>
        <Slider
          className={"audioPlayer-slider"}
          min={0}
          max={durationSeconds}
          value={timeNowSeconds}
          onChange={handleSliderInput}
        />
        <Text>{durationString}</Text>
      </Flex>
    </Stack>
  );
};
