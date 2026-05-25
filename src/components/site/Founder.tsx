import { Quote, Phone, Mail } from "lucide-react";
import founder from "@/assets/Founder.jpg";

const Founder = () => (
  <section className="relative overflow-hidden bg-navy-light py-24 md:py-32">
    <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
    <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="relative">
        <div className="relative overflow-hidden rounded-sm shadow-elegant">
          <img src={founder} alt="Christel DEGAN — Directeur Général BATI Moderne Constructions" width={1280} height={720} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="absolute -bottom-6 -right-4 hidden rounded-sm bg-gradient-gold p-6 shadow-gold md:block">
          <div className="font-display text-xl font-bold text-primary-foreground">Christel DEGAN</div>
          <div className="text-xs uppercase tracking-widest text-primary-foreground/85">Directeur Général</div>
        </div>
      </div>
      <div>
        <p className="eyebrow mb-4">Le mot du fondateur</p>
        <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
          « Bâtir, c'est <span className="text-gradient-gold">tenir parole</span> »
        </h2>
        <div className="relative mt-8 rounded-sm border-l-4 border-primary bg-card p-6">
          <Quote className="absolute -top-4 left-4 h-8 w-8 text-primary" />
          <p className="text-muted-foreground">
            « J'ai créé BATI Moderne Constructions avec une conviction simple : chaque projet mérite la même rigueur, qu'il s'agisse d'une villa familiale ou d'un immeuble de bureaux. Nous écoutons, nous concevons, nous construisons — et nous restons à vos côtés bien après la remise des clés. »
          </p>
          <div className="mt-4 text-sm font-semibold text-foreground">— Christel DEGAN, Directeur Général</div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="tel:+2290197767048" className="inline-flex items-center gap-2 rounded-sm border-2 border-primary/60 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-primary/10 hover:border-primary">
            <Phone className="h-4 w-4" /> +229 01 97 76 70 48
          </a>
          <a href="mailto:info@batimoderne.com" className="inline-flex items-center gap-2 rounded-sm border-2 border-primary/60 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-primary/10 hover:border-primary">
            <Mail className="h-4 w-4" /> info@batimoderne.com
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Founder;
