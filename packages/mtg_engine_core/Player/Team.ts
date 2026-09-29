import {v4 as uuid, type UUIDTypes } from "uuid";
import type { Player } from "./Player";
import { UniqueUuidFilter } from "../utility/ArrayUtility";
import { ClassWithUuid } from "../utility/ClassUtility";

export class Team extends ClassWithUuid{


    private _players : Player[] = []

    /**
     *
     */
    constructor() {
        super()
    }

    public addPlayers(players : Player[]){
        this._players = [this._players,players].flat()

        //verify all player are unique
        this._players = this._players.filter(UniqueUuidFilter)
    }

    public get players() {return this._players}
}