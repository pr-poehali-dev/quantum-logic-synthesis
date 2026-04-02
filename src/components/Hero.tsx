import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-80">
          23–30 мая · Испания · 120 км
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          ПУТЬ<br />СВЯТОГО<br />ИАКОВА
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10">
          Путь от огромного прыжка за пределы зоны своего комфорта до личных трансформаций!
        </p>
        <a
          href="#contact"
          className="inline-block border border-white text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Хочу стать паломником
        </a>
      </div>
    </div>
  );
}