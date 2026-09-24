"use client";

import { useState } from "react";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Wraps an <img> with a shimmer skeleton that fades out once the image loads.
 * Works in both technical (dark) and personal (linen) modes — the skeleton
 * colour responds to the [data-mode] CSS variable overrides in globals.css.
 */
export default function ImageWithSkeleton({
  src,
  alt,
  className = "",
  style = {},
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="img-loader-wrap">
      {/* Shimmer skeleton — sits behind the image */}
      <div className={`skeleton skeleton-dark${loaded ? " skeleton-resolved" : ""}`} />

      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? "img-loaded" : "img-loading"}`}
        style={style}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
