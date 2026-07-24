import { motion } from "framer-motion";

const WORK = [
  { src: "/work/01.jpg", title: "Emran", tag: "EP Cover" },
  { src: "/work/02.jpg", tag: "Single Cover" },
  { src: "/work/03.jpg", tag: "Album Cover" },
  { src: "/work/04.jpg", tag: "Single Cover" },
  { src: "/work/05.jpg", tag: "Cover Art" },
  { src: "/work/06.jpg", tag: "Cover Art" },
  { src: "/work/07.jpg", tag: "Album Cover" },
  { src: "/work/08.jpg", tag: "Cover Art" },
  { src: "/work/09.jpg", tag: "Cover Art" },
  { src: "/work/10.jpg", tag: "Cover Art" },
  { src: "/work/11.jpg", tag: "Cover Art" },
  { src: "/work/12.jpg", tag: "Artwork" },
  { src: "/work/13.jpg", tag: "Cover Art" },
  { src: "/work/14.jpg", title: "Zorica", tag: "Cover Art" },
  { src: "/work/15.jpg", tag: "Promo Artwork" },
  { src: "/work/16.jpg", tag: "Artwork" },
  { src: "/work/17.jpg", title: "Eskina — Alive", tag: "Vinyl Label" },
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

      <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {WORK.map((piece, i) => (
          <motion.a
            key={piece.src}
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: (i % 6) * 0.06 }}
            className="group mb-6 block break-inside-avoid overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="relative">
              <img
                src={piece.src}
                alt={piece.title ? `${piece.title} — ${piece.tag}` : piece.tag}
                loading="lazy"
                className="block w-full transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-4 bottom-4 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {piece.title && <p className="text-sm text-foreground">{piece.title}</p>}
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-primary">{piece.tag}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default SelectedProjects;
