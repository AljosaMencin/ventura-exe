import { motion } from "framer-motion";
import { Palette, Film, Fingerprint } from "lucide-react";

const SERVICES = [
  {
    icon: Palette,
    number: "01",
    title: "Artwork",
    items: ["Album covers", "Single art", "Merch graphics"],
  },
  {
    icon: Film,
    number: "02",
    title: "Video",
    items: ["Music videos", "Visualizers", "Social edits"],
  },
  {
    icon: Fingerprint,
    number: "03",
    title: "Visual Identity",
    items: ["Brand systems", "Logo & type", "Rollout guidelines"],
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
          {SERVICES.map(({ icon: Icon, number, title, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative min-h-[22rem] overflow-hidden bg-background p-8 transition-colors duration-300 hover:bg-card"
            >
              <Icon
                aria-hidden
                strokeWidth={0.75}
                className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 text-primary/[0.06] transition-all duration-500 ease-out group-hover:-right-4 group-hover:-top-4 group-hover:text-primary/20 group-hover:rotate-6"
              />

              <div className="relative flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="font-mono text-xs text-muted-foreground">{number}</span>
              </div>

              <div className="relative mt-32">
                <h3 className="text-xl font-light text-foreground">{title}</h3>
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
