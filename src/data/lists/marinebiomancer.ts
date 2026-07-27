import type { Decklist } from "./types";

export const marinebiomancerDeck: Decklist = {
    id: "marinebiomancer",
    player: "Marinebiomancer",
    badgeText: "Top 16 - New England Premodern Summer Regional (2026)",
    badgeTheme: "alert",
    description:
        '<strong>The "Creatureless 75" Architecture:</strong> This innovative tournament configuration completely circumvents the traditional post-board midrange creature pivot (omitting Exalted Angel and Meddling Mage entirely). By maintaining zero creatures across all 75 cards, it permanently invalidates opposing spot removal and sideboard sweepers. In exchange, the list transitions into an absolute hard-control engine—fielding a third maindeck copy of <code>Decree of Silence</code> supported by an extensive instant-speed permission suite. Additionally, the sideboard engineers a strategic split between <code>Seal of Cleansing</code> and <code>Disenchant</code> to efficiently dismantle opposing tax pieces like <code>Aura of Silence</code> without incurring casting delays.',
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
                        { count: 2, name: "Abeyance" },
                        { count: 2, name: "Mana Leak" },
                        { count: 1, name: "Counterspell" },
                    ],
                },
                {
                    title: "Lands (26)",
                    items: [
                        { count: 6, name: "Plains" },
                        { count: 5, name: "Island" },
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
                        { count: 3, name: "Tsabo's Web" },
                        { count: 2, name: "Blue Elemental Blast" },
                        { count: 2, name: "Disenchant" },
                        { count: 2, name: "Seal of Cleansing" },
                        { count: 1, name: "Abeyance" },
                        { count: 1, name: "Fact or Fiction" },
                        { count: 1, name: "Hydroblast" },
                        { count: 1, name: "Nevinyrral's Disk" },
                        { count: 1, name: "Orim's Chant" },
                        { count: 1, name: "Wrath of God" },
                    ],
                },
            ],
        },
    ],
};
