import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center font-mono text-xs uppercase tracking-[0.3em] text-primary"
      >
        About
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 text-balance text-center text-4xl font-light tracking-tight text-foreground sm:text-5xl lg:text-6xl"
      >
        Who we are
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto mt-10 max-w-2xl space-y-5 text-pretty text-base font-light leading-relaxed text-muted-foreground"
      >
        <p>
          Ventura was founded in 2025 by Aljoša Mencin. He spent four years studying design and
          working with a run of independent artists and labels, mostly on cover art, before
          deciding the work deserved a name of its own.
        </p>
        <p>
          Ventura is that name: a way to define the style properly and push it past the album
          cover, into video, brand systems and everything else that shapes how a project looks and
          feels. The studio still runs the way it started, small and hands-on, taking on a limited
          number of projects at a time so each one gets full attention from first sketch to final
          file.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
