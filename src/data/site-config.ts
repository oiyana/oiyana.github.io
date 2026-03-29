import avatar from '../assets/images/avatar.jpg';
import jacyueLettering from '../assets/images/examples/jac-yue-lettering-2.svg';
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
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jacquelineyue/'
        }
    ],
    footerNavLinks: [],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jacquelineyue/'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/oiyana'
        }
    ],
    hero: {
        titleImage: {
            src: jacyueLettering,
            alt: 'Jac Yue'
        }
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
