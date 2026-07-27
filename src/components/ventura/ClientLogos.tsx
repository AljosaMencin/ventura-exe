import { motion } from "framer-motion";

const LOGOS = [
  { src: "/clients/inner-circle.png", name: "Inner Circle" },
  { src: "/clients/subsoil.png", name: "Subsoil Records" },
  { src: "/clients/dirty-notes.png", name: "Dirty Notes Records" },
  { src: "/clients/prbit.png", name: "Prbit Records" },
  { src: "/clients/beaumont.png", name: "Beaumont Records" },
  { src: "/clients/takmak.png", name: "Takmak Records" },
  { src: "/clients/inhale-music.png", name: "Inhale Music" },
];

const ClientLogos = () => {
  return (
    <section className="border-y border-border py-16">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          Trusted by
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
        >
          {LOGOS.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="h-6 w-auto opacity-50 transition-opacity duration-300 hover:opacity-100 sm:h-8"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
