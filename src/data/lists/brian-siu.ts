import type { Decklist } from "./types";

export const brianSiuDeck: Decklist = {
    id: "brian-siu",
    player: "Brian Siu",
    badgeText: "1st Place - NA Premodern Championship @ Lobstercon (2026)",
    badgeTheme: "success",
    columns: [
        {
            sections: [
                {
                    title: "Combo / Engine",
                    items: [
                        { count: 4, name: "Replenish" },
                        { count: 4, name: "Attunement" },
                        { count: 4, name: "Opalescence" },
                        { count: 4, name: "Parallax Wave" },
                        { count: 3, name: "Decree of Silence" },
                    ],
                },
                {
                    title: "Card Selection",
                    items: [
                        { count: 3, name: "Frantic Search" },
                        { count: 3, name: "Intuition" },
                    ],
                },
            ],
        },
        {
            sections: [
                {
                    title: "Interaction / Protection",
                    items: [
                        { count: 4, name: "Swords to Plowshares" },
                        { count: 2, name: "Mana Leak" },
                        { count: 2, name: "Seal of Cleansing" },
                        { count: 1, name: "Abeyance" },
                    ],
                },
                {
                    title: "Lands (26)",
                    items: [
                        { count: 5, name: "Island" },
                        { count: 5, name: "Plains" },
                        { count: 4, name: "Adarkar Wastes" },
                        { count: 4, name: "Ancient Tomb" },
                        { count: 4, name: "Flooded Strand" },
                        { count: 4, name: "Skycloud Expanse" },
                    ],
                },
            ],
        },
        {
            sections: [
                {
                    title: "Sideboard (14)",
                    items: [
                        { count: 4, name: "Meddling Mage" },
                        { count: 2, name: "Abeyance" },
                        { count: 2, name: "Exalted Angel" },
                        { count: 2, name: "Hydroblast" },
                        { count: 2, name: "Seal of Cleansing" },
                        { count: 2, name: "Tsabo's Web" },
                    ],
                },
            ],
        },
    ],
};
