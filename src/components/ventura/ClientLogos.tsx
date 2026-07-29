import { motion } from "framer-motion";
import { asset } from "@/lib/assetUrl";

const LOGOS = [
  { src: "/clients/inner-circle.png", name: "Inner Circle", size: "h-14 sm:h-16" },
  { src: "/clients/subsoil.png", name: "Subsoil Records", size: "h-16 sm:h-20" },
  { src: "/clients/dirty-notes.png", name: "Dirty Notes Records", size: "h-12 sm:h-14" },
  { src: "/clients/prbit.png", name: "Prbit Records", size: "h-12 sm:h-14" },
  { src: "/clients/beaumont.png", name: "Beaumont Records", size: "h-10 sm:h-12" },
  { src: "/clients/takmak.png", name: "Takmak Records", size: "h-6 sm:h-7" },
  { src: "/clients/inhale-music.png", name: "Inhale Music", size: "h-8 sm:h-9" },
  { src: "/clients/boogie-house.png", name: "Boogie House", size: "h-14 sm:h-16" },
];

const ClientLogos = () => {
  return (
    <section className="py-16">
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
          className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-8"
        >
          {LOGOS.map((logo) => (
            <img
              key={logo.name}
              src={asset(logo.src)}
              alt={logo.name}
              loading="lazy"
              className={`w-auto opacity-50 transition-opacity duration-300 hover:opacity-100 ${logo.size}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
