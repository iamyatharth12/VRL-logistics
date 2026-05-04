import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export default function BlurText({ text, className = "", delay = 100, direction = "bottom" }) {
  const words = text.split(" ");
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const variants = {
    hidden: { filter: "blur(10px)", opacity: 0, y: direction === "bottom" ? 50 : -50 },
    mid: { filter: "blur(5px)", opacity: 0.5, y: direction === "bottom" ? -5 : 5 },
    visible: { filter: "blur(0px)", opacity: 1, y: 0 },
  };

  return (
    <span ref={ref} className={className} style={{ display: "block" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{
            delay: (i * delay) / 1000,
            duration: 0.35 * 2,
            times: [0, 0.5, 1],
            ease: "easeOut",
          }}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
