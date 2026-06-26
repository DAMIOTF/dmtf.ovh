import SectionTitle from '../cv/SectionTitle';
import PortfolioCard from './PortfolioCard';

const design3DProjects = [
  {
    title: 'xxxx',
    description:
      'xxxx',
    images: [
      '',
    ],
    tags: [
      'xxx',
    ],
    layout: 'large',
  },
];

const layoutCycle = ['large', 'square', 'wide', 'square', 'wide'];

const getLayoutType = (project) => {
  if (project.layout) return project.layout;
  if (project.large) return 'large';
  if (project.square) return 'square';
  return 'wide';
};

const arrangeProjectsForVariety = (projects) => {
  const buckets = {
    large: [],
    square: [],
    wide: [],
  };

  projects.forEach((project) => {
    const layout = getLayoutType(project);
    buckets[layout].push(project);
  });

  const ordered = [];
  let pointer = 0;

  const hasItems = () =>
    buckets.large.length > 0 ||
    buckets.square.length > 0 ||
    buckets.wide.length > 0;

  const nextAvailableType = (preferredType, lastType) => {
    if (buckets[preferredType].length > 0 && preferredType !== lastType) {
      return preferredType;
    }

    const fallback = Object.entries(buckets)
      .filter(([, items]) => items.length > 0)
      .sort((a, b) => b[1].length - a[1].length)
      .map(([type]) => type)
      .find((type) => type !== lastType);

    if (fallback) return fallback;

    return Object.keys(buckets).find((type) => buckets[type].length > 0);
  };

  while (hasItems()) {
    const preferredType = layoutCycle[pointer % layoutCycle.length];
    const lastType =
      ordered.length > 0 ? getLayoutType(ordered[ordered.length - 1]) : null;
    const chosenType = nextAvailableType(preferredType, lastType);

    if (!chosenType) break;

    ordered.push(buckets[chosenType].shift());
    pointer += 1;
  }

  return ordered;
};

const getTileClassName = (layout) => {
  if (layout === 'large') return 'md:col-span-2 xl:col-span-4';
  return 'md:col-span-1 xl:col-span-2';
};

export default function PortfolioSection() {
  const orderedProjects = arrangeProjectsForVariety(design3DProjects);

  return (
    <div className="px-[50px] py-[50px] max-md:px-[30px] max-md:py-[30px]">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-accent-green font-bold font-jetbrains text-xl">
            &lt;
          </span>
          <i className="fas fa-folder-open text-accent-cyan text-xl"></i>
          <h2 className="font-jetbrains text-2xl font-bold text-text-primary tracking-wide uppercase">
            Portfolio
          </h2>
          <span className="text-accent-green font-bold font-jetbrains text-xl">
            /&gt;
          </span>
        </div>
        <p className="text-text-secondary max-w-xl mx-auto">
          Wybrane projekty 3D tworzone w Blenderze i Substance 3D Painter
        </p>
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent mx-auto mt-4" />
      </div>

      <section>
        <SectionTitle icon="fas fa-cube">3D Design</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6 mt-6">
          {orderedProjects.map((project, index) => {
            const layout = getLayoutType(project);
            const cardLayout = project.cardLayout || layout;

            return (
              <div key={index} className={getTileClassName(layout)}>
                <PortfolioCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  images={project.images}
                  tags={project.tags}
                  layout={cardLayout}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
