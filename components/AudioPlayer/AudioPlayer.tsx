"use client";
import { Stack, Button, Text, Flex, Slider, Card } from "@mantine/core";
import { useEffect, useState, useCallback, forwardRef } from "react";
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

export interface AudioPlayerProps {
  src: string;
  skipDuration?: 5 | 10 | 15;
  title?: string;
  className?: string;
}

function timeFormat(durationS: number): string {
  const date = new Date(0);
  date.setSeconds(durationS);
  const timeString = date?.toISOString().substring(11, 19);
  return timeString;
}

export const AudioPlayer = forwardRef<HTMLDivElement, AudioPlayerProps>(
  function AudioPlayer(
    { src, title, skipDuration = 15, className, ...rest },
    ref
  ) {
    const [audioElem, setAudioElem] = useState<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [mute, setMute] = useState(false);
    const [playDisabled, setPlayDisabled] = useState(true);
    const [durationString, setDurationString] = useState("00:00:00");
    const [timeNowString, setTimeNowString] = useState("00:00:00");
    const [durationSeconds, setDurationSeconds] = useState(0);
    const [timeNowSeconds, setTimeNowSeconds] = useState(0);

    const audioRef = useCallback((audioNode) => {
      setAudioElem(audioNode);
    }, []);

    const timeUpdate = useCallback(() => {
      if (audioElem) {
        const currentTimeFormatted = timeFormat(audioElem.currentTime);
        setTimeNowString(currentTimeFormatted);
        setTimeNowSeconds(audioElem.currentTime);
      }
    }, [audioElem]);

    const formatMetaData = () => {
      if (audioElem) {
        const durationFormatted = timeFormat(audioElem.duration);
        setDurationString(durationFormatted);
        setDurationSeconds(audioElem.duration);
        setPlayDisabled(false);
      }
    };

    useEffect(() => {
      if (audioElem) {
        formatMetaData();
        audioElem.addEventListener("timeupdate", timeUpdate);
      }
      return () => {
        if (audioElem) {
          audioElem.removeEventListener("timeupdate", timeUpdate);
          audioElem.addEventListener("loadeddata", formatMetaData);
        }
      };
    }, [audioElem, timeUpdate]);

    const handleFastforward = () => {
      if (audioElem) {
        audioElem.currentTime += skipDuration;
      }
    };

    const handleRewind = () => {
      if (audioElem) {
        audioElem.currentTime -= skipDuration;
      }
    };

    const handlePlay = () => {
      if (isPlaying) {
        audioElem?.pause();
        setIsPlaying(false);
      } else {
        audioElem?.play();
        setIsPlaying(true);
      }
    };

    const handleMute = () => {
      if (audioElem?.volume) {
        audioElem.volume = 0;
        setMute(true);
      } else if (audioElem) {
        audioElem.volume = 1;
        setMute(false);
      }
    };

    const handleSliderInput = (event) => {
      if (audioElem) {
        audioElem.currentTime = event;
        timeUpdate();
      }
    };

    return (
      <Stack
        className={"audioPlayer-container"}
        ref={ref}
        aria-label={title}
        align="center"
        gap={3}
      >
        <Text>{title}</Text>
        <audio
          ref={audioRef}
          aria-label="audio"
          src={`${src}`}
          preload={"metadata"} // preloads in the meta data so times can be loaded in
        />
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
            label={null}
          />
          <Text>{durationString}</Text>
        </Flex>
        <Flex direction={"row"} gap={"xs"}>
          <a href={"www.google.com"} download target="_blank" rel="noreferrer">
            <Button variant="default" aria-label="download audio">
              <IconDownload />
            </Button>
          </a>
          <Button
            variant="default"
            aria-label="skip audio backwards"
            onClick={handleRewind}
          >
            <IconPlayerSkipBack />
          </Button>
          <Button
            variant="default"
            onClick={handlePlay}
            disabled={playDisabled}
            aria-label={isPlaying ? "pause audio" : "play audio"}
          >
            {isPlaying ? <IconPlayerPause /> : <IconPlayerPlay />}
          </Button>
          <Button
            variant="default"
            aria-label="skip audio forward"
            onClick={handleFastforward}
          >
            <IconPlayerSkipForward />
          </Button>
          <Button variant="default" onClick={handleMute}>
            {mute ? <IconVolumeOff /> : <IconVolume />}
          </Button>
        </Flex>
      </Stack>
    );
  }
);
