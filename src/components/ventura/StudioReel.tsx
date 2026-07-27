import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import { asset } from "@/lib/assetUrl";

const StudioReel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const play = () => {
    videoRef.current?.play();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section id="reel" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-border bg-card"
      >
        <video
          ref={videoRef}
          src={asset("/videos/reel.mp4")}
          poster={asset("/videos/reel-poster.jpg")}
          autoPlay
          loop
          muted
          playsInline
          controls={isPlaying}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onClick={() => !isPlaying && play()}
          className="absolute inset-0 h-full w-full cursor-pointer object-cover"
        />

        {isPlaying && (
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute studio reel" : "Mute studio reel"}
            className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        )}

        {!isPlaying && (
          <>
            <div className="pointer-events-none absolute inset-0 bg-black/20" />
            <button
              type="button"
              onClick={play}
              className="relative flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Play studio reel"
            >
              <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
            </button>
            <span className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Studio reel
            </span>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default StudioReel;
