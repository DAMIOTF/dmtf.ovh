import SectionTitle from './SectionTitle';

export default function AboutSection() {
  const kartaStyle = 'bg-bg-secondary border border-border rounded-xl p-6 animate-slide-in-up';

  return (
    <section className="mb-9">
      <SectionTitle icon="fas fa-user-astronaut">O mnie</SectionTitle>
      <div className={kartaStyle}>
        <p className="mt-0 text-text-secondary">
          Projektuję interfejsy <strong className="text-accent-cyan font-medium">UI/UX</strong>,
          które mają własny charakter, rytm i spójną estetykę. Skupiam się nie
          tylko na wyglądzie, ale również na doświadczeniu użytkownika, łącząc
          kreatywność z praktycznym podejściem do projektowania.
        </p>

        <p className="text-text-secondary">
          Tworzę aplikacje <strong className="text-accent-cyan font-medium">full-stack </strong>
          oraz systemy <strong className="text-accent-cyan font-medium">AI</strong>,
          prowadząc projekty od pomysłu i architektury, aż po gotowy, działający
          produkt. Stawiam na czytelny kod, wydajność i rozwiązania, które realnie
          usprawniają pracę oraz porządkują procesy.
        </p>

        <p className="mb-0 text-text-secondary">
          Zajmuję się również grafiką <strong className="text-accent-cyan font-medium">3D</strong>,
          koncentrując się na detalu, świetle i spójności wizualnej. Tworzę modele,
          wizualizacje oraz assety przeznaczone zarówno do zastosowań technicznych,
          jak i projektów czasu rzeczywistego.
        </p>
      </div>
    </section>
  );
}
