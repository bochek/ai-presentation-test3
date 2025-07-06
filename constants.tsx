
import React from 'react';
import Slide, { SlideTitle, SlideSubtitle } from './components/Slide';
import SimpleBarChart from './components/Chart';
import {
  AutomationIcon,
  ContentCreationIcon,
  CustomerSupportIcon,
  DataAnalysisIcon,
  BriefcaseIcon,
  TargetIcon,
  UsersIcon,
  ZapIcon
} from './components/icons/IconComponents';
import { useTranslations } from './contexts/LanguageContext';
import { Founder } from './types';

const ICONS: { [key: string]: React.ComponentType<{ className?: string }> } = {
    CustomerSupportIcon,
    DataAnalysisIcon,
    ContentCreationIcon,
    AutomationIcon,
    TargetIcon,
    BriefcaseIcon,
    ZapIcon,
    UsersIcon,
};

const TitleSlide = () => {
    const t = useTranslations();
    return (
        <Slide>
            <div className="border-2 border-brand-secondary rounded-full p-4 mb-6 animate-fade-in bg-brand-secondary/10">
                <ZapIcon className="w-16 h-16 text-brand-secondary" />
            </div>
            <SlideTitle>{t.titleSlide.title}</SlideTitle>
            <SlideSubtitle>{t.titleSlide.subtitle}</SlideSubtitle>
            <button className="mt-8 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                {t.titleSlide.button}
            </button>
        </Slide>
    );
};

const ProblemSlide = () => {
    const t = useTranslations();
    return (
        <Slide>
            <SlideTitle>{t.problemSlide.title}</SlideTitle>
            <SlideSubtitle>{t.problemSlide.subtitle}</SlideSubtitle>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl text-left">
                {t.problemSlide.problems.map((problem, index) => (
                    <div key={index} className="bg-card-bg p-6 rounded-lg border border-white/10 animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                        <h3 className="font-bold text-lg text-light-text">{problem.title}</h3>
                        <p className="text-medium-text mt-2">{problem.text}</p>
                    </div>
                ))}
            </div>
        </Slide>
    );
};

