import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const DESKTOP_QUERY = "(min-width: 1024px)";

const TESTIMONIALS = [
  {
    id: "bonesukg",
    quote:
      "Aljo goes above and beyond for his customers. He exceeded expectations in every shape and form, and delivered a fantastic piece of work. Communications were second to none, and for the price, the professionalism, creativity, and delivery is well worth every penny.",
    name: "bonesukg",
    flag: "🇬🇧",
    location: "United Kingdom",
    duration: "3 days",
  },
  {
    id: "nicky130189",
    quote:
      "Attention to detail is incredible. On time every step of the way, and honestly just great to work with overall. Really appreciated it and looking forward to working together again soon!",
    name: "nicky130189",
    flag: "🇺🇸",
    location: "United States",
    duration: "6 days",
  },
  {
    id: "verenawusatiuk",
    quote:
      "Incredibly happy with the result! Aljo is highly professional and the designs are great. The schedule for this delivery was tight and Aljo was always quick to respond and do adjustments where needed. Would definitely order again!",
    name: "verenawusatiuk",
    flag: "🇦🇹",
    location: "Austria",
    duration: "4 days",
  },
  {
    id: "quintenrcm-1",
    quote:
      "Consistently impressed by Aljo's work. He understands the vision immediately, and delivers a final product that actually elevates the project. Highly recommended for anyone who values actual creativity over standard templates.",
    name: "quintenrcm",
    flag: "🇳🇱",
    location: "Netherlands",
    duration: "2 days",
  },
  {
    id: "quintenrcm-2",
    quote: "Fantastic work, delivered it super quick, would say it's a homerun! Will definitely come back!",
    name: "quintenrcm",
    flag: "🇳🇱",
    location: "Netherlands",
    duration: "2 days",
  },
  {
    id: "gavingaughan",
    quote:
      "Went above and beyond to understand my creative vision. Took into mind the creative work of the track I sent over and delivered in a reasonable time. Pleasure to work with him and will be using his services again.",
    name: "gavingaughan",
    flag: "🇺🇸",
    location: "United States",
    duration: "1 day",
  },
  {
    id: "jptakeshi12",
    quote:
      "This is the second time I've gone with him because he did such a good job the first time and he did not disappoint the second time round! Love his work, creative, quick and communicates to ensure that you are satisfied with the work. Will definitely be back again in the future, he does not miss.",
    name: "jptakeshi12",
    flag: "🇦🇺",
    location: "Australia",
    duration: "3 days",
  },
  {
    id: "rokomaji",
    quote:
      "Aljo's work on our album cover was incredible, truly EXCEEDING expectations with perfect brand alignment and professionalism. Collaborating with Aljo was a breeze, marked by their POLITENESS and quick responsiveness, showing a DEEP understanding of our needs. Highly recommend! 🙌",
    name: "rokomaji",
    flag: "🇬🇧",
    location: "United Kingdom",
    duration: "11 days",
  },
];

const Testimonial = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(
    () => typeof window !== "undefined" && window.matchMedia(DESKTOP_QUERY).matches ? 3 : 1,
  );

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    const update = () => setCardsPerView(mql.matches ? 3 : 1);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - cardsPerView);

  const scrollToIndex = (i: number) => {
    const el = scrollRef.current;
    const card = el?.children[i] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  const go = (dir: 1 | -1) => {
    const next = Math.min(Math.max(index + dir, 0), maxIndex);
    setIndex(next);
    scrollToIndex(next);
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[0] as HTMLElement | undefined;
    if (!card) return;
    const step = card.getBoundingClientRect().width + 24;
    setIndex(Math.round(el.scrollLeft / step));
  };

  return (
    <section className="container py-24 sm:py-32">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center font-mono text-xs uppercase tracking-[0.3em] text-primary"
      >
        Testimonials
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 text-balance text-center text-4xl font-light tracking-tight text-foreground sm:text-5xl lg:text-6xl"
      >
        Client feedback
      </motion.h2>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="scrollbar-hide mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
      >
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.id}
            className="flex w-full flex-none snap-center flex-col rounded-lg border border-border bg-card p-8 lg:w-[calc((100%-3rem)/3)]"
          >
            <div className="flex gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
              ))}
            </div>

            <blockquote className="mt-6 flex-1 text-pretty text-sm font-light leading-relaxed text-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <figcaption className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <div>
                <p className="text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.flag} {t.location}
                </p>
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
                {t.duration}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={index === 0}
          aria-label="Previous review"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-muted-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <span className="font-mono text-xs text-muted-foreground">
          {index + 1} / {TESTIMONIALS.length}
        </span>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={index === maxIndex}
          aria-label="Next review"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-muted-foreground"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
