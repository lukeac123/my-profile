"use client";
import { HTMLAttributes, useState } from "react";
import { Card, CardContent } from "../Card";
import { makePrefixer } from "../../utils/makePrefixer";
import "./SpotifyCard.component.css";
import {
  getAccessToken,
  fetchProfile,
  redirectToAuthCodeFlow,
} from "./scripts";
import { Button } from "@mantine/core";

const clientId = "e029ab772d6c4d2b9c5466be7d31ab61";
const redirectUri = "http://localhost:3000";
const scope = "user-read-private user-read-playback-state user-read-email";
const authUrl = new URL("https://accounts.spotify.com/authorize");
const responseType = "token";

export interface SpotifyCardProps extends HTMLAttributes<HTMLDivElement> {}

const withBaseName = makePrefixer("card");

export const SpotifyCard = ({
  children,
  className,
  ...rest
}: SpotifyCardProps) => {
  const [token, setToken] = useState("");

  const getTrackData = async () => {
    const data = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const tracks = await data.json();
    console.log({ tracks });
  };

  return (
    <Card className={withBaseName()}>
      <CardContent>Card Content</CardContent>

      <Button onClick={() => redirectToAuthCodeFlow(clientId)}>
        Redirect to Auth
      </Button>

      <Button
        onClick={() =>
          getAccessToken(
            clientId,
            "AQDA-7WP_M3RUOIJAXtynIn-zzUhXf_bXLqsH0QPftF4JgJk5Pr1HFeNUbn5DhnitUaa30LbmEO7jJY-iquDG060aE2ecAKu0bj3PBm5y-qubZ_GOhln5D3iTyLHAxihxZwXVJAqyGsIHnccXr-6nP35i89MUJj_3-z91ytu-v-VQhYHbrINrsmqbBUMzDIOp76-30OGMjI8SJEKTnUJOKFMUwEWlie51-4NVYpyOPgH7lQ18OA8azBUsnOgsyzhE1e5YXk7pMg1m2yog-fVxQ"
          )
        }
      >
        Get Token
      </Button>
    </Card>
  );
};
