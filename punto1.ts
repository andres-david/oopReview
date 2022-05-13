

export class Mobile {

    private name        : string;
    private model       : string;
    private tradeMark   : string;
    private sdSize      : string;
    private color       : string;
    private is5G        : boolean;
    private cameraNumber: number;
    private price       : number;

    constructor(name: string, model: string, tradeMark: string, sdSize: string, color: string, is5G: boolean, cameraNumber: number, price: number ){
        this.name         = name;
        this.model        = model;
        this.tradeMark    = tradeMark;
        this.sdSize       = sdSize;
        this.color        = color;
        this.is5G         = is5G;
        this.cameraNumber = cameraNumber;
        this.price        = price;
    }

    getName( ): string{
        return this.name;
    }

    getModel( ): string{
        return this.model;
    }

    getTradeMark( ): string{
        return this.tradeMark;
    }

    getSdSize( ): string{
        return this.sdSize;
    }

    getColor( ): string{
        return this.color;
    }

    getIs5G( ): boolean{
        return this.is5G;
    }

    getCameraNumber( ): number{
        return this.cameraNumber;
    }

    getPrice( ): number{
        return this.price;
    }

    setName( name: string ): void{
        this.name = name;
    }

    setModel( model: string ): void{
        this.model = model;
    }

    setTradeMark( tradeMark: string ): void{
        this.tradeMark = tradeMark;
    }

    setSdSize( sdSize: string ): void{
        this.sdSize = sdSize;
    }

    setColor( color: string ): void{
        this.color = color;
    }

    setIs5G( is5G: boolean ): void{
        this.is5G = is5G;
    }

    setCameraNumber( cameraNumber: number ): void{
        this.cameraNumber = cameraNumber;
    }

    setPrice( price: number ): void{
        this.price = price;
    }

}