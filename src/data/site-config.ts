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
            text: 'About Jac',
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
        title: '👋 THIS IS JAC. A PROUDCT BUILDER & LEADER.',
        text: "I’m a product manager with a foundation in design, which shapes how I approach products as interconnected systems of interactions and user loops. I’ve built products and led teams across diverse domains, including games, creator economy, subscription media, social and viral platforms, and automation tools. I thrive at the intersection of technology-driven innovation, intentional design, and measurable value creation, where I deliver lasting impact.\n\nCurrently, I am the Product Director at [THE NEW YORK TIMES GAMES](https://www.nytco.com/games/) 🟩, where I focus on player engagement and subscriber retention strategy for a portfolio of puzzles you may know, including Wordle, Connections, Spelling Bee, and Crosswords.\n\nPreviously at [MEDIUM](https://medium.com/) ✍️, I built and scaled products that empowered hundreds of thousands of writers, from public figures to independent bloggers, to grow their audiences.\n\nAt [BUZZFEED](https://www.buzzfeed.com/) 🐱, I spent the first few years as a design lead building experimental games and internal analytics tools before transitioning into product management. Working with a talented team, I helped build our home-grown distribution system, increasing traffic, affiliate revenue, and short-form video ad share through automated, ML-powered social distribution.\n\nI've been fortunate to lead and learn alongside cross-functional teams of exceptionally talented individuals, tackling complex problems across varied contexts. Whenever possible, I create environments where people can do their best work, find alignment across diverse perspectives, and turn ambitious ideas into reality. "
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
