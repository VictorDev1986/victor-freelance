export const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradiente verde principal */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/5 via-transparent to-emerald-600/10"></div>
      
      {/* Orbes animados de fondo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-green-600/12 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-40 right-1/3 w-80 h-80 bg-emerald-500/6 rounded-full blur-3xl animate-pulse delay-3000"></div>
      
      {/* Patrón de grid sutil */}
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 opacity-30"></div>
    </div>
  );
};