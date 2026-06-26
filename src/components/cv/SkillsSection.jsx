import SectionTitle from './SectionTitle';
import SkillTag from './SkillTag';

// umiejetnosci
export default function SkillsSection() {
  const tagyKontener = 'flex flex-wrap gap-2.5 mb-7';

  return (
    <>
      {/* tech stack */}
      <section className="mb-9">
        <SectionTitle icon="fas fa-terminal">Tech Stack</SectionTitle>
        <div className={tagyKontener}>
          <SkillTag variant="react">React.js</SkillTag>
          <SkillTag variant="css">Tailwind CSS</SkillTag>
          <SkillTag variant="js">JavaScript (ES6+)</SkillTag>
          <SkillTag variant="js">TypeScript</SkillTag> 

          <SkillTag variant="node">Node.js</SkillTag>
          <SkillTag variant="node">Express.js</SkillTag>
          <SkillTag variant="db">PostgreSQL</SkillTag>
          <SkillTag variant="db">SQL</SkillTag>
          <SkillTag variant="db">Microsoft SQL Server</SkillTag>

          <SkillTag variant="tool">Git</SkillTag>
          <SkillTag variant="tool">GitHub</SkillTag>

          <SkillTag variant="tool">Linux</SkillTag>
          <SkillTag variant="tool">Web Security</SkillTag>
        </div>
      </section>

      {/* 3d design */}
      <section className="mb-9">
        <SectionTitle icon="fas fa-cube">3D Design</SectionTitle>
        <div className={tagyKontener}>
          <SkillTag variant="design">Blender</SkillTag>
          <SkillTag variant="design">Adobe Substance 3D Painter</SkillTag>
          <SkillTag variant="design">Autodesk Fusion 360</SkillTag>
          <SkillTag variant="design">Cinema 4D</SkillTag>
          <SkillTag variant="design">Adobe Photoshop</SkillTag>
          <SkillTag variant="design">Druk 3D (FDM)</SkillTag>
          <SkillTag variant="design">Autodesk Motion Builder</SkillTag>
          <SkillTag variant="design">Autodesk Maya</SkillTag>
        </div>
      </section>

      {/* web design */}
      <section className="mb-9">
        <SectionTitle icon="fas fa-pen-to-square">Web Design</SectionTitle>
        <div className={tagyKontener}>
          <SkillTag variant="webdesign">Figma</SkillTag>
          <SkillTag variant="webdesign">UI Design</SkillTag>
          <SkillTag variant="webdesign">Wireframing</SkillTag>
          <SkillTag variant="webdesign">Prototyping</SkillTag>
          <SkillTag variant="webdesign">Responsive Design</SkillTag>
          <SkillTag variant="webdesign">Design Systems</SkillTag>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="mb-9">
        <SectionTitle icon="fas fa-brain">Core Strengths</SectionTitle>
        <div className={tagyKontener}>
          <SkillTag variant="soft">Problem Solving</SkillTag>
          <SkillTag variant="soft">Analytical Thinking</SkillTag>
          <SkillTag variant="soft">Fast Learning</SkillTag>
          <SkillTag variant="soft">Debugging</SkillTag>
          <SkillTag variant="soft">Clean Code</SkillTag>
          <SkillTag variant="soft">System Design</SkillTag>
        </div>
      </section>
    </>
  );
}
