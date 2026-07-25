import { motion } from "framer-motion";

const PROJECTS = [
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
    client: "prbit_records",
    title: "Tekno Eurooppa EP — Konerytmi",
    others: 5,
    process:
      "Konerytmi's name translates roughly to 'machine rhythm,' so the artwork went full technical-manual: line-drawn hardware, a copper-on-black palette, and typography that reads like it was stencilled onto a shipping crate. It's a retro-futurist bit — equal parts Cold War industrial design and Eastern European tekno flyer.",
  },
];

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
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={i > 0 ? "border-t border-border pt-24" : ""}
          >
            <div className="mb-6 flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              <span>
                0{i + 1} <span className="text-border">/</span> 0{PROJECTS.length}
              </span>
              <span className="text-primary">{project.client}</span>
            </div>

            <div className="overflow-hidden rounded-lg border border-border bg-card">
              <img
                src={`/work/${project.slug}/main.jpg`}
                alt={project.title}
                loading="lazy"
                className="block w-full"
              />
            </div>

            <div className="mt-8 max-w-2xl">
              <h3 className="text-2xl font-light text-foreground sm:text-3xl">{project.title}</h3>
              <p className="mt-4 text-pretty text-sm font-light leading-relaxed text-muted-foreground">
                {project.process}
              </p>
            </div>

            <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
              {Array.from({ length: project.others }).map((_, j) => (
                <img
                  key={j}
                  src={`/work/${project.slug}/${String(j + 1).padStart(2, "0")}.jpg`}
                  alt={`${project.title} — detail ${j + 1}`}
                  loading="lazy"
                  className="h-48 w-48 flex-none rounded-md border border-border object-cover sm:h-56 sm:w-56"
                />
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default HighlightedWork;
