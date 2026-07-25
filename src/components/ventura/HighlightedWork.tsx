import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Project {
  slug: string;
  client: string;
  title: string;
  others: number;
  process: string;
}

const PROJECTS: Project[] = [
  {
    slug: "remedy",
    client: "Remedy",
    title: "Sick Flow",
    others: 4,
    process:
      "Remedy wanted a label mark that could carry a bootleg edit without disappearing into the crate. We built the identity around a single loose, gnashing character — inked by hand, then vectorised just enough to survive small pressings — and paired it with a lettering pass that reads fast on a dim dancefloor. Green-on-black kept every variant instantly recognisable across a run of one-offs.",
  },
  {
    slug: "subsoil",
    client: "Subsoil Records",
    title: "Work It EP — Alex Dyer",
    others: 4,
    process:
      "Subsoil's droplet mark is the whole brand in miniature, so the brief was to let it fill the frame. We modelled it in brushed metal and let the lighting do the emotional work — warm gold sliding into a bruised pink across the surface. It's a system built to be reskinned release to release without ever losing the shape that makes the label recognisable at a glance.",
  },
  {
    slug: "dirty-notes",
    client: "Dirty Notes Records",
    title: "Love Fane — Astro Dime",
    others: 5,
    process:
      "Love Fane needed to feel dangerous and romantic in the same breath. We leaned into a distressed red-on-black palette, a jagged display type for the title lockup, and a lipstick mark bleeding off the edge of the label — a small, deliberately crude gesture that keeps the whole thing from feeling too polished for the record inside it.",
  },
  {
    slug: "prbit",
    client: "Prbit Records",
    title: "Tekno Eurooppa EP — Konerytmi",
    others: 5,
    process:
      "Konerytmi's name translates roughly to 'machine rhythm,' so the artwork went full technical-manual: line-drawn hardware, a copper-on-black palette, and typography that reads like it was stencilled onto a shipping crate. It's a retro-futurist bit — equal parts Cold War industrial design and Eastern European tekno flyer.",
  },
];

const imagesFor = (project: Project) => [
  `/work/${project.slug}/main.jpg`,
  ...Array.from({ length: project.others }, (_, i) => `/work/${project.slug}/${String(i + 1).padStart(2, "0")}.jpg`),
];

const WorkCase = ({ project, index, total }: { project: Project; index: number; total: number }) => {
  const images = imagesFor(project);
  const [current, setCurrent] = useState(0);

  const go = (dir: 1 | -1) => setCurrent((c) => (c + dir + images.length) % images.length);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={index > 0 ? "border-t border-border pt-24" : ""}
    >
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
        0{index + 1} <span className="text-border">/</span> 0{total}
      </span>

      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start">
        <div>
          <h3 className="text-2xl font-light text-foreground sm:text-3xl">{project.client}</h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-primary">{project.title}</p>
          <p className="mt-4 text-pretty text-sm font-light leading-relaxed text-muted-foreground">
            {project.process}
          </p>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-card">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current]}
                alt={`${project.title} — image ${current + 1}`}
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="font-mono text-xs text-muted-foreground">
              {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous image"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next image"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const HighlightedWork = () => {
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

      <div className="mt-16 flex flex-col gap-24">
        {PROJECTS.map((project, i) => (
          <WorkCase key={project.slug} project={project} index={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
};

export default HighlightedWork;
