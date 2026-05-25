import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bg from "@/assets/hero-3.jpg";

interface Props {
  title?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}

const CtaBanner = ({
  title = "Prêt à bâtir ensemble ?",
  primary = { label: "Démarrer un projet", to: "/contact" },
  secondary = { label: "Rejoindre l'équipe", to: "/equipe" },
}: Props) => (
  <section className="relative overflow-hidden">
    <img src={bg} alt="" className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215_40%_5%)] via-[hsl(215_40%_5%)]/85 to-[hsl(215_40%_5%)]/20" />
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold" />
    <div className="container-wide relative z-10 py-20 md:py-28">
      <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
        {title}
      </h2>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          to={primary.to}
          className="group inline-flex items-center gap-3 rounded-sm bg-gradient-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5"
        >
          {primary.label} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          to={secondary.to}
          className="inline-flex items-center gap-3 rounded-sm border border-foreground/30 bg-background/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-foreground backdrop-blur transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
        >
          {secondary.label}
        </Link>
      </div>
    </div>
  </section>
);

export default CtaBanner;