import { v4 as uuid, type UUIDTypes } from 'uuid';
import type { ObjectWithUuid } from '../utility/Types';
import { ClassWithUuid } from '../utility/ClassUtility';
import { Extremity, PlayerZone } from './PlayerZones';
import type { IDecklist } from './IDecklist';

export class Player extends ClassWithUuid{
    public isActive : boolean = false
    private _teammates : Player[] = []
    private _startingPosition? : number
    private _playerZone: PlayerZone
    private _mulliganCount: number = 0

    lifecount : number = 20

    constructor(decklist: IDecklist) {
        super()
        this._playerZone = new PlayerZone(decklist)
    }

    public get teammates() {
        return this._teammates
    }

    public set teammates(players : Player[]){

    }

    public get startingPosition() : number | undefined {return this._startingPosition}
    public set startingPosition(p: number){this._startingPosition = p}

    public get zone() {return this._playerZone}


    //#region Action
    draw(x: number = 1){
        this._playerZone.transfereCard({
            zone: this._playerZone.library,
            extremity: Extremity.Top
        },{
            zone: this._playerZone.hand,
            extremity: Extremity.Top
        },
        x)
    }

    mulligan(){
        this._mulliganCount++
        this.draw(7)
            
    }

    //#endregion

}
