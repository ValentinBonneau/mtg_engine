import type { Card } from "../Cards";
import { Zone } from "./Zone";

export class Library extends Zone {

    constructor(decklist: Card[]){
        super()
        
        
        this.cards = decklist


        //reset UUID of card to avoid duplicate UUID
        this.cards = this.cards.map(c => {
            c.regenUuid()
            return c
        })

    }

}

