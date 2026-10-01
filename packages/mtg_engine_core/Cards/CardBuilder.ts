
import { ScryfallLayout, type ScryfallCard } from "@scryfall/api-types";
import { Card } from ".";
import { ScryfallAPI } from "../API/ScryfallAPI";
import { CardNotFoundException } from "../utility/Exceptions";
import { applyMixins } from "../utility/Functions/applyMixins";
import { Manacost } from "../Manacost";

export class CardBuilder {
    static async fromOracleId(oracle_id: string): Promise<Card> {
        const scryfall_data = await ScryfallAPI.fetchCardByOID(oracle_id)
        if (!scryfall_data) {
            throw new CardNotFoundException()
        }

        switch (scryfall_data.layout) {
            case ScryfallLayout.Normal:
                return CardBuilder.buildNormal(scryfall_data)
            default:
                throw new CardNotFoundException()
        }
    }

    static buildNormal(card: ScryfallCard.Normal): Card {
        class BuildedCard extends Card {

            override name: string = card.name
            override manacost: Manacost = new Manacost(card.mana_cost ?? "")
            override ilustration: string = card.image_uris?.png ?? ""
            override textbox: string = card.oracle_text
            override power?: string | undefined = card.power;
            override toughness?: string | undefined = card.toughness;
            override loyalty?: string | undefined = card.loyalty;
            override defense?: string | undefined = card.defense;

        }



        let types_class: any[] = []

        applyMixins(BuildedCard, types_class)
        return new BuildedCard()
    }
}