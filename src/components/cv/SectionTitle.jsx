export default function SectionTitle({ icon, children }) {
  const naglowekStyle =
    'font-jetbrains text-sm text-text-secondary mt-0 mb-5 flex items-center gap-2.5 uppercase tracking-[2px] font-medium pb-3 border-b border-border animate-slide-in-left';

  return (
    <h2 className={naglowekStyle}>
      <span className="text-accent-green font-bold animate-bounce-soft">//</span>
      <i className={`${icon} text-sm text-accent-cyan`}></i>
      {children}
    </h2>
  );
}
