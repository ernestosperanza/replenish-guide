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
            { name: "Lists", href: "/deck" },
        ],
    },
    {
        title: "Deckbuilding",
        items: [
            { name: "Maindeck", href: "/analysis" },
            { name: "Sideboard", href: "/sideboard" },
        ],
    },
    {
        title: "Gameplay",
        items: [
            { name: "Mulligan Guide", href: "/mulligan" },
            { name: "Mechanics", href: "/mechanics" },
            { name: "Intuition Guide", href: "/intuition" },
            { name: "Strategy", href: "/strategy" },
        ],
    },
    {
        title: "Metagame & Matchups",
        items: [
            { name: "Playing Through Hate", href: "/playing-through-hate" },
            { name: "Matchup Analysis", href: "/matchups" },
            { name: "Sideboard Matrix", href: "/sideboard-matrix" },
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
