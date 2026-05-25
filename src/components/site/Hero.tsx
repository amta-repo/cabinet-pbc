import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  { image: hero1 },
  { image: hero2 },
  { image: hero3 },
];

const headline = ["BÂTIR.", "INVESTIR.", "INNOVER."];
const subtitle =
  "Architectes, ingénieurs et chefs de chantier — une équipe pluridisciplinaire au service de la réussite de chaque projet à Abomey-Calavi.";

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-navy">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.image}
            alt="BATI Moderne Constructions — chantier"
            width={1920}
            height={1080}
            className={`h-full w-full object-cover ${i === index ? "animate-slow-zoom" : ""}`}
            {...(i === 0 ? {} : { loading: "lazy" as const })}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center">
        <div className="container-wide grid w-full items-end gap-10 pb-24 pt-32 lg:grid-cols-12 lg:items-center lg:pb-0 lg:pt-0">
          <div className="lg:col-span-8 animate-fade-up">
            <p className="eyebrow mb-6">Plans · Bâtiments · Constructions</p>
            <h1 className="font-display text-6xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-8xl lg:text-[8.5rem]">
              {headline.map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? <span className="text-gradient-gold">{line}</span> : line}
                </span>
              ))}
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projets"
                className="group inline-flex items-center gap-3 rounded-sm bg-gradient-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5"
              >
                Découvrir nos projets
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="hidden lg:col-span-4 lg:block">
            <Link
              to="/contact"
              className="group relative block overflow-hidden rounded-sm bg-background/95 p-10 shadow-elegant backdrop-blur transition-all hover:-translate-y-1 hover:shadow-gold"
            >
              <span className="absolute left-0 top-0 h-1 w-full bg-gradient-gold" />
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">Travaillons ensemble</p>
              <div className="mt-6 flex items-end justify-between gap-6">
                <h3 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
                  Contactez-<br />nous
                </h3>
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gradient-gold text-primary-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <MoveUpRight className="h-5 w-5" />
                </span>
              </div>
              <div className="mt-8 h-px w-full bg-border" />
              <p className="mt-6 text-sm text-muted-foreground">
                Devis gratuit sous 48h. Étude personnalisée et confidentielle.
              </p>
            </Link>
          </div>
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
