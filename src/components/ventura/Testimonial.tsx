import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Aljo goes above and beyond for his customers. He exceeded expectations in every shape and form, and delivered a fantastic piece of work. Communications were second to none, and for the price, the professionalism, creativity, and delivery is well worth every penny.",
    name: "bonesukg",
    flag: "🇬🇧",
    location: "United Kingdom",
    duration: "3 days",
  },
  {
    quote:
      "Attention to detail is incredible. On time every step of the way, and honestly just great to work with overall. Really appreciated it and looking forward to working together again soon!",
    name: "nicky130189",
    flag: "🇺🇸",
    location: "United States",
    duration: "6 days",
  },
  {
    quote:
      "Incredibly happy with the result! Aljo is highly professional and the designs are great. The schedule for this delivery was tight and Aljo was always quick to respond and do adjustments where needed. Would definitely order again!",
    name: "verenawusatiuk",
    flag: "🇦🇹",
    location: "Austria",
    duration: "4 days",
  },
];

const Testimonial = () => {
  return (
    <section className="container py-24 sm:py-32">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center font-mono text-xs uppercase tracking-[0.3em] text-primary"
      >
        Testimonials
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 text-balance text-center text-4xl font-light tracking-tight text-foreground sm:text-5xl lg:text-6xl"
      >
        Client feedback
      </motion.h2>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col rounded-lg border border-border bg-card p-8"
          >
            <div className="flex gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
              ))}
            </div>

            <blockquote className="mt-6 flex-1 text-pretty text-sm font-light leading-relaxed text-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <figcaption className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <div>
                <p className="text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.flag} {t.location}
                </p>
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
                {t.duration}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
