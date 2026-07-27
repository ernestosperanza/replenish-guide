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
            { name: "Sideboard Strategy", href: "/sideboard-strategy" },
            { name: "Mulligan Guide", href: "/mulligan" },
            { name: "Mechanics & Loops", href: "/mechanics" },
            { name: "Intuition Cheatsheet", href: "/intuition" },
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
        title: "Wrapping Up",
        items: [
            { name: "Conclusion", href: "/conclusion" },
        ],
    },
];

export const FLAT_NAV: NavItem[] = SIDEBAR_GROUPS.flatMap((group) => group.items);
