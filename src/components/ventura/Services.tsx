import { motion } from "framer-motion";
import { Palette, Film, Fingerprint } from "lucide-react";

const SERVICES = [
  {
    icon: Palette,
    title: "Artwork",
    items: ["Album covers", "Single art", "Merch graphics"],
    image: "/work/remedy/main.jpg",
  },
  {
    icon: Film,
    title: "Video",
    items: ["Music videos", "Visualizers", "Social edits"],
    image: "/work/prbit/main.jpg",
  },
  {
    icon: Fingerprint,
    title: "Visual Identity",
    items: ["Brand systems", "Logo & type", "Rollout guidelines"],
    image: "/work/inner-circle/main.jpg",
  },
];

const Services = () => {
  return (
    <section id="services" className="border-y border-border bg-card/40">
      <div className="container py-24 sm:py-32">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          What we do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-balance text-center text-4xl font-light tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Services
        </motion.h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, items, image }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden bg-background p-8"
            >
              <img
                src={image}
                alt=""
                aria-hidden
                loading="lazy"
                className="absolute inset-0 h-full w-full scale-100 object-cover opacity-25 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-70 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/10" />

              <div className="relative">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 text-xl font-light text-foreground">{title}</h3>
                <ul className="mt-4 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
