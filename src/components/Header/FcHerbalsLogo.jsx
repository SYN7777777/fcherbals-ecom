export function FcHerbalsLogo({ className = "", onClick, style = {} }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        
        .fc-gradient {
          background: linear-gradient(135deg, #10b981, #059669);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .herbals-gradient {
          background: linear-gradient(135deg, #374151, #1f2937);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .logo-hover:hover {
          transform: scale(1.05);
        }
      `}</style>
      
      <div
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        onClick={onClick}
        onKeyPress={e => { if (onClick && (e.key === "Enter" || e.key === " ")) onClick(); }}
        className={`
          logo-hover
          flex items-center gap-1.5 sm:gap-2
          select-none cursor-${onClick ? "pointer" : "default"}
          transition-transform duration-200 ease-out
          ${className}
        `}
        style={{ userSelect: "none", ...style }}
        aria-label="FC Herbals Logo"
      >
        {/* FC Text */}
        <span
          className="fc-gradient text-xl sm:text-2xl md:text-3xl font-bold"
          style={{ 
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "-0.01em"
          }}
        >
          FC
        </span>
        
        {/* Separator Dot */}
        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-500 rounded-full"></div>
        
        {/* Herbals Text */}
        <span
          className="herbals-gradient text-sm sm:text-lg md:text-xl font-medium"
          style={{ 
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.02em"
          }}
        >
          Herbals
        </span>
      </div>
    </>
  );
}