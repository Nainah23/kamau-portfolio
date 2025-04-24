import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { DevCardSection } from './components/sections/DevCardSection';
import { ContactSection } from './components/sections/ContactSection';
import { CustomCursor } from './components/shared/CustomCursor';

function App() {
  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <DevCardSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;