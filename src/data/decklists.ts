export interface CardItem {
    count: number;
    name: string;
}

export interface DeckSectionData {
    title: string;
    items: CardItem[];
}

export interface DeckColumn {
    sections: DeckSectionData[];
}

export interface Decklist {
    id: string;
    player: string;
    event?: string;
    badgeText?: string;
    badgeTheme?: "info" | "warning" | "success" | "alert" | "flat" | "secondary" | "outline";
    description?: string;
    columns: DeckColumn[];
}

export function getCopyString(deck: Decklist): string {
    const maindeckLines: string[] = [];
    const sideboardLines: string[] = [];

    deck.columns.forEach((col) => {
        col.sections.forEach((sec) => {
            const isSideboard = sec.title.toLowerCase().includes("sideboard");
            sec.items.forEach((item) => {
                const line = `${item.count} ${item.name}`;
                if (isSideboard) {
                    sideboardLines.push(line);
                } else {
                    maindeckLines.push(line);
                }
            });
        });
    });

    let result = maindeckLines.join("\n");
    if (sideboardLines.length > 0) {
        result += "\n\n// Sideboard\n" + sideboardLines.join("\n");
    }
    return result;
}

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

export const modernDecklists: Decklist[] = [
    {
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
    },
    {
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
    },
    {
        id: "bryan-gulotta",
        player: "Bryan Gulotta",
        badgeText: "2nd Place - NA Premodern Championship @ Lobstercon (2026)",
        badgeTheme: "warning",
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
    },
    {
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
    },
];
