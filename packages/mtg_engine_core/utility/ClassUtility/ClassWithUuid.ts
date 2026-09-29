import { v4 as uuid, type UUIDTypes } from 'uuid';

export abstract class ClassWithUuid {
    protected _uuid: UUIDTypes

    constructor() {
        this._uuid = uuid()
    }

    public get uuid(){
        return this._uuid
    }

    public regenUuid(){
        this._uuid = uuid()
    }
}