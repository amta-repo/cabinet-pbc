import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    eyebrow: "Plans · Bâtiments · Constructions",
    title: ["CONSTRUIRE", "L'EXCELLENCE"],
    ghost: "BÂTIR",
    text: "BATI Moderne Constructions conçoit vos plans et réalise vos projets de construction au Bénin avec une exigence absolue de qualité, de sécurité et de durabilité.",
  },
  {
    image: hero2,
    eyebrow: "Bureau d'études & maîtrise d'œuvre",
    title: ["DES PLANS", "SUR MESURE"],
    ghost: "PLANS",
    text: "De l'étude de faisabilité aux plans d'exécution, notre équipe traduit vos idées en projets concrets, livrés dans les délais et le budget.",
  },
  {
    image: hero3,
    eyebrow: "Suivi de chantier rigoureux",
    title: ["BÂTIR LA", "CONFIANCE"],
    ghost: "EXPERTISE",
    text: "Architectes, ingénieurs et chefs de chantier — une équipe pluridisciplinaire au service de la réussite de chaque projet à Abomey-Calavi.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-navy">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.image}
            alt={s.title.join(" ")}
            width={1920}
            height={1080}
            className={`h-full w-full object-cover ${i === index ? "animate-slow-zoom" : ""}`}
            {...(i === 0 ? {} : { loading: "lazy" as const })}
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center">
        <div className="container-wide">
          {slides.map((s, i) => (
            <div key={i} className={`max-w-2xl transition-all duration-700 ${i === index ? "block animate-fade-up" : "hidden"}`}>
              <div className="relative">
                <div className="pointer-events-none absolute -left-2 -top-16 select-none font-display text-[120px] font-black leading-none ghost-text md:text-[180px]">
                  {s.ghost}
                </div>
                <p className="eyebrow mb-6 relative">{s.eyebrow}</p>
                <h1 className="relative font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-7xl lg:text-8xl">
                  {s.title[0]}
                  <br />
                  <span className="text-gradient-gold">{s.title[1]}</span>
                </h1>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{s.text}</p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/projets"
                    className="group inline-flex items-center gap-3 rounded-sm bg-gradient-gold px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5"
                  >
                    Découvrir nos projets
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 rounded-sm border border-primary/60 bg-transparent px-7 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:bg-primary/10"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={prev} aria-label="Précédent" className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-sm border border-border/60 bg-background/40 p-3 backdrop-blur transition-colors hover:border-primary hover:text-primary md:left-8">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={next} aria-label="Suivant" className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-sm border border-border/60 bg-background/40 p-3 backdrop-blur transition-colors hover:border-primary hover:text-primary md:right-8">
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-10 bg-gradient-gold" : "w-6 bg-foreground/30 hover:bg-foreground/60"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
