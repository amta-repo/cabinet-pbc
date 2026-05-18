import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "2290197767048";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const project = String(data.get("project") || "");
    const message = String(data.get("message") || "");

    const lines = [
      "*Nouvelle demande — BATI Moderne Constructions*",
      `*Nom :* ${name}`,
      `*Email :* ${email}`,
      phone ? `*Téléphone :* ${phone}` : "",
      project ? `*Type de projet :* ${project}` : "",
      "",
      "*Message :*",
      message,
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setLoading(false);
    toast.success("Redirection vers WhatsApp", { description: "Envoyez le message pour finaliser votre demande." });
    form.reset();
  };

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="container-wide grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow mb-4">Contactez-nous</p>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Construisons <span className="text-gradient-gold">ensemble</span>
          </h2>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Un projet en tête ? Notre équipe vous accompagne dès l'étude de faisabilité jusqu'à la livraison clé en main. Votre message nous parvient directement par WhatsApp.
          </p>

          <div className="mt-12 space-y-6">
            {[
              { Icon: Phone, label: "Téléphone / WhatsApp", val: "+229 01 97 76 70 48", href: "tel:+2290197767048" },
              { Icon: Mail, label: "Email", val: "info@batimoderne.com", href: "mailto:info@batimoderne.com" },
              { Icon: MapPin, label: "Adresse", val: "C8RH+PJ Abomey-Calavi, Bénin" },
            ].map(({ Icon, label, val, href }) => (
              <div key={label} className="group flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-sm bg-secondary text-primary transition-all group-hover:bg-gradient-gold group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">{label}</div>
                  {href ? (
                    <a href={href} className="mt-1 block font-display text-lg font-bold text-foreground transition-colors hover:text-primary">{val}</a>
                  ) : (
                    <div className="mt-1 font-display text-lg font-bold text-foreground">{val}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-sm border border-border">
            <iframe
              title="BATI Moderne Constructions sur Google Maps"
              src="https://www.google.com/maps?q=Cabinet+PBC+Plans+Batiments+Constructions+Abomey-Calavi&hl=fr&z=17&output=embed"
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href="https://www.google.com/maps/place/Cabinet+PBC+(Plans+Batiments+Constructions)/@6.4417939,2.3264715,17z/data=!3m1!4b1!4m6!3m5!1s0x1024a9bb03433f97:0x9e71dbc01245fedc!8m2!3d6.4417886!4d2.3290464"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-secondary px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.28em] text-primary transition-colors hover:bg-primary/10"
            >
              Ouvrir dans Google Maps →
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-sm border border-border bg-card p-8 md:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nom complet" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Téléphone" name="phone" />
            <Field label="Type de projet" name="project" />
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">Votre message</label>
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
            {loading ? "Préparation…" : "Envoyer via WhatsApp"}
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            En cliquant, votre message s'ouvre dans WhatsApp et sera transmis directement à BATI Moderne Constructions.
          </p>
        </form>
      </div>
    </section>
  );
};

const Field = ({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) => (
  <div>
    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">{label}</label>
    <input
      type={type}
      name={name}
      required={required}
      className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
    />
  </div>
);

export default Contact;
