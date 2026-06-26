import SectionTitle from './SectionTitle';

export default function EducationSection() {
  const kartaStyle =
    'bg-bg-secondary border border-border rounded-xl p-5 mb-4 transition-all duration-300 hover:border-accent-purple hover:translate-x-1 animate-slide-in-left';

  return (
    <section className="mb-9">
      <SectionTitle icon="fas fa-graduation-cap">Edukacja</SectionTitle>
      <div className={kartaStyle}>
        <h3 className="text-[17px] m-0 mb-1 text-text-primary font-semibold">
          Technikum Informatyczne
        </h3>
        <span className="font-jetbrains text-xs text-accent-orange mb-2.5 inline-block bg-accent-orange/10 px-2.5 py-1 rounded-md">
          2022 - obecnie
        </span>
        <p className="mt-0 text-text-secondary mb-0">ZSB Żary</p>
      </div>
    </section>
  );
}
