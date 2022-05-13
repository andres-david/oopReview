import { Mobile } from './punto1';


export let nokia3210: Mobile = new Mobile( 'Nokia', 'Nokia3210', 'Nokia', 228, 'Gris', true, 1, 120 );

export let iPhone3G: Mobile = new Mobile( 'iPhone', 'iPhone3G', 'iPhone', 450, 'Azul', false, 6, 500 );

export let samsungGalaxy10: Mobile = new Mobile( 'Samsung', 'SamsungGalaxy10', 'Samsung', 1200, 'verde', true, 4, 600 );


console.log( nokia3210 );
console.log( iPhone3G );
console.log( samsungGalaxy10 );


nokia3210.setIs5G( true );
nokia3210.setCameraNumber( 4 );


for( let value in nokia3210 ){

    console.log( nokia3210[value] );

}

for( let value in iPhone3G ){

    console.log( iPhone3G[value] );

}

for( let value in samsungGalaxy10 ){

    console.log( samsungGalaxy10[value] );

}