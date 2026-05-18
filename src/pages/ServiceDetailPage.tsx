import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check, Phone, MessageCircle } from "lucide-react";
import Seo from "@/components/site/Seo";
import { getService, services } from "@/data/services";

const PieStat = ({ value, label, color, max = 100 }: { value: number; label: string; color: string; max?: number }) => {
  const pct = Math.min(100, (value / max) * 100);
  const r = 52;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-36 w-36">
        <svg viewBox="0 0 120 120" className="-rotate-90">
          <circle cx="60" cy="60" r={r} fill="none" stroke="hsl(var(--secondary))" strokeWidth="10" />
          <circle cx="60" cy="60" r={r} fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
            strokeDasharray={`${dash} ${c - dash}`} className="transition-all duration-1000" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl font-black text-foreground">{value}{max === 100 ? "%" : "+"}</span>
        </div>
      </div>
      <div className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">{label}</div>
    </div>
  );
};

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = getService(slug || "");
  if (!service) return <Navigate to="/services" replace />;

  const idx = services.findIndex((s) => s.slug === service.slug);
  const next = services[(idx + 1) % services.length];

  return (
    <>
      <Seo
        title={`${service.title} — BATI Moderne Constructions`}
        description={service.short}
        path={`/services/${service.slug}`}
      />

      {/* Hero with image background */}
      <section className="relative h-[60vh] min-h-[460px] overflow-hidden bg-navy pt-24">
        <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
        <div className="container-wide relative z-10 flex h-full flex-col justify-end pb-16">
          <Link to="/services" className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-3 w-3" /> Tous les services
          </Link>
          <p className="eyebrow mb-4">{service.eyebrow}</p>
          <h1 className="max-w-3xl font-display text-4xl font-black uppercase leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">{service.short}</p>
        </div>
      </section>

      {/* Description + deliverables */}
      <section className="relative bg-background py-24">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Présentation</p>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
              Un service <span className="text-gradient-gold">pensé pour vous</span>
            </h2>
            <p className="mt-6 text-muted-foreground">{service.description}</p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-sm border border-border bg-card p-8">
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-primary">Ce que nous livrons</h3>
              <ul className="space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-gold">
                      <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / pie charts */}
      <section className="relative border-y border-border bg-navy py-20">
        <div className="container-wide">
          <p className="eyebrow mb-3 text-center">Nos résultats</p>
          <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-bold md:text-4xl">
            Des chiffres qui <span className="text-gradient-gold">parlent</span>
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {service.stats.map((s) => (
              <PieStat key={s.label} {...s} max={s.value > 100 ? Math.ceil(s.value * 1.1) : 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="relative bg-background py-24">
        <div className="container-wide">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4">Notre méthode</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Un <span className="text-gradient-gold">process</span> rigoureux pas à pas
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <div key={p.title} className="group relative rounded-sm border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-gold">
                <div className="mb-4 font-display text-5xl font-black text-primary/15 transition-colors group-hover:text-primary/40">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <img src={service.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        <div className="container-wide relative z-10 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Prêt à démarrer ?</p>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
              Discutons de votre <span className="text-gradient-gold">projet</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Devis gratuit sous 24h. Notre équipe vous accompagne dès le premier échange.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link to="/contact" className="inline-flex items-center gap-3 rounded-sm bg-gradient-gold px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold hover:-translate-y-0.5 transition-transform">
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+2290197767048" className="inline-flex items-center gap-3 rounded-sm border-2 border-primary/60 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-foreground hover:bg-primary/10 hover:border-primary">
              <Phone className="h-4 w-4" /> Appeler
            </a>
            <a href="https://wa.me/2290197767048" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-sm bg-[#25D366] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white hover:-translate-y-0.5 transition-transform">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Other services / internal linking */}
      <section className="relative bg-background py-20">
        <div className="container-wide">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">Explorer</p>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Nos autres services</h2>
            </div>
            <Link to="/services" className="text-xs font-semibold uppercase tracking-wider text-primary hover:underline">
              Voir tous les services →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.filter((s) => s.slug !== service.slug).slice(0, 3).map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="group relative block overflow-hidden rounded-sm border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-gold">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="eyebrow mb-2">{s.eyebrow}</p>
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{s.short}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex justify-end">
            <Link to={`/services/${next.slug}`} className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-primary hover:underline">
              Service suivant : {next.title} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
