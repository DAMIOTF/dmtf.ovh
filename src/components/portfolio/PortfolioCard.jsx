export default function PortfolioCard({
  title,
  description,
  image,
  images = [],
  tags = [],
  layout,
  large = false,
  square = false,
}) {
  const cardLayout = layout || (large ? 'large' : square ? 'square' : 'wide');

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  };

  const renderSingleImage = (src, alt) => (
    <>
      <img
        src={src}
        alt={alt}
        onError={handleImageError}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-accent-blue/20 via-accent-purple/20 to-accent-cyan/20">
        <i className="fas fa-image text-4xl text-text-secondary/50"></i>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-60" />
      <div className="absolute inset-0 bg-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </>
  );

  return (
    <div className="group relative bg-bg-secondary border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-accent-cyan/50 hover:shadow-lg hover:shadow-accent-cyan/10 hover:-translate-y-2">

      {cardLayout === 'large' && images.length > 0 ? (

        <div className="grid grid-cols-2 gap-1.5 p-2 pb-0 aspect-[16/9]">

          <div className="relative row-span-2 overflow-hidden bg-bg-dark rounded-md">
            {renderSingleImage(images[0], `${title} - 1`)}
          </div>

          {images.slice(1, 3).map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden bg-bg-dark rounded-md"
            >
              {renderSingleImage(img, `${title} - ${idx + 2}`)}
            </div>
          ))}
        </div>
      ) : (

        <div
          className={`relative overflow-hidden bg-bg-dark ${
            cardLayout === 'square' || cardLayout === 'featured'
              ? 'aspect-square'
              : 'aspect-video'
          }`}
        >
          {renderSingleImage(image, title)}
        </div>
      )}


      <div className="p-5">
        <h3 className="font-jetbrains text-base font-semibold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {description}
        </p>


        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2.5 py-1 bg-bg-card border border-border rounded-md text-accent-cyan/80 font-jetbrains transition-colors duration-300 hover:border-accent-cyan/50 hover:text-accent-cyan"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>


      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
