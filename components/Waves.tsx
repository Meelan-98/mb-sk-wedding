import { useEffect, useRef } from "react";

export function Waves() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay was prevented by Low Power Mode or browser policy
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      poster="/photos/waves.webp"
      autoPlay
      loop
      muted
      playsInline
      className="hero-video"
      controls={false}
    >
      <source src={"videos/waves.mp4"} type="video/mp4" />
    </video>
  );
}
