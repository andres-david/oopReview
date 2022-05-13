

export class Mobile {

    public name        : string;
    public model       : string;
    public tradeMark   : string;
    public sdSize      : string;
    public color       : string;
    public is5G        : boolean;
    public cameraNumber: number;
    public price       : number;

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


}