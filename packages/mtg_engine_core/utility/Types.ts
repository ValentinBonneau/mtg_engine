import type { UUIDTypes } from "uuid"

export type ObjectWithUuid = {
    uuid: UUIDTypes
    [k: string]: any
}