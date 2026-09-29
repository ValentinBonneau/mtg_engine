import type { UUIDTypes } from "uuid"
import type { ObjectWithUuid } from "./Types"

export function shuffle<T = any>(arr : T[]) : T[] {
    const res : T[] = []

    arr.forEach((i)=>{
        if(Math.floor(Math.random()*2) == 0){
            res.push(i)
        }else{
            res.unshift(i)
        }
    })
    return res
}

export function UniqueUuidFilter<T extends ObjectWithUuid>(e: T, id: number,a: T[]){
    return a.findIndex((e2)=>e2.uuid == e.uuid) == id
}