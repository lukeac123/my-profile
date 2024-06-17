"use client";
import { Stack, Button, Text, Flex, Slider } from "@mantine/core";
import {
  useEffect,
  useState,
  useCallback,
  forwardRef,
  HTMLAttributes,
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
import { Card } from "../Card";

//TODO: Fix issues with loading - guards added on line 26 + 125 to prevent null errors

export interface AudioPlayerProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  skipDuration?: 5 | 10 | 15;
  title?: string;
  className?: string;
}

function timeFormat(durationS: number) {
  if (durationS) {
    const date = new Date(0);
    date.setSeconds(durationS);
    const timeString = date.toISOString().substring(11, 19);
    return timeString;
  } else return "00:00:00";
}

export const AudioPlayer = forwardRef<HTMLDivElement, AudioPlayerProps>(
  function AudioPlayer(
    { src, title, skipDuration = 15, className, ...rest },
    ref,
  ) {
    const [audioElem, setAudioElem] = useState<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [mute, setMute] = useState(false);
    const [playDisabled, setPlayDisabled] = useState(true);
    const [durationString, setDurationString] = useState("00:00:00");
    const [timeNowString, setTimeNowString] = useState("00:00:00");
    const [durationSeconds, setDurationSeconds] = useState(0);
    const [timeNowSeconds, setTimeNowSeconds] = useState(0);
    const withBaseName = makePrefixer("audioPlayer");

    const audioRef = useCallback((audioNode) => {
      setAudioElem(audioNode);
    }, []);

    const timeUpdate = useCallback(() => {
      if (audioElem) {
        const currentTimeFormatted = timeFormat(audioElem.currentTime);
        setTimeNowString(currentTimeFormatted);
        setTimeNowSeconds(audioElem.currentTime);
        const durationFormatted = timeFormat(audioElem.duration);
        setDurationString(durationFormatted);
        setDurationSeconds(audioElem.duration);
      }
    }, [audioElem]);

    const onLoad = useCallback(() => {
      if (audioElem) {
        const durationFormatted = timeFormat(audioElem.duration);
        setDurationString(durationFormatted);
        setDurationSeconds(audioElem.duration);
        setPlayDisabled(false);
        timeUpdate;
      }
    }, []);

    useEffect(() => {
      if (audioElem) {
        audioElem.addEventListener("timeupdate", timeUpdate);
        audioElem.addEventListener("loadeddata", onLoad);
        const durationFormatted = timeFormat(audioElem.duration);
        setDurationString(durationFormatted);
        setDurationSeconds(audioElem.duration);
        setPlayDisabled(false);
        timeUpdate;
      }
      return () => {
        if (audioElem) {
          audioElem.removeEventListener("timeupdate", timeUpdate);
          audioElem.removeEventListener("loadeddata", onLoad);
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
      if (audioElem && event) {
        audioElem.currentTime = event;
        timeUpdate();
      }
    };

    return (
      <Card {...rest}>
        <Stack
          className={"audioPlayer-container"}
          ref={ref}
          aria-label={title}
          align="center"
          gap={3}
        >
          {/* <Text>{title}</Text> */}
          <audio
            ref={audioRef}
            aria-label="audio"
            src={`${src}`}
            preload="auto"
          />
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
              onClick={handlePlay}
              disabled={playDisabled}
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
              label={null}
            />
            <Text>{durationString}</Text>
          </Flex>
        </Stack>
      </Card>
    );
  },
);
