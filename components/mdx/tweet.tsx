"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (el?: HTMLElement | null) => void;
      };
    };
  }
}

export function Tweet({ id }: { id: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = document.getElementById("twitter-widget-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "twitter-widget-script";
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      script.onload = () => {
        window.twttr?.widgets.load(ref.current);
      };
      document.head.appendChild(script);
    } else {
      window.twttr?.widgets.load(ref.current);
    }
  }, [id]);

  return (
    <div ref={ref} className="my-8 flex justify-center">
      <blockquote
        className="twitter-tweet"
        data-theme="dark"
        data-dnt="true"
      >
        <a href={`https://twitter.com/i/web/status/${id}`} />
      </blockquote>
    </div>
  );
}
