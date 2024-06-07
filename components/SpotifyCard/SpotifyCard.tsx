"use client";
import { HTMLAttributes, useState, useEffect } from "react";
import { Card, CardContent } from "../Card";
import { makePrefixer } from "../../utils/makePrefixer";
import "./SpotifyCard.component.css";
import {
  getAccessToken,
  fetchProfile,
  redirectToAuthCodeFlow,
} from "./scripts";

export interface SpotifyCardProps extends HTMLAttributes<HTMLDivElement> {}

const withBaseName = makePrefixer("card");

const CLIENT_ID = "e029ab772d6c4d2b9c5466be7d31ab61";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const code = undefined;

async function getSpotifyData() {
  if (!code) {
    redirectToAuthCodeFlow(CLIENT_ID);
  } else {
    const accessToken = await getAccessToken(CLIENT_ID, code);
    const profile = await fetchProfile(accessToken);
  }
}

export const SpotifyCard = ({
  children,
  className,
  ...rest
}: SpotifyCardProps) => {
  useEffect(() => {
    getSpotifyData();
  });
  return (
    <Card className={withBaseName()}>
      <CardContent>Spotify Card</CardContent>
    </Card>
  );
};
