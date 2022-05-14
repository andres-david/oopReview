export class Punto{
    private x: number;
    private y: number;

    constructor( x: number, y: number ){
        this.x = x;
        this.y = y;
    }

    getX(): number{
        return this.x;
    }

    getY(): number{
        return this.y;
    }

    setX( x: number): void{
        this.x = x;
    }

    setY( y: number): void{
        this.y = y;
    }

    toString(): string{
        return `(${this.x},${this.y})`;
    }

    distanciaAlOrigen(): number{
        let result: number = Math.sqrt( ( ( this.x - 0 )** 2 + ( this.y - 0 )** 2 ) );
        return Number( result.toFixed(2) );
    }

    calcularDistancia( punto: Punto ): number{

        let distancia: number = Math.sqrt( ( ( this.x - punto.getX() )** 2 + ( this.y - punto.getY() )** 2 ) );
        return Number( distancia.toFixed(2) );

    }

    calcularCuadrante(): number{

        let cuadrante = 0;

        if( this.x >= 0 && this.y > 0 ){
            cuadrante = 1;
        }
        else if( this.x < 0 && this.y > 0 ){
            cuadrante = 2;
        }
        else if( this.x < 0 && this.y < 0 ){
            cuadrante = 3;
        }
        else if( this.x > 0 && this.y < 0 ){
            cuadrante = 4;
        }

        return cuadrante;
        
    }

    calcularMasCercano( puntos: Punto[] ): Punto{

        let punto: Punto = puntos[1];

        for( let i = 0; i < puntos.length; i++ ){
             
            if( puntos[i].distanciaAlOrigen() < punto.distanciaAlOrigen() ){
                punto = puntos[i];
            }

        }

        return punto;

    }

} 