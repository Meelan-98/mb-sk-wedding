"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface MandalaProps {
  size: number;
}

export default function Mandala({ size }: MandalaProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: isVisible ? "rotate(360deg)" : "rotate(0deg)",
        transition: "transform 3s cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "transform",
      }}
    >
      <Image
        src="/photos/mandala.png"
        alt={"mandala image"}
        width={size}
        height={size}
        priority={true}
        style={{ objectFit: "contain", width: "100%", height: "100%" }}
      />
    </div>
  );
}
