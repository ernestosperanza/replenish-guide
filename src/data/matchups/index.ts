export interface MatchupMeta {
    id: string;
    category: "dominant" | "favorable" | "competitive" | "difficult";
    title: string;
    badgeTheme: "success" | "info" | "warning" | "alert";
    badgeText: string;
    subtitle: string;
    cards: { src: string; alt: string }[];
}

export const matchups: MatchupMeta[] = [
    {
        id: "enchantress",
        category: "dominant",
        title: "Enchantress",
        badgeTheme: "success",
        badgeText: "Dominant",
        subtitle: "Faster combo assembly & superior graveyard refueling",
        cards: [
            { src: "/src/assets/cards/matchups/enchantress/argothian_enchantress.jpg", alt: "Argothian Enchantress" },
            { src: "/src/assets/cards/matchups/enchantress/enchantresss_presence.jpg", alt: "Enchantress's Presence" },
            { src: "/src/assets/cards/matchups/enchantress/sterling_grove.jpg", alt: "Sterling Grove" },
        ],
    },
    {
        id: "elves",
        category: "dominant",
        title: "Elves",
        badgeTheme: "success",
        badgeText: "Dominant",
        subtitle: "Overwhelming endgame combo lock & high-leverage removal",
        cards: [
            { src: "/src/assets/cards/matchups/elves/priest_of_titania.jpg", alt: "Priest of Titania" },
            { src: "/src/assets/cards/matchups/elves/quirion_ranger.jpg", alt: "Quirion Ranger" },
            { src: "/src/assets/cards/matchups/elves/wirewood_symbiote.jpg", alt: "Wirewood Symbiote" },
        ],
    },
    {
        id: "rock_and_midrange",
        category: "dominant",
        title: "Rock and Midrange",
        badgeTheme: "success",
        badgeText: "Dominant",
        subtitle: "Massive card advantage engine overcomes one-for-one attrition",
        cards: [
            { src: "/src/assets/cards/matchups/rock_and_midrange/pernicious_deed.jpg", alt: "Pernicious Deed" },
            { src: "/src/assets/cards/matchups/rock_and_midrange/spiritmonger.jpg", alt: "Spiritmonger" },
            { src: "/src/assets/cards/matchups/rock_and_midrange/cabal_therapy.jpg", alt: "Cabal Therapy" },
        ],
    },
    {
        id: "sligh",
        category: "favorable",
        title: "Sligh",
        badgeTheme: "info",
        badgeText: "Favorable",
        subtitle: "Superior survival architecture overcomes burn clocks & lock finishes",
        cards: [
            { src: "/src/assets/cards/matchups/sligh/jackal_pup.jpg", alt: "Jackal Pup" },
            { src: "/src/assets/cards/matchups/sligh/fireblast.jpg", alt: "Fireblast" },
            { src: "/src/assets/cards/matchups/sligh/ball_lightning.jpg", alt: "Ball Lightning" },
        ],
    },
    {
        id: "landstill",
        category: "favorable",
        title: "Landstill",
        badgeTheme: "info",
        badgeText: "Favorable",
        subtitle: "Overwhelming threat density exhausts reactive countermagic",
        cards: [
            { src: "/src/assets/cards/matchups/landstill/standstill.jpg", alt: "Standstill" },
            { src: "/src/assets/cards/matchups/landstill/mishras_factory.jpg", alt: "Mishra's Factory" },
            { src: "/src/assets/cards/matchups/landstill/counterspell.jpg", alt: "Counterspell" },
        ],
    },
    {
        id: "psychatog",
        category: "favorable",
        title: "Psychatog",
        badgeTheme: "info",
        badgeText: "Favorable",
        subtitle: "High-leverage threat overload beats slow developmental control",
        cards: [
            { src: "/src/assets/cards/matchups/psychatog/psychatog.jpg", alt: "Psychatog" },
            { src: "/src/assets/cards/matchups/psychatog/upheaval.jpg", alt: "Upheaval" },
            { src: "/src/assets/cards/matchups/psychatog/circular_logic.jpg", alt: "Circular Logic" },
        ],
    },
    {
        id: "bw_control",
        category: "favorable",
        title: "BW Control",
        badgeTheme: "info",
        badgeText: "Favorable",
        subtitle: "Opposing discard actively accelerates our Replenish graveyard setup",
        cards: [
            { src: "/src/assets/cards/matchups/bw_control/vindicate.jpg", alt: "Vindicate" },
            { src: "/src/assets/cards/matchups/bw_control/gerrards_verdict.jpg", alt: "Gerrard's Verdict" },
            { src: "/src/assets/cards/matchups/bw_control/swords_to_plowshares.jpg", alt: "Swords to Plowshares" },
        ],
    },
    {
        id: "rg_ponza",
        category: "favorable",
        title: "RG Ponza",
        badgeTheme: "info",
        badgeText: "Favorable",
        subtitle: "Basic mana discipline & post-board permanent locks defeat land destruction",
        cards: [
            { src: "/src/assets/cards/matchups/rg_ponza/stone_rain.jpg", alt: "Stone Rain" },
            { src: "/src/assets/cards/matchups/rg_ponza/pillage.jpg", alt: "Pillage" },
            { src: "/src/assets/cards/matchups/rg_ponza/rishadan_port.jpg", alt: "Rishadan Port" },
        ],
    },
    {
        id: "moneyball",
        category: "competitive",
        title: "Moneyball (Black Aggro)",
        badgeTheme: "warning",
        badgeText: "Competitive",
        subtitle: "Volatile early disruption meets our defensive Attunement resource vault",
        cards: [
            { src: "/src/assets/cards/matchups/moneyball/wretched_anurid.jpg", alt: "Wretched Anurid" },
            { src: "/src/assets/cards/matchups/moneyball/grinning_demon.jpg", alt: "Grinning Demon" },
            { src: "/src/assets/cards/matchups/moneyball/gloom.jpg", alt: "Gloom" },
        ],
    },
    {
        id: "goblins",
        category: "competitive",
        title: "Goblins",
        badgeTheme: "warning",
        badgeText: "Competitive",
        subtitle: "Explosive dual-axis aggression demands surviving the opening three turns",
        cards: [
            { src: "/src/assets/cards/matchups/goblins/goblin_lackey.jpg", alt: "Goblin Lackey" },
            { src: "/src/assets/cards/matchups/goblins/goblin_piledriver.jpg", alt: "Goblin Piledriver" },
            { src: "/src/assets/cards/matchups/goblins/goblin_ringleader.jpg", alt: "Goblin Ringleader" },
        ],
    },
    {
        id: "terrageddon",
        category: "competitive",
        title: "Terrageddon / Quiet Spec Oath",
        badgeTheme: "warning",
        badgeText: "Competitive",
        subtitle: "Land destruction & aggressive beaters tested against mana discipline",
        cards: [
            { src: "/src/assets/cards/matchups/terrageddon/terravore.jpg", alt: "Terravore" },
            { src: "/src/assets/cards/matchups/terrageddon/armageddon.jpg", alt: "Armageddon" },
            { src: "/src/assets/cards/matchups/terrageddon/oath_of_druids.jpg", alt: "Oath of Druids" },
        ],
    },
    {
        id: "stiflenought",
        category: "competitive",
        title: "Stiflenought",
        badgeTheme: "warning",
        badgeText: "Competitive",
        subtitle: "Configuration-dependent speed demands reactive control transition",
        cards: [
            { src: "/src/assets/cards/matchups/stiflenought/phyrexian_dreadnought.jpg", alt: "Phyrexian Dreadnought" },
            { src: "/src/assets/cards/matchups/stiflenought/stifle.jpg", alt: "Stifle" },
            { src: "/src/assets/cards/matchups/stiflenought/illusionary_mask.jpg", alt: "Illusionary Mask" },
        ],
    },
    {
        id: "mirror",
        category: "competitive",
        title: "Mirror",
        badgeTheme: "warning",
        badgeText: "Competitive",
        subtitle: "High-velocity setup race governed by stack discipline and Abeyance",
        cards: [
            { src: "/src/assets/cards/matchups/mirror/replenish.jpg", alt: "Replenish" },
            { src: "/src/assets/cards/matchups/mirror/opalescence.jpg", alt: "Opalescence" },
            { src: "/src/assets/cards/matchups/mirror/parallax_wave.jpg", alt: "Parallax Wave" },
        ],
    },
    {
        id: "stasis",
        category: "competitive",
        title: "Stasis",
        badgeTheme: "warning",
        badgeText: "Competitive",
        subtitle: "Resource paralysis dismantled by instant-speed end-step escape hatches",
        cards: [
            { src: "/src/assets/cards/matchups/stasis/stasis.jpg", alt: "Stasis" },
            { src: "/src/assets/cards/matchups/stasis/black_vise.jpg", alt: "Black Vise" },
            { src: "/src/assets/cards/matchups/stasis/forsaken_city.jpg", alt: "Forsaken City" },
        ],
    },
    {
        id: "devourer",
        category: "difficult",
        title: "Devourer",
        badgeTheme: "alert",
        badgeText: "Difficult",
        subtitle: "Blisteringly fast graveyard combo demands immediate Meddling Mage & Seal reactivity",
        cards: [
            { src: "/src/assets/cards/matchups/devourer/phyrexian_devourer.jpg", alt: "Phyrexian Devourer" },
            { src: "/src/assets/cards/matchups/devourer/sutured_ghoul.jpg", alt: "Sutured Ghoul" },
            { src: "/src/assets/cards/matchups/devourer/survival_of_the_fittest.jpg", alt: "Survival of the Fittest" },
        ],
    },
    {
        id: "aggro_with_armageddon",
        category: "difficult",
        title: "Aggro with Armageddon",
        badgeTheme: "alert",
        badgeText: "Difficult",
        subtitle: "Dual-axis hatebears & mana denial neutralized by basic land fetch discipline",
        cards: [
            { src: "/src/assets/cards/matchups/terrageddon/armageddon.jpg", alt: "Armageddon" },
            { src: "/src/assets/cards/matchups/aggro_with_armageddon/mother_of_runes.jpg", alt: "Mother of Runes" },
            { src: "/src/assets/cards/matchups/aggro_with_armageddon/silver_knight.jpg", alt: "Silver Knight" },
        ],
    },
];
