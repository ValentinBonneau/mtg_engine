import type { UUIDTypes } from "uuid"

export abstract class CommunicationInterface{

    private _possibleAction: any[]

    constructor(){
        this._possibleAction = []
    }

    get possibleAction() {
        return this._possibleAction
    }

    takeAction(playerUuid: UUIDTypes,) {

    }
}
