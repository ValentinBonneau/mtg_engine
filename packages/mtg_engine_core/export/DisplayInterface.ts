import type { Card } from "../Cards"
import type { Player } from "../Player"

export abstract class DisplayInterface{
    abstract addToStack(trigger: any) : void

    abstract displayMulliganMenu(opt: displayMulliganMenuOption): void

    
}

interface displayMulliganMenuOption{

    /**
     * Player concern by mulligan
     */
    player: Player
    
    /**
     * Take a mulligan
     * @returns the 7 new cards of the mulligan
     */
    mulligan: () => Card[]
    
    /**
     * @returns the number of mulligan sins begining
     */
    getMulliganCount: () => number

    /**
     * MANDATORY to close the muligan menu,
     * otherwise game will not continue
     * @param keep card that will be put in the hand
     * @param bottom card that will be put in the 
     */
    endMulligan: (keep: Card[], bottom: Card[]) => void
}

