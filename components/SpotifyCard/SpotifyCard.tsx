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
const authEndpoint = "https://accounts.spotify.com/authorize";
const scope = "user-read-private user-read-email user-top-read";
const responseType = "token";

export interface SpotifyCardProps extends HTMLAttributes<HTMLDivElement> {}

const withBaseName = makePrefixer("card");

const getTrackData = async () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  if (!code) {
    redirectToSpotifyAuthorise(clientId, scope, authEndpoint, redirectUrl);
  } else {
    console.log({ code });
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
  }
};

const handlePromise = async () => {};

export const SpotifyCard = ({
  children,
  className,
  ...rest
}: SpotifyCardProps) => {
  const [token, setToken] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    if (token) {
      fetchProfile(token, setData);
      console.log(data);
    }
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <Card className={withBaseName()} {...rest}>
      <CardContent>Spotify Card</CardContent>
      {token ? (
        <a
          href={`${authEndpoint}?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUrl}&response_type=${responseType}`}
        >
          Login to Spotify
        </a>
      ) : (
        <button onClick={logout}>Logout</button>
      )}

      {data && data.id}
    </Card>
  );
};
