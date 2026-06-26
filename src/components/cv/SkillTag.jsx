
const kolorWariantu = {
  react: 'border-l-[3px] border-l-[#8EE3F5]',      // pastelowy błękit
  js: 'border-l-[3px] border-l-[#F7E58D]',         // pastelowy żółty
  node: 'border-l-[3px] border-l-[#A8D5A2]',       // pastelowa zieleń
  css: 'border-l-[3px] border-l-[#9BB8F0]',        // pastelowy niebieski
  db: 'border-l-[3px] border-l-[#A8C4E6]',         // pastelowy stalowy niebieski
  tool: 'border-l-[3px] border-l-[#FFB37A]',       // pastelowy pomarańcz
  design: 'border-l-[3px] border-l-[#F5A8C9]',     // pastelowy róż
  soft: 'border-l-[3px] border-l-[#C8B5E8]',       // pastelowy fiolet
  webdesign: 'border-l-[3px] border-l-[#F7D97A]',  // pastelowe złoto
};

export default function SkillTag({ children, variant = 'tool' }) {
  const bazaStyle =
    'skill-tag font-jetbrains bg-bg-secondary text-text-primary px-3.5 py-2 rounded-lg text-xs font-medium border border-border transition-all duration-300 cursor-default relative overflow-hidden hover:border-accent-blue hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(37,99,235,0.2)]';
  const kolorKrawedzi = kolorWariantu[variant] || '';

  return <span className={`${bazaStyle} ${kolorKrawedzi}`}>{children}</span>;
}
