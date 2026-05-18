import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const items = [
  { name: "Emma Tossou", role: "Maître d'ouvrage privée", text: "BATI Moderne Constructions a réalisé notre villa familiale dans les délais avec une qualité exceptionnelle. Une équipe à l'écoute, professionnelle et engagée du premier au dernier jour." },
  { name: "Nathan Kpondjo", role: "Directeur — Atlas Group Bénin", text: "Une collaboration exemplaire sur trois projets immobiliers. Le sérieux, la rigueur et la maîtrise technique de BATI Moderne Constructions en font un partenaire de premier choix." },
  { name: "Camille Dossou", role: "Promotrice immobilière", text: "Je travaille avec BATI Moderne Constructions depuis plusieurs années. Leur capacité à transformer une vision architecturale en réalité concrète est tout simplement remarquable." },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);
  const prev = () => setI((x) => (x - 1 + items.length) % items.length);
  const next = () => setI((x) => (x + 1) % items.length);

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container-wide">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-4">Témoignages</p>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Ce qu'ils <span className="text-gradient-gold">disent de nous</span>
          </h2>

          <div className="relative mt-16 rounded-sm border border-border bg-card p-10 md:p-14">
            <Quote className="absolute -top-6 left-10 h-12 w-12 text-primary opacity-90" strokeWidth={1.5} />
            <div className="min-h-[180px]">
              {items.map((t, idx) => (
                <div key={idx} className={`transition-opacity duration-500 ${idx === i ? "block animate-fade-in" : "hidden"}`}>
                  <div className="mb-6 flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (<Star key={s} className="h-4 w-4 fill-primary text-primary" />))}
                  </div>
                  <p className="font-display text-xl italic leading-relaxed text-foreground md:text-2xl">« {t.text} »</p>
                  <div className="mt-8">
                    <div className="font-display text-lg font-bold text-primary">{t.name}</div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-center justify-center gap-4">
              <button onClick={prev} aria-label="Précédent" className="rounded-sm border border-border p-3 transition-colors hover:border-primary hover:text-primary">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {items.map((_, idx) => (
                  <button key={idx} onClick={() => setI(idx)} aria-label={`Témoignage ${idx + 1}`} className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-gold" : "w-4 bg-foreground/20"}`} />
                ))}
              </div>
              <button onClick={next} aria-label="Suivant" className="rounded-sm border border-border p-3 transition-colors hover:border-primary hover:text-primary">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
