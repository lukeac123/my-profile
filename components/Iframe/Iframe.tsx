"use client";
import { HTMLAttributes, useState, useEffect, useRef } from "react";
import { clsx } from "clsx";
import { makePrefixer } from "../../utils/makePrefixer";
import "./Iframe.component.css";
import { Loader } from "@mantine/core";

export interface IframeProps extends HTMLAttributes<HTMLIFrameElement> {
  src: string;
}

const withBaseName = makePrefixer("iframe2");

export const Iframe = ({ className, src, ...rest }: IframeProps) => {
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    iframeRef.current?.addEventListener("load", () =>
      console.log("iframeLoaded")
    );
    return iframeRef.current?.removeEventListener("load", () =>
      setLoading(false)
    );
  });

  return (
    // loading ? (
    //   <Loader type="dots" className={clsx(withBaseName(), className)} />
    // ) : (
    <iframe
      ref={iframeRef}
      className={clsx(withBaseName(), className)}
      src={src}
      {...rest}
    />
  );
  // );
};
