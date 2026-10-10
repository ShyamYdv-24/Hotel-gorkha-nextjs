"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Drop-in replacement for next/image that degrades gracefully when a remote
 * image fails to load, showing a tinted placeholder with the alt text instead
 * of a broken image.
 */
export default function SmartImage({
  src,
  alt,
  fill = false,
  width,
  height,
  sizes,
  preload = false,
  className = "",
  imgClassName = "",
  fallbackLabel,
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`smart-fallback ${fill ? "smart-fallback--fill" : ""} ${className}`.trim()}
        role="img"
        aria-label={alt}
      >
        <span className="smart-fallback__text" aria-hidden="true">
          {fallbackLabel || alt}
        </span>
      </span>
    );
  }

  const handleError = () => setFailed(true);

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        onError={handleError}
        className={`${className} ${imgClassName}`.trim()}
        style={{ objectFit: "cover" }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      preload={preload}
      onError={handleError}
      className={`${className} ${imgClassName}`.trim()}
    />
  );
}
