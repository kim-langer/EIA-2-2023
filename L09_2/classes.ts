namespace L09_2 {

    export class Paraglider {
        position: Vector;
        velocity: Vector;
        activity: string;
    
        constructor(_position: Vector) {
            this.position = _position;
            this.velocity = new Vector(0, 0);
            this.activity = "fly";
        }
    
        draw(): void {
            // Implementiere die Logik zum Zeichnen des Paragliders an der aktuellen Position
            console.log("Paraglider zeichnen an Position:", this.position);
        }
    
        fly(_timeslice: number): void {
            // Implementiere die Logik für den Flug des Paragliders
    
            // Berechne die Richtung zum Ziel
            const target = new Vector(700, 590);
            const direction = new Vector(target.x - this.position.x, target.y - this.position.y);
    
            // Normalisiere die Richtung
            const length = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
            direction.scale(1 / length);
    
            // Aktualisiere die Geschwindigkeit basierend auf der Richtung
            const speed = 100; // Beispielgeschwindigkeit
            this.velocity.set(direction.x * speed, direction.y * speed);
    
            // Aktualisiere die Position basierend auf der Geschwindigkeit und der Zeit
            this.position.add(new Vector(this.velocity.x * _timeslice, this.velocity.y * _timeslice));
    
            // Zeichne den Paraglider
            this.draw();
    
            // Überprüfe, ob der Paraglider das Ziel erreicht hat
            const distanceToTarget = Math.sqrt(
                Math.pow(target.x - this.position.x, 2) + Math.pow(target.y - this.position.y, 2)
            );
            if (distanceToTarget < 5) {
                this.activity = "walk";
            }
        } }


    export class HotAirBalloon {
        position: Vector;
        velocity: Vector;
        activity: string;

        constructor(position) {
          
        }

        draw(): void {
           
        }

        start(_timeslice: number): void {
        
        }
       fly(_timeslice: number): void {
        
        }

    }

    } 

    
