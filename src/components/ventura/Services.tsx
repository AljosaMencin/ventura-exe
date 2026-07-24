import { motion } from "framer-motion";
import { Palette, Film, Fingerprint } from "lucide-react";

const SERVICES = [
  {
    icon: Palette,
    title: "Artwork",
    items: ["Album covers", "Single art", "Merch graphics"],
  },
  {
    icon: Film,
    title: "Video",
    items: ["Music videos", "Visualizers", "Social edits"],
  },
  {
    icon: Fingerprint,
    title: "Visual Identity",
    items: ["Brand systems", "Logo & type", "Rollout guidelines"],
  },
];

const Services = () => {
  return (
    <section id="services" className="border-y border-border bg-card/40">
      <div className="container py-24 sm:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-light text-foreground sm:text-4xl"
        >
          Services
        </motion.h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background p-8"
            >
              <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-6 text-xl font-light text-foreground">{title}</h3>
              <ul className="mt-4 space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
