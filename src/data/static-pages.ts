import type { Link } from '../types';

/**
 * Local list of fixed static routes (outside content collections).
 * Content pages and projects are pulled dynamically on the directory page.
 */
export const staticPageLinks: Link[] = [
    { text: 'Home', href: '/' },
    { text: 'Blog', href: '/blog/' },
    { text: 'Projects', href: '/projects/' },
    { text: 'Tags', href: '/tags/' },
    { text: 'Paris', href: '/paris/' },
    { text: 'Paris — Swimming', href: '/paris/swimming.html' },
    { text: 'Paris — Le Corbusier', href: '/paris/le-corbusier.html' },
    { text: 'Paris — Tour de France', href: '/paris/tour-de-france.html' }
];
