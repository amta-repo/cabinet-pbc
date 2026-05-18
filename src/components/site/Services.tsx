import { Building2, HardHat, Hammer, Ruler, Truck, ClipboardCheck, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Building2, HardHat, Hammer, Ruler, Truck, ClipboardCheck,
};

const Services = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="container-wide">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="eyebrow mb-4">Nos Services</p>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Une expertise <span className="text-gradient-gold">complète</span> du bâtiment
          </h2>
          <p className="mt-6 text-muted-foreground">
            Six savoir-faire complémentaires pour donner forme à vos projets — chaque service raconte une histoire, du premier trait au dernier coup de pinceau.
          </p>
        </div>

        <div className="space-y-32 md:space-y-40">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Building2;
            const reverse = i % 2 === 1;
            return (
              <article
                key={s.slug}
                className="group relative grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                {/* Big number ghost */}
                <div className={`pointer-events-none absolute -top-16 select-none font-display text-[160px] font-black leading-none ghost-text md:text-[220px] ${reverse ? "right-0" : "left-0"}`}>
                  0{i + 1}
                </div>

                {/* IMAGE BLOCK */}
                <div className={`relative lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-elegant">
                    <img
                      src={s.image}
                      alt={s.title}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy/40 via-transparent to-navy/60" />
                  </div>

                  {/* Floating overlay card (variant per service) */}
                  {i === 0 && (
                    <div className="absolute -bottom-10 right-4 hidden w-72 rounded-sm border border-border bg-card p-6 shadow-elegant md:block">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-sm bg-gradient-gold text-primary-foreground"><Icon className="h-6 w-6" /></div>
                      <div className="font-display text-lg font-bold">{s.title}</div>
                      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Livraison clé en main</div>
                    </div>
                  )}
                  {i === 1 && (
                    <div className="absolute -bottom-12 -left-6 hidden w-80 rounded-sm bg-gradient-gold p-6 shadow-gold md:block">
                      <div className="text-xs font-semibold uppercase tracking-[0.32em] text-primary-foreground/80">Économies</div>
                      <div className="mt-2 font-display text-4xl font-black text-primary-foreground">Jusqu'à 30%</div>
                      <div className="mt-1 text-sm text-primary-foreground/85">grâce à nos métrés optimisés.</div>
                    </div>
                  )}
                  {i === 2 && (
                    <div className="absolute left-4 top-4 hidden rounded-sm bg-navy/85 px-4 py-3 backdrop-blur md:block">
                      <div className="font-display text-2xl font-black text-primary">100%</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Conformité normes</div>
                    </div>
                  )}
                  {i === 3 && (
                    <div className="absolute -bottom-8 left-1/2 hidden w-[88%] -translate-x-1/2 grid-cols-3 gap-3 rounded-sm border border-border bg-card p-5 shadow-elegant md:grid">
                      {s.stats.map((st) => (
                        <div key={st.label} className="text-center">
                          <div className="font-display text-2xl font-black text-primary">{st.value}{st.label.includes("%") || st.label.includes("Délais") || st.label.includes("Économies") ? "%" : "+"}</div>
                          <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{st.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  {i === 4 && (
                    <div className="absolute -right-6 -top-6 hidden h-32 w-32 rotate-12 items-center justify-center rounded-full bg-gradient-gold text-center shadow-gold md:flex">
                      <div>
                        <div className="font-display text-3xl font-black text-primary-foreground">+35%</div>
                        <div className="text-[9px] uppercase tracking-widest text-primary-foreground/85">de valeur</div>
                      </div>
                    </div>
                  )}
                  {i === 5 && (
                    <div className="absolute -bottom-6 right-6 hidden rounded-sm border-2 border-primary bg-navy/90 px-5 py-4 backdrop-blur md:block">
                      <div className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Infrastructure</div>
                      <div className="mt-1 font-display text-xl font-bold text-foreground">Bâtir la ville de demain</div>
                    </div>
                  )}
                </div>

                {/* TEXT BLOCK */}
                <div className={`relative lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <p className="eyebrow mb-4">{s.eyebrow}</p>
                  <h3 className="font-display text-3xl font-bold leading-tight md:text-4xl">
                    {s.title}
                  </h3>
                  <div className="mt-3 h-1 w-16 bg-gradient-gold" />
                  <p className="mt-6 text-muted-foreground">{s.description}</p>

                  <ul className="mt-6 space-y-2.5">
                    {s.deliverables.slice(0, 4).map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-foreground/90">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-gold">
                          <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/services/${s.slug}`}
                      className="group/btn inline-flex items-center gap-3 rounded-sm bg-gradient-gold px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5"
                    >
                      En savoir plus
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                    <a
                      href="https://wa.me/2290197767048"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary"
                    >
                      Discuter sur WhatsApp →
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
