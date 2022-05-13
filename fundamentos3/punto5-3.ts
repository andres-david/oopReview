import { Mobile } from '../fundamentos2/punto1';
import { MobileLibrary } from './punto1-3';



let samsung: Mobile = new Mobile( 'Samsung', 'Samsung A70', 'Samsung', 500, 'Azul', true, 4, 1000 );

let sony: Mobile = new Mobile( 'Sony', 'Sony Z10', 'Sony', 700, 'Blanco', true, 3, 700 );

let xiaomi: Mobile = new Mobile( 'Xiaomi', 'Xiaomi 8', 'Xiaomi', 300, 'Negro', false, 5, 600 );

let oppo: Mobile = new Mobile( 'Oppo', 'Oppo F6', 'Oppo', 250, 'Verde', true, 4, 800 );


let mobiles: Mobile[] = [ samsung, sony, xiaomi, oppo ];


let store: MobileLibrary = new MobileLibrary('Tienda de Moviles', 'Calle Atocha 23', mobiles );


/*********************      7        ******************** */


console.log( store.getName() );
console.log( store.getLocation() );
console.log( store.getMobiles() );
console.log( store.getMobiles() );
console.log( store.getTotalPrice() );


store.setName('MediaMark');
store.setLocation('Calle Sol 78');

store.printLibrary();



