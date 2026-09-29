import type { UUIDTypes } from "uuid";
import { Player } from "../Player";
import { shuffle } from "../utility/ArrayUtility";
import type { GameOptions } from "./GameOptions";

export class Game {
    players : Player[] = []
    private _playerOrdersUuid: UUIDTypes[] = []

    constructor(opt: GameOptions) {
        this.players = opt.players.map((pl)=>{
            return new Player(pl.decklist)
        })
        
    }

    start() {
        this.selectPlayerOrder()
        for(let i = 0; i < this.players.length; i++){
            this.players[i]?.zone.library.shuffle()
        }
    }

    private selectPlayerOrder(){
        this.players = shuffle(this.players)
        this.players = this.players.map((p,i)=>{
            p.startingPosition = i+1
            this._playerOrdersUuid.push(p.uuid)
            return p
        })

    }

    public get playerOrdersUuid(){return this._playerOrdersUuid}
}