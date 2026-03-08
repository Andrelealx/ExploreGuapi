"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type Props = Omit<ImageProps, "src"> & {
  src?: string | null;
  fallbackSrc?: string;
};

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "/fallback-nature.svg",
  ...props
}: Props) {
  const [hasError, setHasError] = useState(false);
  const imageSrc = hasError || !src ? fallbackSrc : src;

  return (
    <Image
      {...props}
      src={imageSrc}
      alt={alt}
      onError={() => setHasError(true)}
    />
  );
}
