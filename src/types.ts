
import type React from 'react';

export type Language = 'eng' | 'rus' | 'thai';

export interface Feature {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

export interface Founder {
    name: string;
    title: string;
    imageUrl: string;
}

export interface TranslationContent {
    header: {
        title: string;
        slide: string;
        of: string;
    };
    titleSlide: {
        title: string;
        subtitle: string;
        button: string;
    };
    problemSlide: {
        title: string;
        subtitle: string;
        problems: { title: string; text: string }[];
    };
    features: {
        title: string;
        subtitle: string;
        items: { key: string; title: string; description: string; }[]
    };
    dataSlide: {
        title: string;
        subtitle: string;
        chartData: { name: string; timeSpent: number; aiAssisted: number; }[];
        legend: { timeSpent: string; aiAssisted: string; };
    };
    benefitsSlide: {
        title: string;
        subtitle: string;
        items: { key: string; title: string; description: string; }[]
    };
    useCasesSlide: {
        title: string;
        subtitle: string;
        items: { key: string; title: string; description: string; }[]
    };
    foundersSlide: {
        title: string;
        subtitle: string;
        founders: Founder[];
    };
    integrationSlide: {
        title: string;
        subtitle: string;
    };
    testimonialSlide: {
        quote: string;
        author: string;
        company: string;
    };
    ctaSlide: {
        title: string;
        subtitle: string;
        button: string;
        contact: string;
        contactLink: string;
    };
}

export type Translations = Record<Language, TranslationContent>;