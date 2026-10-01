import { NotImplementedException } from "../utility/Exceptions";
import { HybridMana } from "./HybridMana";

export class Manacost {

    private _cmc: number = 0
    
    private _symbols: Partial<Record<ManaSymbol,number>> = {}

    constructor(private manaString: string) {
        
        manaString.matchAll(/(?<=\{).+?(?=\})/)
        .map(([m])=>m.replaceAll(/\//,"")).map(m=>{
            
            if((Object.values(ManaSymbol).includes(m as ManaSymbol))){ // check if enum contain it
                this._symbols[m as ManaSymbol] = (this._symbols[m as ManaSymbol] ?? 0) + 1 
            }else if(m.match(/^\d+$/)){ // then add Numeric
                this._symbols[ManaSymbol.Numeric] = parseInt(m)
            }
        })

        //calculate CMC
        for(const [symbol,count] of Object.entries(this._symbols)){
            if((symbol as ManaSymbol) in [
                ManaSymbol.Hybrid_2White,
                ManaSymbol.Hybrid_2Blue,
                ManaSymbol.Hybrid_2Black,
                ManaSymbol.Hybrid_2Red,
                ManaSymbol.Hybrid_2Green,
            ]){ 
                // CR 202.3f
                this._cmc += 2 * count
            }else if(symbol as ManaSymbol != ManaSymbol.Variable){
                this._cmc += count
            }
        }
    }

    public get cmc(){return this._cmc}
    public get symbols(){return this._symbols}

}

//CR 107.4
export enum ManaSymbol{
    White = "W",
    Blue = "U",
    Black = "B",
    Red = "R",
    Green = "G",
    Colorless = "C",

    Variable = "X",//X
    
    Numeric = "N",//1, 2, 3, 4, and so on

    Snow = "S",
    
    //hybrid symbols
    Hybrid_WhiteBlue = "WU",
    Hybrid_WhiteBlack = "WB",
    Hybrid_BlueBlack = "UB",
    Hybrid_BlueRed = "UR",
    Hybrid_BlackRed = "BR",
    Hybrid_BlackGreen = "BG",
    Hybrid_RedGreen = "RG",
    Hybrid_RedWhite = "RW",
    Hybrid_GreenWhite = "GW",
    Hybrid_GreenBlue = "GU",

    //monocolored hybrid symbols
    Hybrid_2White = "2W",
    Hybrid_2Blue = "2U",
    Hybrid_2Black = "2B",
    Hybrid_2Red = "2R",
    Hybrid_2Green = "2G",
    Hybrid_ColorlessWhite = "CW",
    Hybrid_ColorlessBlue = "CU",
    Hybrid_ColorlessBlack = "CB",
    Hybrid_ColorlessRed = "CR",
    Hybrid_ColorlessGreen = "CG",
    
    //Phyrexian mana symbols
    Phyrexian_White = "WP",
    Phyrexian_Blue = "UP",
    Phyrexian_Black = "BP",
    Phyrexian_Red = "RP",
    Phyrexian_Green = "GP",

    //hybrid Phyrexian symbols
    Hybrid_Phyrexian_WhiteBlue = "WUP",
    Hybrid_Phyrexian_WhiteBlack = "WBP",
    Hybrid_Phyrexian_BlueBlack = "UBP",
    Hybrid_Phyrexian_BlueRed = "URP",
    Hybrid_Phyrexian_BlackRed = "BRP",
    Hybrid_Phyrexian_BlackGreen = "BGP",
    Hybrid_Phyrexian_RedGreen = "RGP",
    Hybrid_Phyrexian_RedWhite = "RWP",
    Hybrid_Phyrexian_GreenWhite = "GWP",
    Hybrid_Phyrexian_GreenBlue = "GUP",

}