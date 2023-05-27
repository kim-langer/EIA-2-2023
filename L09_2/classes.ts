namespace L09_2 {

    export class Paraglider {
        position: Vector;
        velocity: Vector;
        activity: string;

        constructor(position) {
          
        }

        draw(): void {
           
        }

        fly(_timesclie: number): void {
        
        }
        walk(_timesclie: number): void {
        
        }

        climb(_timesclie: number): void {
        
        }
    }


    export class HotAirBalloon {
        position: Vector;
        velocity: Vector;
        activity: string;

        constructor(position) {
          
        }

        draw(): void {
           
        }

        start(_timesclie: number): void {
        
        }
       fly(_timesclie: number): void {
        
        }

    }

    }


export class Vector {
    x: number;
    y: number;

    scale(factor: number): Vector {
        this.x *= factor;
        this.y *= factor;
        return this;
    }

    add(addend: Vector): Vector {
        this.x += addend.x;
        this.y += addend.y;
        return this;
    }
}

export class Insect {
    position: Vector;
    velocity: Vector;
    size: number;

    constructor(position: Vector, size: number) {
        this.position = position;
        this.velocity = new Vector(); 
        this.size = size;
    }

    draw(crc2: CanvasRenderingContext2D): void {
        crc2.save();
        crc2.translate(this.position.x, this.position.y);

        // Körper des Insekts
        crc2.beginPath();
        crc2.arc(0, 0, this.size / 6, 0, 2 * Math.PI); // Kreis als Körper
        crc2.fillStyle = "#fcca27"; // Farbe des Körpers
        crc2.fill();
        crc2.closePath();

        // Kopf des Insekts
        crc2.beginPath();
        crc2.arc(0, -this.size / 6, this.size / 8, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();

        // Flügel des Insekts
        crc2.beginPath();
        crc2.moveTo(this.size / 6, 0);
        crc2.lineTo(this.size / 3, -this.size / 10);
        crc2.lineTo(this.size / 6, -this.size / 10);
        crc2.fillStyle = "#fcca27";
        crc2.fill();
        crc2.closePath();

        crc2.restore();
    }

    fly(timeslice: number): void {
        this.position.x += this.velocity.x * timeslice;
        this.position.y += this.velocity.y * timeslice;
    }
}
    
