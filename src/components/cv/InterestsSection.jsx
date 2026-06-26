import SectionTitle from './SectionTitle';

// zainteresowania


const listaZainteresowan = [
  {
    ikona: 'fas fa-shield-alt',
    nazwa: 'Cyberbezpieczeństwo',
    kolor: 'text-accent-green',
  },
  {
    ikona: 'fab fa-linux',
    nazwa: 'Linux & Open Source',
    kolor: 'text-accent-orange',
  },
  {
    ikona: 'fas fa-microchip',
    nazwa: 'Elektronika & Hardware',
    kolor: 'text-accent-purple',
  },
  {
    ikona: 'fas fa-print',
    nazwa: 'Druk 3D & Prototypy',
    kolor: 'text-accent-cyan',
  },
  {
    ikona: 'fas fa-code',
    nazwa: 'Programowanie',
    kolor: 'text-accent-blue',
  },
  {
    ikona: 'fas fa-database',
    nazwa: 'Analiza Big Data',
    kolor: 'text-accent-yellow',
  },
  {
    ikona: 'fas fa-robot',
    nazwa: 'Sztuczna Inteligencja',
    kolor: 'text-accent-pink',
  },
  {
    ikona: 'fas fa-network-wired',
    nazwa: 'Sieci & DevOps',
    kolor: 'text-accent-green',
  },
];

// grid 2 kol
export default function InterestsSection() {
  // styl solo karta
  const kartaStyle =
    'interest-card bg-bg-secondary border border-border rounded-xl p-5 text-center transition-all duration-300 hover:border-accent-cyan hover:-translate-y-1 flex flex-col items-center justify-center min-h-[100px] animate-slide-in-up';

  return (
    <section className="mb-9">
      <SectionTitle icon="fas fa-rocket">Zainteresowania</SectionTitle>
      <div className="grid grid-cols-2 gap-[15px] max-md:grid-cols-1">
        {listaZainteresowan.map((item, idx) => (
          <div key={idx} className={kartaStyle} style={{ animationDelay: `${idx * 0.1}s` }}>
            <i className={`${item.ikona} text-[28px] mb-3 ${item.kolor} animate-float`} style={{ animationDelay: `${idx * 0.15}s` }}></i>
            <span className="text-[13px] text-text-secondary">
              {item.nazwa}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
