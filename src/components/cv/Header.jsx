export default function Header() {
  // te kolka w tle
  const gradientPrawy = {
    top: '-50%',
    right: '-20%',
    width: '600px',
    height: '600px',
    background:
      'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)',
  };

  const gradientLewy = {
    bottom: '-30%',
    left: '-10%',
    width: '400px',
    height: '400px',
    background:
      'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
  };

  return (
    <header className="header-gradient px-[50px] py-[60px] relative overflow-hidden">
      {/* gradienty */}
      <div className="absolute pointer-events-none" style={gradientPrawy} />
      <div className="absolute pointer-events-none" style={gradientLewy} />

      <div className="relative z-10 flex justify-center text-center">
        <div className="w-full max-w-[900px]">
 
          <div className="flex items-center justify-center gap-4 mb-2 max-md:flex-col animate-slide-in-down">
            <h1 className="font-jetbrains text-[42px] font-bold m-0 name-gradient max-md:text-[32px]">
              Damian Marciniak
            </h1>
            <span className="inline-flex items-center gap-1.5 bg-accent-green/15 border border-accent-green px-3 py-1.5 rounded-[20px] text-xs text-accent-green font-medium animate-bounce-soft">
              <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse-custom"></span>
              Dostępny
            </span>
          </div>

          <div className="font-jetbrains text-lg text-accent-purple font-normal mb-6 text-center animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-accent-green">&gt; </span>
            Full Stack JavaScript Developer, 3D Artist
          </div>

          <div className="flex gap-5 flex-wrap text-sm justify-center animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <ElementKontaktowy
              href="mailto:kontakt@dmtf.ovh"
              ikona="fas fa-envelope"
            >
              kontakt@dmtf.ovh
            </ElementKontaktowy>
            <ElementKontaktowy
              href="https://dmtf.ovh"
              ikona="fas fa-globe"
              zewnetrzny
            >
              dmtf.ovh
            </ElementKontaktowy>
            <ElementKontaktowy href="#" ikona="fas fa-map-marker-alt">
              Żary, PL
            </ElementKontaktowy>
            <ElementKontaktowy href="https://github.com/DAMIOTF" ikona="fa-brands fa-github"> 
              Github
            </ElementKontaktowy>
          </div>
        </div>
      </div>
    </header>
  );
}

function ElementKontaktowy({ href, ikona, children, zewnetrzny }) {
  const targetAttr = zewnetrzny ? '_blank' : undefined;
  const relAttr = zewnetrzny ? 'noopener noreferrer' : undefined;

  return (
    <a
      href={href}
      target={targetAttr}
      rel={relAttr}
      className="text-text-secondary no-underline flex items-center gap-2 px-4 py-2.5 bg-bg-secondary border border-border rounded-[10px] transition-all duration-300 font-jetbrains text-[13px] hover:bg-bg-card hover:border-accent-blue hover:text-accent-blue contact-item"
    >
      <i className={`${ikona} text-accent-blue`}></i>
      {children}
    </a>
  );
}
