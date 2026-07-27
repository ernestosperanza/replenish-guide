import type { Decklist } from "./types";

export const tomVanDeLogtDeck: Decklist = {
    id: "tom-van-de-logt-2000",
    player: "Tom van de Logt",
    event: "2000 World Championship (Standard)",
    columns: [
        {
            sections: [
                {
                    title: "Enchantments",
                    items: [
                        { count: 4, name: "Attunement" },
                        { count: 4, name: "Opalescence" },
                        { count: 4, name: "Parallax Wave" },
                        { count: 3, name: "Parallax Tide" },
                        { count: 1, name: "Energy Field" },
                        { count: 1, name: "Seal of Cleansing" },
                        { count: 1, name: "Seal of Removal" },
                    ],
                },
                {
                    title: "Sorceries",
                    items: [
                        { count: 4, name: "Replenish" },
                        { count: 1, name: "Wrath of God" },
                    ],
                },
            ],
        },
        {
            sections: [
                {
                    title: "Instants",
                    items: [
                        { count: 4, name: "Frantic Search" },
                        { count: 3, name: "Counterspell" },
                        { count: 3, name: "Enlightened Tutor" },
                        { count: 1, name: "Mystical Tutor" },
                    ],
                },
                {
                    title: "Artifacts",
                    items: [{ count: 1, name: "Sky Diamond" }],
                },
            ],
        },
        {
            sections: [
                {
                    title: "Lands",
                    items: [
                        { count: 9, name: "Island" },
                        { count: 8, name: "Plains" },
                        { count: 4, name: "Adarkar Wastes" },
                        { count: 4, name: "Rishadan Port" },
                    ],
                },
                {
                    title: "Sideboard",
                    items: [
                        { count: 3, name: "Erase" },
                        { count: 2, name: "Daze" },
                        { count: 2, name: "Lilting Refrain" },
                        { count: 2, name: "Submerge" },
                        { count: 2, name: "Wrath of God" },
                        { count: 1, name: "Chill" },
                        { count: 1, name: "Circle of Protection: Black" },
                        { count: 1, name: "Cursed Totem" },
                        { count: 1, name: "Seal of Cleansing" },
                    ],
                },
            ],
        },
    ],
};
