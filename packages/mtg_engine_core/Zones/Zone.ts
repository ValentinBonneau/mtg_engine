import type { Card } from "../Cards";
import { shuffle } from "../utility/ArrayUtility";
import type { IZone } from "./IZone";

export abstract class Zone implements IZone{
    
    cards: Card[] = [];

    shuffle(){
        this.cards = shuffle(this.cards)
    }
}