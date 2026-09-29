import type { Card } from "../Cards"

export interface IDecklist {
    maindeck : {
        card: Card
        count: number
        isCommander: boolean
    }[]
    sideboard : {
        card: Card
        count: number
    }[]
}