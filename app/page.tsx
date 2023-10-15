"use client";
import { Stack } from "@mantine/core";
import { Banner } from "../components/Banner";

export default function HomePage() {
  return (
    <div>
      <Stack gap="0" align="center">
        <Banner />
        <Banner />
      </Stack>
    </div>
  );
}
