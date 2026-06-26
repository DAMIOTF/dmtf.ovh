import WindowBar from '../components/cv/WindowBar';
import Header from '../components/cv/Header';
import SkillsSection from '../components/cv/SkillsSection';
import EducationSection from '../components/cv/EducationSection';
import LanguagesSection from '../components/cv/LanguagesSection';
import AboutSection from '../components/cv/AboutSection';
import ExperienceSection from '../components/cv/ExperienceSection';
import InterestsSection from '../components/cv/InterestsSection';
import Footer from '../components/cv/Footer';
import PortfolioSection from '../components/portfolio/PortfolioSection';
import PortfolioWindowBar from '../components/portfolio/PortfolioWindowBar';
import KursySection from '../components/cv/KursySection';

export default function CVPage() {
  const kontenerStyle =
    'max-w-[1150px] mx-auto bg-bg-card border border-border rounded-2xl overflow-hidden relative z-10 container-shadow animate-slide-in-up';

  return (
    <>
      {/* CV */}
      <div className={`${kontenerStyle} mt-10`}>
        <WindowBar />
        <Header />

        <div className="flex p-[50px] gap-[50px] max-md:flex-col max-md:p-[30px]">
          <div className="flex-1 max-w-[340px] max-md:max-w-full">
            <SkillsSection />
            <EducationSection />
            <KursySection />
            <LanguagesSection />
          </div>

          <div className="flex-[2]">
            <AboutSection />
            <ExperienceSection />
            <InterestsSection />
          </div>
        </div>

        <Footer />
      </div>

      {/* Portfolio
      <div className={`${kontenerStyle} mt-10 mb-10`}>
        <PortfolioWindowBar />
        <PortfolioSection />
      </div>*/}
      <div className="mb-20"></div>
    </>
    
  );
}
