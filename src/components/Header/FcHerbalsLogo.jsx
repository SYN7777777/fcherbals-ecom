
export function FcHerbalsLogo({ className = "", onClick, style = {} }) {
  return (
    // If you want this to act as a button or link, enable tabIndex and onClick
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyPress={e => { if (onClick && (e.key === "Enter" || e.key === " ")) onClick(); }}
      className={`
        flex items-center gap-2 
        text-xl sm:text-4xl md:text-5xl 
        font-extrabold font-sans tracking-widest 
        select-none cursor-${onClick ? "pointer" : "default"} 
        ${className}
      `}
      style={{ userSelect: "none", letterSpacing: "0.2em", ...style }}
      aria-label="Fc Herbals Logo"
    >
      <span
        className="text-amber-600 drop-shadow-md select-none"
        style={{ fontFamily: "Georgia, serif", fontWeight: 900 }}
      >
        FC
      </span>
    
    </div>
  );
}
