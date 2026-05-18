import { Link } from "react-router-dom";
import Seo from "@/components/site/Seo";

const NotFound = () => (
  <>
    <Seo title="Page introuvable — BATI Moderne Constructions" description="La page que vous cherchez n'existe pas." path="/404" />
    <section className="flex min-h-[70vh] items-center justify-center bg-navy py-32 text-center">
      <div className="container-wide">
        <p className="eyebrow mb-4">Erreur 404</p>
        <h1 className="font-display text-6xl font-black md:text-8xl">Page <span className="text-gradient-gold">introuvable</span></h1>
        <p className="mx-auto mt-6 max-w-md text-muted-foreground">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="mt-10 inline-block rounded-sm bg-gradient-gold px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold">
          Retour à l'accueil
        </Link>
      </div>
    </section>
  </>
);

export default NotFound;
