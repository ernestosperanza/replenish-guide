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
            { name: "Lists", href: "/deck" },
        ],
    },
    {
        title: "Gameplay",
        items: [
            { name: "Mechanics", href: "/mechanics" },
            { name: "Intuition Guide", href: "/intuition" },
            { name: "Strategy", href: "/strategy" },
            { name: "Mulligan Guide", href: "/mulligan" },
        ],
    },
    {
        title: "Matchups",
        items: [
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
