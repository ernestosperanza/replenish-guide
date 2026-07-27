import type { Decklist } from "./types";

export const alessandroGalliDeck: Decklist = {
    id: "alessandro-galli",
    player: "Alessandro Galli",
    badgeText: "4Seasons Spring Ed. @ Bologna (2026)",
    badgeTheme: "info",
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
                        { count: 3, name: "Seal of Cleansing" },
                        { count: 3, name: "Abeyance" },
                    ],
                },
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
            ],
        },
        {
            sections: [
                {
                    title: "Sideboard (15)",
                    items: [
                        { count: 4, name: "Meddling Mage" },
                        { count: 3, name: "Defense Grid" },
                        { count: 3, name: "Hydroblast" },
                        { count: 2, name: "Exalted Angel" },
                        { count: 2, name: "Tsabo's Web" },
                        { count: 1, name: "Seal of Cleansing" },
                    ],
                },
            ],
        },
    ],
};
