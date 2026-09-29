import { Player } from "../Player";
import { ClassWithUuid } from "../utility/ClassUtility";
import type { IZone } from "../Zones";

export abstract class Card extends ClassWithUuid {

    readonly owner?: Player
    zone?: IZone
    types: CardType[] = []

    constructor(types:CardType[], zone?: IZone,owner?: Player) {
        super()
        this.types = types

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