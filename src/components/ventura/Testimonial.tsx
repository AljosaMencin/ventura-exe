import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="container py-24 sm:py-32">
      <motion.blockquote
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-balance text-center"
      >
        <p className="text-2xl font-light leading-relaxed text-foreground sm:text-3xl">
          &ldquo;Placeholder testimonial — real client quote goes here once the first
          case study is live.&rdquo;
        </p>
        <footer className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Placeholder Client
        </footer>
      </motion.blockquote>
    </section>
  );
};

export default Testimonial;
