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
