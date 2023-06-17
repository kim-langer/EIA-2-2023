namespace L010_2 {

    export class Paraglider extends flyingObjects {
        
        activity: string;

        constructor(_position: Vector) {
            super(_position);
            this.velocity = new Vector(0, 0);
            this.size = new Vector(50, 100);
            this.activity = "fly";
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            // Körper
            crc2.beginPath();
            crc2.arc(0, 0, this.size.x / 4, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();

            // Kopf
            crc2.beginPath();
            crc2.arc(0, -this.size.x / 4, this.size.x / 8, 0, 2 * Math.PI);
            crc2.fillStyle = "bisque";
            crc2.fill();
            crc2.closePath();

            // Seile
            const ropeLength = this.size.y / 3;
            const ropeOffset = this.size.x / 5;

            crc2.beginPath();
            crc2.moveTo(-ropeOffset, 0);
            crc2.lineTo(-ropeOffset * 1.2, -ropeLength);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(ropeOffset, 0);
            crc2.lineTo(ropeOffset * 1.2, -ropeLength);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();


            crc2.beginPath();
            crc2.arc(0, -ropeLength, this.size.x / 4, Math.PI, 2 * Math.PI);
            crc2.fillStyle = "lightblue";
            crc2.fill();
            crc2.closePath();

            crc2.restore();
        }

        //Paraglider fliegt los
        doActivity(_timeslice: number): void {
            const destination = new Vector(700, 590);
            const direction = new Vector(destination.x - this.position.x, destination.y - this.position.y);

            this.position.add(new Vector(this.velocity.x * _timeslice, this.velocity.y * _timeslice));

            const length = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
            direction.scale(1 / length);

            const speed = 100;
            this.velocity.set(direction.x * speed, direction.y * speed);

            this.draw();

            const yGround = 590;
            if (this.position.y > yGround) {
                this.activity = "walk";
            }
        }


    }

    export class Walker extends Paraglider {
        constructor(_position: Vector) {
            super(_position);
            this.velocity = new Vector(0, 0);
            this.size = new Vector(50, 100);
            this.activity = "walk"
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            // Körper
            crc2.beginPath();
            crc2.arc(0, 0, this.size.x / 4, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();

            // Kopf
            crc2.beginPath();
            crc2.arc(0, -this.size.x / 4, this.size.x / 8, 0, 2 * Math.PI);
            crc2.fillStyle = "bisque";
            crc2.fill();
            crc2.closePath();

            crc2.restore();
        }

        doActivity(_timeslice: number): void {
            const destination = new Vector(this.position.x, 100);
            const direction = new Vector(destination.x - this.position.x, destination.y - this.position.y);

            this.position.add(new Vector(this.velocity.x * _timeslice, this.velocity.y * _timeslice));

            const length = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
            direction.scale(1 / length)
      
            const speed = 50;
            this.velocity.set(direction.x * speed, direction.y * speed);

            this.draw();

            // Überprüft, ob die y-Position kleiner als 100 ist
            if (this.position.y < 100) {
                this.activity = "climb";
            }
        }
    }

    export class Climber extends Paraglider {
        constructor(_position: Vector) {
            super(_position);
            this.velocity = new Vector(0, 0);
            this.size = new Vector(50, 100);
            this.activity = "climb"
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            // Körper
            crc2.beginPath();
            crc2.arc(0, 0, this.size.x / 4, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();

            // Kopf
            crc2.beginPath();
            crc2.arc(0, -this.size.x / 4, this.size.x / 8, 0, 2 * Math.PI);
            crc2.fillStyle = "bisque";
            crc2.fill();
            crc2.closePath();

            crc2.restore();
        }

        doActivity(_timeslice: number): void {
            const destination = new Vector(100, 200);
            const direction = new Vector(destination.x - this.position.x, destination.y - this.position.y);

            this.position.add(new Vector(this.velocity.x * _timeslice, this.velocity.y * _timeslice));

            const length = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
            direction.scale(1 / length);

            const speed = 30;
            this.velocity.set(direction.x * speed, direction.y * speed);

            this.draw();

            // Berechne die Entfernung zum Ziel
            const distance = Math.sqrt(Math.pow(destination.x - this.position.x, 2) + Math.pow(destination.y - this.position.y, 2));

            if (distance < 10) {
                this.velocity.set(0, 0); // stoppt den Climber
            }
        }
    }

}
