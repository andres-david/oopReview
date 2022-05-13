import { Mobile } from '../fundamentos2/punto1';


export class MobileLibrary {
    private name: string;
    private location: string;
    private mobiles: Mobile[];
    private totalPrice: number;

    private totalPriceCalculation = ( mobiles: Mobile[] ): number =>{

        let total: number = 0;
    
        for( let i = 0; i < mobiles.length; i++ ){
            total += mobiles[i]['price'];
        }
        return total;
    }


    constructor( name: string, location: string, mobiles: Mobile[] ){
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation( this.mobiles )
    }

    getName(): string{
        return this.name;
    }

    getLocation(): string{
        return this.location;
    }

    getMobiles(): Mobile[]{
        return this.mobiles;
    }

    getTotalPrice(): number{
        return this.totalPrice;
    }

    setName( name: string ): void{
        this.name = name;
    }

    setLocation( location: string ): void{
        this.location = location;
    }

    setMobiles( mobiles: Mobile[] ): void{
        this.mobiles = mobiles;
    }

    setTotalPrice( totalPrice: number ): void{
        this.totalPrice = totalPrice;
    }

    printLibrary(): void{

        console.log(`This are all my mobiles`);

        for( let i = 0; i < this.mobiles.length; i++ ){

            console.log(`The characteristics of the mobile ${this.mobiles[i]['model']}
                            Name: ${this.mobiles[i].getName()}
                            Model: ${this.mobiles[i].getModel()}
                            Trade Mark: ${this.mobiles[i].getTradeMark()}                
                            SD Size (GB): ${this.mobiles[i].getSdSize()}
                            Color: ${this.mobiles[i].getColor()}
                            Is 5G: ${this.mobiles[i].getIs5G()}
                            Number of Cameras: ${this.mobiles[i].getCameraNumber()}
            `)

        }

        console.log(`Price overall: ${this.totalPrice}`);
        
    }


}