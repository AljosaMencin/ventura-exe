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
        className="mx-auto mt-10 max-w-2xl space-y-5 text-pretty text-center text-base font-light leading-relaxed text-muted-foreground"
      >
        <p>
          Ventura was founded in 2025 by Aljoša Mencin after four years of designing for
          independent artists and record labels. What started as creating cover art gradually
          became something bigger: a consistent way of approaching visuals that felt worth giving
          its own identity.
        </p>
        <p>That's where Ventura came from.</p>
        <p>
          The idea has always been simple: music deserves visuals that feel just as unique as the
          sound itself. Instead of following trends or using templates, every project is built
          from scratch to fit the artist and the story they're trying to tell.
        </p>
        <p>
          Although cover art is still at the core of what Ventura does, the goal has always been
          to go beyond a single image. Motion graphics, visual identities, promotional assets, and
          creative direction all play a part in building a complete world around a release.
        </p>
        <p>
          Ventura is intentionally kept small, taking on only a limited number of projects at a
          time. Every piece is designed by hand, from the first concept to the final files, with
          the attention and care each project deserves.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
