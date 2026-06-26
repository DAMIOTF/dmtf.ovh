// pasek linuxowy 
export default function PortfolioWindowBar() {
  const czerwony = '#ff5f57';
  const zolty = '#febc2e';
  const zielony = '#28c840';

  return (
    <div className="bg-bg-secondary px-5 py-3 flex items-center gap-2 border-b border-border">
      <div
        className="w-3 h-3 rounded-full"
        style={{ background: czerwony }}
      ></div>
      <div className="w-3 h-3 rounded-full" style={{ background: zolty }}></div>
      <div
        className="w-3 h-3 rounded-full"
        style={{ background: zielony }}
      ></div>
      <span className="ml-4 font-jetbrains text-[13px] text-text-secondary">
        Damian@Marciniak ~ /portfolio
      </span>
    </div>
  );
}
