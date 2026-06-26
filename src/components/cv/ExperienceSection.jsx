import SectionTitle from './SectionTitle';
export default function ExperienceSection() {
  return (
    <section className="mb-9">
      <SectionTitle icon="fas fa-code-branch">Doświadczenie</SectionTitle>

      <ElementDoswiadczenia
        tytul="Computernet"
        okres="Luty 2026 – obecnie"
        opis="Projektowanie i utrzymanie systemu klasy ERP obsługującego dużą bazę użytkowników."
        dotPosition="top"
      >
        <li>
          Budowa kompletnej architektury systemu w oparciu o{' '}
          <strong className="text-accent-cyan font-medium">MSSQL</strong>, backend i frontend
        </li>

        <li>
          Projektowanie i rozwój modułów automatyzujących obieg dokumentacji
          kadrowo-księgowej
        </li>

        <li>
          Wdrażanie systemów analitycznych wspierających zarządzanie projektami
          szkoleniowymi i procesami operacyjnymi
        </li>
      </ElementDoswiadczenia>

      {/* dev doswiadczenie */}
      <ElementDoswiadczenia
        tytul="Freelance Full Stack JavaScript Developer"
        okres="2022 - obecnie"
        opis="Projektowanie i wdrażanie aplikacji full stack w JavaScript - od frontendu po backend."
        dotPosition="middle"
      >
        <li>
          Tworzenie responsywnych interfejsów i aplikacji SPA w{' '}
          <strong className="text-accent-cyan font-medium">React</strong> i{' '}
          <strong className="text-accent-cyan font-medium">Tailwind CSS</strong>
        </li>
        <li>
          Budowa logiki backendowej w{' '}
          <strong className="text-accent-cyan font-medium">Node.js</strong>,
          projektowanie endpointów API oraz integracja frontend-backend
        </li>
        <li>
          Realizacja pełnego flow aplikacji w jednym ekosystemie JavaScript, z
          naciskiem na spójność i utrzymanie kodu
        </li>
        <li>
          Optymalizacja wydajności, dbanie o jakość kodu i czytelną architekturę
        </li>
        <li>Praca z nowoczesnymi bibliotekami i narzędziami frontendowymi</li>
      </ElementDoswiadczenia>



      {/* 3d doswiadczenie */}
      <ElementDoswiadczenia
        tytul="Freelance 3D Artist"
        okres="2020 - obecnie"
        opis="Tworzenie modeli 3D do gier i wizualizacji z naciskiem na jakość, optymalizację i poprawny pipeline produkcyjny."
        dotPosition="bottom"
      >
        <li>
          Praca głównie w{' '}
          <strong className="text-accent-cyan font-medium">Blenderze</strong> i{' '}
          <strong className="text-accent-cyan font-medium">
            Substance 3D Painter
          </strong>
        </li>
        <li>
          Tworzenie geometrii i assetów{' '}
          <strong className="text-accent-cyan font-medium">game-ready</strong> w{' '}
          <strong className="text-accent-cyan font-medium">Blenderze</strong>
        </li>
        <li>
          Modelowanie zarówno realistycznych, jak i technicznych obiektów 3D
        </li>
        <li>
          Optymalizacja geometrii (topologia, polycount, UV,{' '}
          <strong className="text-accent-cyan font-medium">LOD</strong>) pod gry
          i real-time
        </li>
        <li>
          Tworzenie i bake'owanie tekstur{' '}
          <strong className="text-accent-cyan font-medium">PBR</strong> oraz
          materiałów w{' '}
          <strong className="text-accent-cyan font-medium">
            Substance 3D Painter
          </strong>
        </li>
        <li>Tworzenie wizualizacji wnętrz i prezentacji produktowych</li>
      </ElementDoswiadczenia>
    </section>
  );
}



// timeline
function ElementDoswiadczenia({
  tytul,
  okres,
  opis,
  children,
  dotPosition = "top", // "top" | "middle" | "bottom"
}) {
  const kontenerStyle =
    "relative pl-[30px] mb-10 border-l-2 border-border animate-slide-in-right";

  const dotPositionClass =
    dotPosition === "top"
      ? "top-[5px]"
      : dotPosition === "middle"
        ? "top-1/2 -translate-y-1/2"
        : "bottom-[5px]";

  return (
    <div className={kontenerStyle}>
      {/* kropka na timeline */}
      <div
        className={`absolute -left-[7px] w-3 h-3 bg-bg-card border-2 border-accent-green rounded-full timeline-dot ${dotPositionClass}`}
      ></div>

      <h3 className="text-[17px] m-0 mb-1 text-accent-blue font-semibold">
        {tytul}
      </h3>

      <span className="font-jetbrains text-xs text-accent-orange mb-2.5 inline-block bg-accent-orange/10 px-2.5 py-1 rounded-md">
        {okres}
      </span>

      <p className="mt-0 text-text-secondary">{opis}</p>
      <ul className="pl-5 mt-4 mb-0">{children}</ul>
    </div>
  );
}
