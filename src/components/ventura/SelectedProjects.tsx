import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  { title: "Project One", type: "Album artwork" },
  { title: "Project Two", type: "Visual identity" },
  { title: "Project Three", type: "Music video" },
  { title: "Project Four", type: "Merch & packaging" },
];

const SelectedProjects = () => {
  return (
    <section id="work" className="container py-24 sm:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-light text-foreground sm:text-4xl"
      >
        Selected work
      </motion.h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <motion.a
            key={project.title}
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group block"
          >
            <div className="placeholder-fill relative aspect-square overflow-hidden rounded-lg border border-border bg-card">
              <span className="absolute bottom-4 left-4 font-mono text-xs text-muted-foreground">
                0{i + 1}
              </span>
              <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-primary" />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="text-lg font-light text-foreground">{project.title}</h3>
              <span className="text-sm text-muted-foreground">{project.type}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default SelectedProjects;
