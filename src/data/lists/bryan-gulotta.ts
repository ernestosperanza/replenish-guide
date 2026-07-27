import type { Decklist } from "./types";

export const bryanGulottaDeck: Decklist = {
    id: "bryan-gulotta",
    player: "Bryan Gulotta",
    badgeText: "2nd Place - NA Premodern Championship @ Lobstercon (2026)",
    badgeTheme: "secondary",
    columns: [
        {
            sections: [
                {
                    title: "Creatures",
                    items: [{ count: 4, name: "Meddling Mage" }],
                },
                {
                    title: "Combo / Engine",
                    items: [
                        { count: 4, name: "Replenish" },
                        { count: 4, name: "Attunement" },
                        { count: 4, name: "Opalescence" },
                        { count: 4, name: "Parallax Wave" },
                        { count: 2, name: "Decree of Silence" },
                    ],
                },
            ],
        },
        {
            sections: [
                {
                    title: "Card Selection",
                    items: [
                        { count: 3, name: "Frantic Search" },
                        { count: 3, name: "Intuition" },
                    ],
                },
                {
                    title: "Interaction",
                    items: [
                        { count: 4, name: "Swords to Plowshares" },
                        { count: 3, name: "Seal of Cleansing" },
                    ],
                },
            ],
        },
        {
            sections: [
                {
                    title: "Lands (25)",
                    items: [
                        { count: 5, name: "Island" },
                        { count: 5, name: "Plains" },
                        { count: 4, name: "Adarkar Wastes" },
                        { count: 4, name: "Ancient Tomb" },
                        { count: 4, name: "Flooded Strand" },
                        { count: 3, name: "Skycloud Expanse" },
                    ],
                },
                {
                    title: "Sideboard (15)",
                    items: [
                        { count: 3, name: "Abeyance" },
                        { count: 3, name: "Exalted Angel" },
                        { count: 2, name: "Hydroblast" },
                        { count: 2, name: "Tsabo's Web" },
                        { count: 1, name: "Blue Elemental Blast" },
                        { count: 1, name: "Nevinyrral's Disk" },
                        { count: 1, name: "Seal of Cleansing" },
                        { count: 1, name: "Sphere of Law" },
                        { count: 1, name: "Wrath of God" },
                    ],
                },
            ],
        },
    ],
};
