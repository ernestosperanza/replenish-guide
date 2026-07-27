import type { Decklist } from "./types";

export const achiIIesDeck: Decklist = {
    id: "achiii-2026",
    player: "AchiIIes",
    event: "MTGO Premodern League #10124 (Jan 2026)",
    columns: [
        {
            sections: [
                {
                    title: "Enchantments",
                    items: [
                        { count: 4, name: "Attunement" },
                        { count: 4, name: "Opalescence" },
                        { count: 4, name: "Parallax Tide" },
                        { count: 4, name: "Parallax Wave" },
                        { count: 4, name: "Seal of Cleansing" },
                    ],
                },
                {
                    title: "Sorceries",
                    items: [{ count: 4, name: "Replenish" }],
                },
            ],
        },
        {
            sections: [
                {
                    title: "Instants",
                    items: [
                        { count: 4, name: "Swords to Plowshares" },
                        { count: 3, name: "Intuition" },
                        { count: 2, name: "Frantic Search" },
                    ],
                },
                {
                    title: "Artifacts",
                    items: [{ count: 2, name: "Tsabo's Web" }],
                },
            ],
        },
        {
            sections: [
                {
                    title: "Lands",
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
                    title: "Sideboard",
                    items: [
                        { count: 4, name: "Orim's Chant" },
                        { count: 3, name: "Defense Grid" },
                        { count: 3, name: "Meddling Mage" },
                        { count: 2, name: "Exalted Angel" },
                        { count: 2, name: "Sphere of Law" },
                        { count: 1, name: "Tsabo's Web" },
                    ],
                },
            ],
        },
    ],
};
