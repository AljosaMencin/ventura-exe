import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MouseGlow = () => {
  const x = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const y = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 3 : 0);
  const springX = useSpring(x, { damping: 28, stiffness: 50, mass: 0.6 });
  const springY = useSpring(y, { damping: 28, stiffness: 50, mass: 0.6 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 -z-10 h-[42rem] w-[42rem] rounded-full blur-[100px]"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background: "radial-gradient(circle, hsl(var(--primary) / 0.16), transparent 70%)",
      }}
    />
  );
};

export default MouseGlow;
