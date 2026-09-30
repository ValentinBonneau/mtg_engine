import type { Manacost } from "../Manacost/Manacost";
import { Player } from "../Player";
import { ClassWithUuid } from "../utility/ClassUtility";
import type { IZone } from "../Zones";

export abstract class Card extends ClassWithUuid {

    readonly owner?: Player
    zone?: IZone
    types: CardType[] = []

    //CR200.1
    abstract name: string
    abstract manacost : Manacost
    abstract ilustration : string // probably an URL #TODO ilustation may be change to add credit and legal text
    abstract color: {
        w: boolean
        u: boolean
        b: boolean
        r: boolean
        g: boolean
    }
    abstract textbox: string
    abstract power? : number
    abstract toughness? : number
    abstract loyalty? : number
    abstract defense? : number

    constructor(zone?: IZone,owner?: Player) {
        super()

        this.owner = owner
        this.zone = zone //?? owner
    }
}

export enum CardType {
    Artifact,
    Battle,
    Conspiracy, 
    Creature, 
    Dungeon, 
    Enchantment, 
    Instant, 
    Kindred,
    Land, 
    Phenomenon, 
    Plane, 
    Planeswalker, 
    Scheme, 
    Sorcery,
    Vanguard
}