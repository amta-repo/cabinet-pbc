import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const SiteLayout = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
