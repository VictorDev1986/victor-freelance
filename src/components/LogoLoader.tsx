import React from "react";
import Logo from "@/assets/Logo.png";

export const LogoLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative">
          <img
            src={Logo}
            alt="Cargando"
            className="h-16 w-16 select-none drop-shadow-[0_6px_24px_rgba(59,130,246,0.4)] animate-pulse"
            draggable={false}
          />
          <div className="absolute -inset-3 rounded-full border border-primary/30 animate-[ping_1.5s_ease-in-out_infinite]" />
        </div>
        <p className="text-sm text-muted-foreground tracking-wide">Cargando...</p>
      </div>
    </div>
  );
};

export default LogoLoader;
