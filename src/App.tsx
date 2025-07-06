import React, { useState, useCallback, useEffect } from 'react';
import { SLIDES } from './constants';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { useLanguage, useTranslations } from './contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const languages = ['eng', 'rus', 'thai'] as const;

    return (
        <div className="flex items-center gap-2 bg-card-bg p-1 rounded-full border border-white/10">
            {languages.map((lang) => (
                <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors ${
                        language === lang ? 'bg-brand-secondary text-white' : 'text-medium-text hover:text-light-text'
                    }`}
                >
                    {lang.toUpperCase()}
                </button>
            ))}
        </div>
    );
};

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations();

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNextSlide();
      } else if (event.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNextSlide, goToPrevSlide]);

  return (
    <main className="bg-dark-bg text-light-text font-sans w-full h-screen overflow-hidden relative flex flex-col">
      <header className="absolute top-0 left-0 w-full p-6 z-20 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Zap className="text-brand-secondary" size={28} />
          <h1 className="text-xl font-heading font-bold text-light-text">{t.header.title}</h1>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <div className="text-medium-text font-medium">
            {t.header.slide} {currentSlide + 1} {t.header.of} {SLIDES.length}
          </div>
        </div>
      </header>

      <div className="flex-grow w-full h-full relative">
        {SLIDES.map((SlideComponent, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="w-full h-full flex items-center justify-center p-8 lg:p-16">
               <SlideComponent />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      <footer className="absolute bottom-0 left-0 w-full p-6 z-20 flex justify-center items-center">
        <div className="flex items-center gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-brand-secondary scale-125' : 'bg-medium-text/50 hover:bg-medium-text'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </footer>
    </main>
  );
};

export default App;
