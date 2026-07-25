import { motion } from "framer-motion";

const SERVICES = [
  {
    number: "01",
    title: "Artwork",
    items: ["Album covers", "Single art", "Merch graphics"],
  },
  {
    number: "02",
    title: "Video",
    items: ["Music videos", "Visualizers", "Social edits"],
  },
  {
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

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {SERVICES.map(({ number, title, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex min-h-[20rem] flex-col justify-between rounded-lg border border-border bg-background p-8 transition-colors duration-300 hover:border-primary hover:bg-primary"
            >
              <span className="font-mono text-xs text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/70">
                {number}
              </span>

              <div>
                <h3 className="text-3xl font-light tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary-foreground sm:text-4xl">
                  {title}
                </h3>
                <ul className="mt-6 space-y-1.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/80"
                    >
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
