import { motion } from "framer-motion";
import { Play } from "lucide-react";

const StudioReel = () => {
  return (
    <section id="reel" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="placeholder-fill relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-border bg-card"
      >
        <button
          type="button"
          className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label="Play studio reel"
        >
          <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
        </button>
        <span className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Studio reel — placeholder
        </span>
      </motion.div>
    </section>
  );
};

export default StudioReel;
