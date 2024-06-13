"use client";
import { HTMLAttributes, useState, useEffect } from "react";
import { Card, CardContent } from "../Card";
import { makePrefixer } from "../../utils/makePrefixer";
import "./SpotifyCard.component.css";
import {
  getAccessToken,
  fetchProfile,
  redirectToSpotifyAuthorise,
} from "./scripts";
import { Button } from "@mantine/core";

const clientId = "e029ab772d6c4d2b9c5466be7d31ab61";
const redirectUrl = "http://localhost:3000";
const authorisationEndpoint = "https://accounts.spotify.com/authorize";
const scope = "user-read-private user-read-email user-top-read";

export interface SpotifyCardProps extends HTMLAttributes<HTMLDivElement> {}

const withBaseName = makePrefixer("card");

const getTrackData = async () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  if (!code) {
    redirectToSpotifyAuthorise(
      clientId,
      scope,
      authorisationEndpoint,
      redirectUrl
    );
  } else {
    console.log({ code });
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
  }
};

export const SpotifyCard = ({
  children,
  className,
  ...rest
}: SpotifyCardProps) => {
  useEffect(() => {
    getTrackData();
  }, []);

  return (
    <Card className={withBaseName()} {...rest}>
      <CardContent>Spotify Card</CardContent>
    </Card>
  );
};
