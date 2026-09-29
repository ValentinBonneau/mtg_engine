import { Card } from ".";
import type { Player } from "../Player";
import type { IZone } from "../Zones";
import { CardType } from "./Card";

export abstract class ArtifactCard extends Card{

    /**
     *
     */
    constructor(zone?: IZone,owner?: Player) {
        super([CardType.Artifact],zone,owner);
    }
}