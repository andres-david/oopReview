import { Mobile } from './punto1';


let nokia3210 = new Mobile( 'Nokia', 'Nokia3210', 'Nokia', '125MB', 'Negro', false, 2, 120 );

let iPhone3G = new Mobile( 'iPhone', 'iPhone3G', 'iPhone', '225MB', 'Blanco', false, 4, 500 );

let samsungGalaxy10 = new Mobile( 'Samsung', 'SamsungGalaxy10', 'Samsung', '300MB', 'verde', true, 5, 600 );

console.log( nokia3210 );
console.log( iPhone3G );
console.log( samsungGalaxy10 );


nokia3210.is5G         = true;
nokia3210.cameraNumber = 4;


for( let value in nokia3210 ){

    console.log( nokia3210[value] );

}
