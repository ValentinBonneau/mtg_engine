import type { ScryfallCard, ScryfallCardFields, ScryfallList} from "@scryfall/api-types"


export class ScryfallAPI {
    public static readonly  SF_URI = "https://api.scryfall.com"

    static async fetchCardByOID(oracle_id: string) : Promise<ScryfallCard.Any | undefined>{
        return fetch(new Request(
            `${ScryfallAPI.SF_URI}/cards/collection`,
            {
                method:'POST',
                headers:{
                    "User-Agent": "MTGEngineTool/0.1",
                    "Accept": "*/*"
                },
                body: JSON.stringify({
                    identifiers:[{
                        oracle_id
                    }]
                })
            }
        )).then((res) => res.json() as Promise<ScryfallList.Cards>)
        .then((res) => res.data[0])
    }
}