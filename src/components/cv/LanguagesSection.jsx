import SectionTitle from './SectionTitle';

// jezyki
export default function LanguagesSection() {
  return (
    <section className="mb-9 animate-slide-in-left">
      <SectionTitle icon="fas fa-language">Języki</SectionTitle>

      {/* polski */}
      <div className="mb-4">
        <div className="flex justify-between mb-2 text-sm">
          <span className="text-text-primary font-medium">Polski</span>
          <span className="text-accent-cyan font-jetbrains text-xs">
            Native
          </span>
        </div>
        <div className="h-1.5 bg-bg-secondary rounded-[10px] overflow-hidden">
          <div className="h-full rounded-[10px] lang-fill-native transition-[width] duration-1000"></div>
        </div>
      </div>

      {/* angielski */}
      <div className="mb-4">
        <div className="flex justify-between mb-2 text-sm">
          <span className="text-text-primary font-medium">Angielski</span>
          <span className="text-accent-cyan font-jetbrains text-xs">B2</span>
        </div>
        <div className="h-1.5 bg-bg-secondary rounded-[10px] overflow-hidden">
          <div className="h-full rounded-[10px] lang-fill-b2 transition-[width] duration-1000"></div>
        </div>
      </div>
    </section>
  );
}
