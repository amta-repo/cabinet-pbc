import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  current: string;
}

const PageHero = ({ eyebrow, title, highlight, description, current }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-navy pb-20 pt-40 md:pt-48">
    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
    <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
    <div className="container-wide relative">
      <nav className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground" aria-label="Fil d'Ariane">
        <Link to="/" className="hover:text-primary">Accueil</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-primary">{current}</span>
      </nav>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h1 className="font-display text-4xl font-black uppercase leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
        {title} {highlight && <span className="text-gradient-gold">{highlight}</span>}
      </h1>
      {description && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
      )}
    </div>
  </section>
);

export default PageHero;
