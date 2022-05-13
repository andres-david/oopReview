import { nokia3210, iPhone3G, samsungGalaxy10 } from './punto6';
import { Mobile } from './punto1';

let mobiles: Mobile[] = [nokia3210, iPhone3G, samsungGalaxy10];

for( let i = 0; i < mobiles.length; i++ ){

   console.log(`"The Characteristics of the mobile ${mobiles[i]['model']} are:"
                    Name: ${mobiles[i]['name']}
                    Model: ${mobiles[i]['model']}
                    Trademark: ${mobiles[i]['tradeMark']}
                    SD Size (GB): ${mobiles[i]['sdSize']}
                    Color: ${mobiles[i]['color']}
                    Is 5G: ${mobiles[i]['is5G']}
                    Number of Cameras: ${mobiles[i]['cameraNumber']}
    `);


}