const FeaturesSlide = () => {
    const t = useTranslations();
    return (
        <Slide>
            <SlideTitle>{t.features.title}</SlideTitle>
            <SlideSubtitle>{t.features.subtitle}</SlideSubtitle>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                {t.features.items.map((feature, index) => {
                    const Icon = ICONS[feature.key];
                    return (
                        <div key={feature.title} className="bg-card-bg p-6 rounded-lg border border-white/10 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                            <div className="bg-brand-primary/10 p-3 rounded-full mb-4">
                                <Icon className="w-8 h-8 text-brand-secondary" />
                            </div>
                            <h3 className="font-bold text-lg text-light-text">{feature.title}</h3>
                            <p className="text-medium-text mt-2 text-sm">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </Slide>
    );
};

const DataSlide = () => {
    const t = useTranslations();
    return (
        <Slide>
            <SlideTitle>{t.dataSlide.title}</SlideTitle>
            <SlideSubtitle>{t.dataSlide.subtitle}</SlideSubtitle>
            <div className="mt-8 w-full max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <SimpleBarChart />
            </div>
        </Slide>
    );
};

const BenefitsSlide = () => {
    const t = useTranslations();
    return (
        <Slide>
            <SlideTitle>{t.benefitsSlide.title}</SlideTitle>
            <SlideSubtitle>{t.benefitsSlide.subtitle}</SlideSubtitle>
            <div className="mt-12 w-full max-w-4xl grid md:grid-cols-2 gap-8 text-left">
                {t.benefitsSlide.items.map((benefit, index) => {
                    const Icon = ICONS[benefit.key];
                    return (
                        <div key={benefit.title} className="flex items-start gap-4 p-4 animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                            <div className="bg-brand-primary/10 p-3 rounded-full"><Icon className="w-6 h-6 text-brand-secondary" /></div>
                            <div>
                                <h3 className="text-xl font-bold text-light-text">{benefit.title}</h3>
                                <p className="text-medium-text mt-1">{benefit.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Slide>
    );
};

const UseCasesSlide = () => {
    const t = useTranslations();
    return (
        <Slide>
            <SlideTitle>{t.useCasesSlide.title}</SlideTitle>
            <SlideSubtitle>{t.useCasesSlide.subtitle}</SlideSubtitle>
            <div className="mt-12 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.useCasesSlide.items.map((uc, index) => {
                    const Icon = ICONS[uc.key];
                    return (
                        <div key={uc.title} className="bg-card-bg rounded-lg p-6 border border-white/10 animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                            <div className="flex items-center gap-3">
                                <Icon className="w-7 h-7 text-brand-primary" />
                                <h3 className="text-lg font-bold text-light-text">{uc.title}</h3>
                            </div>
                            <p className="mt-3 text-medium-text">{uc.description}</p>
                        </div>
                    );
                })}
            </div>
        </Slide>
    );
};

const FounderCard: React.FC<{ founder: Founder; delay: string }> = ({ founder, delay }) => (
    <div className="bg-card-bg p-6 rounded-lg border border-white/10 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: delay }}>
        <img src={founder.imageUrl} alt={founder.name} className="w-32 h-32 rounded-full mb-4 border-4 border-brand-secondary" />
        <h3 className="text-xl font-bold text-light-text">{founder.name}</h3>
        <p className="text-brand-secondary font-medium">{founder.title}</p>
    </div>
);


const FoundersSlide = () => {
    const t = useTranslations();
    return (
        <Slide>
            <SlideTitle>{t.foundersSlide.title}</SlideTitle>
            <SlideSubtitle>{t.foundersSlide.subtitle}</SlideSubtitle>
            <div className="mt-12 w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8">
                <FounderCard founder={t.foundersSlide.founders[0]} delay="0.6s" />
                <FounderCard founder={t.foundersSlide.founders[1]} delay="0.8s" />
            </div>
        </Slide>
    );
};

const IntegrationSlide = () => {
    const t = useTranslations();
    return (
        <Slide>
            <SlideTitle>{t.integrationSlide.title}</SlideTitle>
            <SlideSubtitle>{t.integrationSlide.subtitle}</SlideSubtitle>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <img src="https://picsum.photos/seed/slack/120/50?grayscale" alt="Slack Logo" className="h-10 md:h-12 opacity-60 hover:opacity-100 transition-opacity" />
                <img src="https://picsum.photos/seed/gsuite/150/50?grayscale" alt="Google Workspace Logo" className="h-10 md:h-12 opacity-60 hover:opacity-100 transition-opacity" />
                <img src="https://picsum.photos/seed/salesforce/140/60?grayscale" alt="Salesforce Logo" className="h-12 md:h-14 opacity-60 hover:opacity-100 transition-opacity" />
                <img src="https://picsum.photos/seed/jira/120/50?grayscale" alt="Jira Logo" className="h-10 md:h-12 opacity-60 hover:opacity-100 transition-opacity" />
                <img src="https://picsum.photos/seed/hubspot/130/50?grayscale" alt="Hubspot Logo" className="h-10 md:h-12 opacity-60 hover:opacity-100 transition-opacity" />
            </div>
        </Slide>
    );
};

const TestimonialSlide = () => {
    const t = useTranslations();
    return (
        <Slide>
            <img src="https://picsum.photos/id/237/100/100" className="w-24 h-24 rounded-full border-4 border-brand-secondary mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }} alt="CEO portrait" />
            <blockquote className="max-w-3xl text-xl md:text-2xl italic text-light-text leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                “{t.testimonialSlide.quote}”
            </blockquote>
            <p className="mt-6 font-bold text-lg text-brand-secondary animate-fade-in-up" style={{ animationDelay: '0.6s' }}>- {t.testimonialSlide.author}</p>
            <p className="text-medium-text animate-fade-in-up" style={{ animationDelay: '0.7s' }}>{t.testimonialSlide.company}</p>
        </Slide>
    );
};

const CtaSlide = () => {
    const t = useTranslations();
    return (
        <Slide>
            <SlideTitle>{t.ctaSlide.title}</SlideTitle>
            <SlideSubtitle>{t.ctaSlide.subtitle}</SlideSubtitle>
            <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <button className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-4 px-10 text-lg rounded-full transition-transform transform hover:scale-105">
                    {t.ctaSlide.button}
                </button>
            </div>
            <p className="mt-6 text-medium-text animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                {t.ctaSlide.contact} <a href={`mailto:${t.ctaSlide.contactLink}`} className="text-brand-secondary hover:underline">{t.ctaSlide.contactLink}</a>
            </p>
        </Slide>
    );
};


export const SLIDES: React.ComponentType[] = [
  TitleSlide,
  ProblemSlide,
  FeaturesSlide,
  DataSlide,
  BenefitsSlide,
  UseCasesSlide,
  FoundersSlide,
  IntegrationSlide,
  TestimonialSlide,
  CtaSlide,
];
