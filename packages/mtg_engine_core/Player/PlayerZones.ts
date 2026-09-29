import type { Card } from "../Cards";
import { Hand, Library, Zone } from "../Zones";
import type { IDecklist } from "./IDecklist";


export class PlayerZone {
    private _library : Library
    private _hand : Hand

    constructor(decklist: IDecklist){
        this._library = new Library(this.convertDecklist(decklist))
        this._hand = new Hand()
    }

    public get library(){ return this._library}
    public get hand(){ return this._hand}

    transfereCard(from:{zone:Zone,extremity:Extremity}, to: {zone:Zone,extremity:Extremity}, count: number = 1){
        switch([from.extremity,to.extremity]){
            case [Extremity.Top,Extremity.Top]:
                for(let n = 0; n < count; n++){
                    to.zone.cards.push(from.zone.cards.pop() as Card)
                }
                break;
            case [Extremity.Top,Extremity.Bottom]:
                for(let n = 0; n < count; n++){
                    to.zone.cards.unshift(from.zone.cards.pop() as Card)
                }
                break;
            case [Extremity.Bottom,Extremity.Top]:
                for(let n = 0; n < count; n++){
                    to.zone.cards.push(from.zone.cards.shift() as Card)
                }
                break;
            case [Extremity.Bottom,Extremity.Bottom]:
                for(let n = 0; n < count; n++){
                    to.zone.cards.unshift(from.zone.cards.shift() as Card)
                }
                break;
        }
    }

    private convertDecklist(decklist: IDecklist) : Card[]{
        const cards : Card[] = []

        for(const {card, count} of (<IDecklist>decklist).maindeck){
            for(let i = 0; i < count; i++){
                cards.push(card)
            }
        }
        
        // reset uuid to avoid duplicate
        cards.map((c)=> {
            c.regenUuid()
            return c
        })

        return cards
    }
}

export enum Extremity{
    Top,
    Bottom
}