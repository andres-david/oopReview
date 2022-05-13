import { Mobile } from '../fundamentos2/punto1';


export let localPriceCalculation = ( mobiles: Mobile[] ): number =>{

    let total: number = 0;

    for( let i = 0; i < mobiles.length; i++ ){

        total += mobiles[i]['price'];

    }

    return total;

}