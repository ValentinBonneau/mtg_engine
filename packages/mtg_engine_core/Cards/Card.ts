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
    public color: {
        w?: boolean
        u?: boolean
        b?: boolean
        r?: boolean
        g?: boolean
    } = {}
    abstract textbox: string
    abstract power? : string 
    abstract toughness? : string
    abstract loyalty? : string
    abstract defense? : string

    constructor(zone?: IZone,owner?: Player) {
        super()

        this.owner = owner
        this.zone = zone //?? owner
    }
}

//CR 205.2a
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