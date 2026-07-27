export * from "./lists/types";
export { tomVanDeLogtDeck } from "./lists/tom-van-de-logt";
export { achiIIesDeck } from "./lists/achiiies";

import { alessandroGalliDeck } from "./lists/alessandro-galli";
import { brianSiuDeck } from "./lists/brian-siu";
import { bryanGulottaDeck } from "./lists/bryan-gulotta";
import { marinebiomancerDeck } from "./lists/marinebiomancer";
import type { Decklist } from "./lists/types";

export const modernDecklists: Decklist[] = [
    alessandroGalliDeck,
    brianSiuDeck,
    bryanGulottaDeck,
    marinebiomancerDeck,
];
