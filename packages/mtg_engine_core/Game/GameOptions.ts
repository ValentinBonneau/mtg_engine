import type { CommunicationInterface, DisplayInterface } from "../export"

export interface GameOptions {
    format: Format
    freeMuliganCount: number
    players : {
        name: string,
        decklist: {
            main: {
                oracle_id:string,
                count: number,
                isCommander: boolean
                isCompanion: boolean
            }
            side: {
                oracle_id:string,
                count: number,
            }
        }
    }[]
    outboundInterfaces: OutboundInterfaces
    selectStartingPlayerRandomly? : boolean
}

export enum Format {
    Standard,
    Pioneer,
    Modern
}

export const defaultOption: GameOptions = {
    format: Format.Standard,
    freeMuliganCount: 0,
    players: [],
    outboundInterfaces: {} as any
}

interface OutboundInterfaces {
    communication : CommunicationInterface
    display: DisplayInterface
}
