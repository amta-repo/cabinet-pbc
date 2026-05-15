import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message envoyé !", { description: "Notre équipe vous recontactera sous 24h." });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="container-wide grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow mb-4">Contactez-nous</p>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Construisons <span className="text-gradient-gold">ensemble</span>
          </h2>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Vous avez un projet en tête ? Notre équipe vous accompagne dès l'étude de faisabilité jusqu'à la livraison clé en main.
          </p>

          <div className="mt-12 space-y-6">
            {[
              { Icon: Phone, label: "Téléphone", val: "+33 1 23 45 67 89", href: "tel:+33123456789" },
              { Icon: Mail, label: "Email", val: "contact@henabtp.fr", href: "mailto:contact@henabtp.fr" },
              { Icon: MapPin, label: "Adresse", val: "12 Avenue des Bâtisseurs, 75008 Paris" },
            ].map(({ Icon, label, val, href }) => (
              <div key={label} className="group flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-sm bg-secondary text-primary transition-all group-hover:bg-gradient-gold group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                    {label}
                  </div>
                  {href ? (
                    <a href={href} className="mt-1 block font-display text-lg font-bold text-foreground transition-colors hover:text-primary">
                      {val}
                    </a>
                  ) : (
                    <div className="mt-1 font-display text-lg font-bold text-foreground">{val}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-sm border border-border bg-card p-8 md:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nom complet" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Téléphone" name="phone" />
            <Field label="Type de projet" name="project" />
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
              Votre message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
              placeholder="Décrivez votre projet..."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-sm bg-gradient-gold px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
          >
            {loading ? "Envoi…" : "Envoyer le message"}
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
      {label}
    </label>
    <input
      type={type}
      name={name}
      required={required}
      className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
    />
  </div>
);

export default Contact;
