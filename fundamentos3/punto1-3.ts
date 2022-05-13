import { Mobile } from '../fundamentos2/punto1';


export class MobileLibrary {
    private name: string;
    private location: string;
    private mobiles: Mobile[];
    private totalPrice: number;

    constructor( name: string, location: string, mobiles: Mobile[] ){
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
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
}