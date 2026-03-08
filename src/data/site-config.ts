import avatar from '../assets/images/avatar.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://jacqueline-yue.com',
    avatar: {
        src: avatar,
        alt: 'Jacqueline Yue'
    },
    title: '',
    description: '',
    headerNavLinks: [
        {
            text: 'About',
            href: '/'
        },
        {
            text: 'Run-on-Run',
            href: '/run-on-run'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jacqueline-yue/'
        }
    ],
    footerNavLinks: [
        {
            text: 'Run-on-run',
            href: '/run-on-run'
        },
        {
            text: 'Projects',
            href: '/projects'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jacqueline-yue/'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/oiyana'
        }
    ],
    hero: {
        title: 'Hi, I am Jac!',
        subtitle: 'A hand-on product builder and leader.',
        text: "A decade of building products and leading teams across games, creator platforms, subscriptions, and automation tools. My design background shapes how I work: I think in systems and behavioral loops, not just features.\n\nCurrently, I'm Product Director at <strong class=\"font-serif font-bold\"><a href=\"https://www.nytco.com/games/\">THE NEW YORK TIMES GAMES</a></strong>, focused on player engagement and subscriber retention across Wordle, Connections, Spelling Bee, and Crosswords.\n\nBefore that, at <strong class=\"font-serif font-bold\"><a href=\"https://medium.com/\">MEDIUM</a></strong>, I worked on keeping writers on the platform during a moment when many were leaving. The real problem wasn't features — it was trust and ownership. I built products to give writers more control over their audiences.\n\nAt <strong class=\"font-serif font-bold\"><a href=\"https://www.buzzfeed.com/\">BUZZFEED</a></strong>, I started as a design lead building viral games and internal tools, then moved into PM to rethink how content gets distributed at scale. The result was an ML-powered system that handled the majority of their social publishing automatically.\n\nI lead by creating the conditions for good work — finding alignment across different perspectives and turning ambitious ideas into something shippable."
    },
    subscribe: {
        enabled: false,
        title: '',
        text: '',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
