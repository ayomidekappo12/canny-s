"use client";

import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

export default function VideoIntro() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    if (!iframeRef.current) return;

    const player = new Player(iframeRef.current);
    playerRef.current = player;

    // Explicitly ignore the returned Promise
    void player.on("ended", () => {
      setEnded(true);
    });

    return () => {
      player.destroy();
    };
  }, []);

  const replayVideo = async () => {
    if (!playerRef.current) return;

    setEnded(false);
    await playerRef.current.setCurrentTime(0);
    await playerRef.current.play();
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#1E293B]">
          How Cannys Cleaning Services Works
        </h2>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Watch how we deliver reliable, professional cleaning services trusted
          by over 1,000 happy customers across the UK.
        </p>

        {/* Video Container */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
          {/* Vimeo iframe */}
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1158448550?controls=1"
            className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
              ended ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title="How Cannys Cleaning Services Works"
          />

          {/* Thumbnail Overlay (shown when video ends) */}
          {ended && (
            <div
              className="absolute inset-0 bg-cover bg-center flex items-center justify-center cursor-pointer"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dxvf9uqwe/image/upload/v1769454226/Professional_Cleaning_Services_in_Action_vzpzam.png')",
              }}
              onClick={() => {
                void replayVideo();
              }}
              role="button"
              aria-label="Replay video"
            >
              <div className="rounded-full w-20 h-20 flex items-center justify-center bg-black/60 backdrop-blur">
                <span className="text-3xl text-white">▶</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
