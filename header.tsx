export function Header() {
  return (
    <header className="w-full py-12 px-4">
      <div className="container max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Main Logo */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src="/assets/generated/placeholder-logo-transparent.dim_200x200.png"
            alt="Main Logo"
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* Secondary Logo */}
        <div className="relative group">
          <div className="absolute -inset-3 bg-gradient-to-r from-accent/15 via-primary/15 to-accent/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src="/assets/generated/secondary-logo-transparent.dim_150x150.png"
            alt="Secondary Logo"
            className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </header>
  );
}
