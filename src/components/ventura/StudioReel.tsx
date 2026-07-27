import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const StudioReel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    videoRef.current?.play();
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
          src="/videos/reel.mp4"
          poster="/videos/reel-poster.jpg"
          controls={isPlaying}
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onClick={() => !isPlaying && play()}
          className="absolute inset-0 h-full w-full cursor-pointer object-cover"
        />

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
