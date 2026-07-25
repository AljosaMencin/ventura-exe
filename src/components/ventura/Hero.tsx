import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Faint technical scanner motif: concentric rings with a slow rotating scan
          sweep, a nod to the ".exe" software angle without going full hacker-terminal */}
      <div aria-hidden className="pointer-events-none absolute -bottom-52 -left-52 h-[34rem] w-[34rem]">
        <div className="absolute inset-0 rounded-full border border-primary/10" />
        <div className="absolute inset-16 rounded-full border border-primary/10" />
        <div className="absolute inset-32 rounded-full border border-primary/10" />
        <div className="absolute inset-48 rounded-full border border-primary/10" />

        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div
            className="absolute inset-0 animate-spin-slow"
            style={{
              background: "conic-gradient(from 0deg, transparent 0deg, hsl(var(--primary) / 0.2) 10deg, transparent 34deg)",
            }}
          />
        </div>

        <div className="absolute inset-64 animate-pulse-slow rounded-full bg-primary/25 blur-md" />
      </div>

      <div className="container relative flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-primary"
        >
          Limited projects. Full focus.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-balance text-5xl leading-[1.08] text-foreground sm:text-6xl lg:text-7xl"
        >
          A movement for artists who care about how their music looks.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-xl text-pretty text-lg font-light text-muted-foreground"
        >
          Artwork, video and visual identity, from sound to vision. We build the
          visual world around your music, end to end.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg">
            <a href="#contact">Start a project</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#work">See the work</a>
          </Button>
        </motion.div>
      </div>

      <a
        href="#reel"
        aria-label="Scroll to studio reel"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary sm:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
