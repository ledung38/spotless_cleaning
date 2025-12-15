"use client";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export default function SmoothLoopVideo({ src, ...props }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnded = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    video.currentTime = 3; // quay lại gần đầu, tránh khung đen đầu video
    video.play();
  };

  // e8e3da
  // bdbca6
  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      onEnded={handleEnded}
      className={cn("w-full h-auto shadow", props?.className)}
    />
  );
}
