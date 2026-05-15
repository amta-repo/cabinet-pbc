import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 250, suffix: "+", label: "Projets Livrés" },
  { value: 180, suffix: "+", label: "Clients Satisfaits" },
  { value: 15, suffix: "", label: "Années d'Expertise" },
  { value: 45, suffix: "", label: "Experts Qualifiés" },
];

function useCountUp(target: number, run: boolean, duration = 1800) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let start: number | null = null;
    let raf = 0;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return n;
}

const Stat = ({ value, suffix, label, run }: { value: number; suffix: string; label: string; run: boolean }) => {
  const n = useCountUp(value, run);
  return (
    <div className="group text-center">
      <div className="font-display text-5xl font-black text-gradient-gold md:text-6xl lg:text-7xl">
        {n}
        {suffix}
      </div>
      <div className="mt-3 h-px w-12 bg-primary/40 mx-auto transition-all duration-500 group-hover:w-20 group-hover:bg-primary" />
      <div className="mt-3 text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setRun(true)),
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-border bg-navy py-20">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container-wide relative grid grid-cols-2 gap-y-12 md:grid-cols-4">
        {stats.map((s) => (
          <Stat key={s.label} {...s} run={run} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
