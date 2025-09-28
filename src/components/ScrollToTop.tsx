import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { smoothScrollTo } from "@/lib/smoothScroll";
import { ArrowUpToLine } from "lucide-react";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const location = useLocation();

  // Scroll automático al inicio en cada navegación
  useEffect(() => {
    smoothScrollTo(0, { duration: 400 });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    smoothScrollTo(0, { duration: 1100 });
  };

  return (
    <>
      {showTopBtn && (
        <Button
          onClick={goToTop}
          className="fixed bottom-4 right-4 opacity-90 shadow-md"
          size="icon"
        >
          <ArrowUpToLine className="h-4 w-4" />
        </Button>
      )}
    </>
  );
};
