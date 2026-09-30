
import { ScryfallLayout, type ScryfallCard } from "@scryfall/api-types";
import { Card } from ".";
import { ScryfallAPI } from "../API/ScryfallAPI";
import { CardNotFoundException } from "../utility/Exceptions";
import { CardType } from "./Card";
import { ArtifactCard } from "./ArtifactCard";
import { applyMixins } from "../utility/Functions/applyMixins";

export class CardBuilder {
    static async fromOracleId(oracle_id: string): Promise<Card> {
        const scryfall_data = await ScryfallAPI.fetchCardByOID(oracle_id)
        if (!scryfall_data) {
            throw new CardNotFoundException()
        }

        class BuildedCard extends Card{}

        let types_class : any[] = []
        const cardTypes : CardType[] = []

        if (scryfall_data.layout === ScryfallLayout.Normal) {
            const [type_string, subtype_string] = scryfall_data.type_line.split(/[^a-zA-Z0-9\s]/)
            types_class = (type_string?.split(" ") ?? []).map((str_type)=>{
                switch (type_string) {
                case "Artifact":
                    cardTypes.push(CardType.Artifact)
                    return ArtifactCard
                case "Battle":
                    cardTypes.push(CardType.Battle)
                    break
                case "Conspiracy":
                    cardTypes.push(CardType.Conspiracy)
                    break
                case "Creature":
                    cardTypes.push(CardType.Creature)
                    break
                case "Dungeon":
                    cardTypes.push(CardType.Dungeon)
                    break
                case "Enchantment":
                    cardTypes.push(CardType.Enchantment)
                    break
                case "Instant":
                    cardTypes.push(CardType.Instant)
                    break
                case "Kindred":
                    cardTypes.push(CardType.Kindred)
                    break
                case "Land":
                    cardTypes.push(CardType.Land)
                    break
                case "Phenomenon":
                    cardTypes.push(CardType.Phenomenon)
                    break

            }
            })
            
        }

        applyMixins(BuildedCard,types_class)
        return new BuildedCard()
    }
}