export interface NavItem {
    name: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export const SIDEBAR_GROUPS: NavGroup[] = [
    {
        title: "Overview",
        items: [
            { name: "Introduction", href: "/" },
            { name: "History", href: "/history" },
        ],
    },
    {
        title: "Deckbuilding",
        items: [
            { name: "Maindeck", href: "/analysis" },
            { name: "Sideboard", href: "/sideboard" },
            { name: "Tournament Lists", href: "/deck" },
        ],
    },
    {
        title: "Gameplay",
        items: [
            { name: "Macro Strategy", href: "/strategy" },
            { name: "Mulligan Guide", href: "/mulligan" },
            { name: "Intuition Cheatsheet", href: "/intuition" },
            { name: "Mechanics & Loops", href: "/mechanics" },
            { name: "Sideboard Strategy", href: "/sideboard-strategy" },
        ],
    },
    {
        title: "Metagame & Matchups",
        items: [
            { name: "Playing Through Hate", href: "/playing-through-hate" },
            { name: "Matchup Analysis", href: "/matchups" },
        ],
    },
    {
        title: "Community & Resources",
        items: [
            { name: "External Resources", href: "/resources" },
            { name: "Project & Roadmap", href: "/roadmap" },
            { name: "Conclusion & Credits", href: "/conclusion" },
        ],
    },
];

export const FLAT_NAV: NavItem[] = SIDEBAR_GROUPS.flatMap((group) => group.items);
