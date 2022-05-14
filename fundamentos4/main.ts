import { Punto } from "./clase-punto";
import { Triangulo } from './clase-triangulo';


let coor: Punto = new Punto( 245, 368 );

// console.log( coor.getX() );
// console.log( coor.getY() );

// console.log( coor.distanciaAlOrigen() );

/**************************  Punto 8   ******************* */

let coor2: Punto = new Punto( 128, 298 );

// console.log( coor.calcularDistancia( coor2 ) );

// console.log( coor.calcularCuadrante() );

let coor3: Punto = new Punto ( 335, 442 );

let arrCoor: Punto[] = [coor2, coor3];

// console.log(coor.calcularMasCercano( arrCoor ));

/*****************************   Punto 16   ************************ */

let triangulo: Triangulo = new Triangulo( coor, coor2, coor3 );

console.log( triangulo.calcularLongitudLados() );