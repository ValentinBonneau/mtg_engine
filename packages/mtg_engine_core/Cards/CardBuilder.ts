
import { ScryfallLayout, type ScryfallCard } from "@scryfall/api-types";
import { Card } from ".";
import { ScryfallAPI } from "../API/ScryfallAPI";
import { CardNotFoundException } from "../utility/Exceptions";
import type { CardType } from "./Card";

export class CardBuilder {
    static async fromOracleId(oracle_id: string): Promise<Card> {
        const scryfall_data = await ScryfallAPI.fetchCardByOID(oracle_id)
        if (!scryfall_data) {
            throw new CardNotFoundException()
        }

        let final_card = class extends Card { }

        let type_array_string: string[] = []

        if (scryfall_data.layout === ScryfallLayout.Normal) {
            const scryfall_card: ScryfallCard.Normal = scryfall_data
            const [type_string, subtype_string] = scryfall_data.type_line.split(/[^a-zA-Z0-9\s]/)
            type_array_string = type_string?.split(" ") ?? []
        }

        for (const type_string of type_array_string) {
            switch (type_string) {
                case "Artifact":
                    break
                case "Battle":
                    break
                case "Conspiracy":
                    break
                case "Creature":
                    break
                case "Dungeon":
                    break
                case "Enchantment":
                    break
                case "Instant":
                    break
                case "Kindred":
                    break
                case "Land":
                    break
                case "Phenomenon":
                    break

            }
        }


        return new final_card([])
    }
}