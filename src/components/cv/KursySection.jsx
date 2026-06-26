import SectionTitle from './SectionTitle';

const kursy = [
    {
        tytul: 'Complete Web & Mobile Designer: UI/UX, Figma, +more',
        opis:
            'Comprehensive UI/UX and Figma course covering responsive design, prototyping and design systems.',
    },
    {
        tytul: 'AI Engineer Agentic Track: The Complete Agent & MCP Course',
        opis:
            'Agentic AI workflows, multi-component projects and practical MCP strategies.',
    },
    {
        tytul: 'Blender - Advanced Interior Visualization Training',
        opis:
            'Advanced rendering, lighting and material workflows for interior scenes in Blender.',
    },
];

export default function KursySection() {
    return (
        <section className="mb-8">
            <SectionTitle icon="fas fa-graduation-cap">Kursy</SectionTitle>

            <div className="space-y-3">
                {kursy.map((kurs, i) => (
                    <div
                        key={i}
                        className="
              group relative overflow-hidden
              bg-bg-secondary border border-border
              rounded-lg p-4
              transition-all duration-200
              hover:border-accent-purple/60
              hover:bg-bg-secondary/80
            "
                    >
                        <div className="absolute left-0 top-0 h-full w-[2px] bg-accent-purple/40 group-hover:bg-accent-purple/70 transition" />

                        <h3 className="text-base font-medium text-foreground">
                            {kurs.tytul}
                        </h3>

                        <p className="text-xs text-muted mt-1 leading-snug">
                            {kurs.opis}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}