const partners = [
  "BOUYGUES", "VINCI", "EIFFAGE", "COLAS", "SPIE", "BATIMENT FRANCE", "QUALIBAT", "ATLAS GROUP",
];

const Clients = () => {
  const list = [...partners, ...partners];
  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-14">
      <div className="container-wide mb-8 flex items-center justify-between gap-4">
        <p className="eyebrow">Ils nous font confiance</p>
        <div className="hidden h-px flex-1 bg-border md:block" />
        <p className="hidden text-xs uppercase tracking-widest text-muted-foreground md:block">
          Partenaires & Clients
        </p>
      </div>
      <div className="relative mask-fade overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 px-6">
          {list.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-16 min-w-[180px] items-center justify-center font-display text-xl font-black tracking-[0.2em] text-foreground/40 transition-colors hover:text-primary"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
