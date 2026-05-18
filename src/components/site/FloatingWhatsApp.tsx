import { MessageCircle } from "lucide-react";

const WA = "2290197767048";

const FloatingWhatsApp = () => (
  <a
    href={`https://wa.me/${WA}?text=${encodeURIComponent("Bonjour BATI Moderne Constructions, je souhaite des informations.")}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Discuter sur WhatsApp"
    className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-10px_rgba(37,211,102,0.7)] transition-transform hover:scale-110 md:h-16 md:w-16"
  >
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
    <MessageCircle className="relative h-7 w-7 md:h-8 md:w-8" />
  </a>
);

export default FloatingWhatsApp;
