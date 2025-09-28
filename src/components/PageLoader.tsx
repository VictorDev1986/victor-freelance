import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LogoLoader from "@/components/LogoLoader";

export const PageLoader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simula un pequeño retardo para UX, puedes ajustar el tiempo
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading ? <LogoLoader /> : null;
};

export default PageLoader;
