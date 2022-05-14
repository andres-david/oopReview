import { Punto } from './clase-punto';


export class Triangulo {
    private vertice1: Punto;
    private vertice2: Punto;
    private vertice3: Punto;

    constructor(vertice1: Punto, vertice2: Punto, vertice3: Punto){
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3; 
    }

    calcularLongitudLados(): number[]{

        let long1: number = this.vertice1.calcularDistancia( this.vertice2 );
        let long2: number = this.vertice2.calcularDistancia( this.vertice3 );
        let long3: number = this.vertice3.calcularDistancia( this.vertice1 );
        
        let longitudes: number[] = [long1, long2, long3];

        return longitudes;

    }

}