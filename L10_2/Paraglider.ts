namespace L010_2 {
  export class Paraglider {
    position: Vector;
    velocity: Vector;
    activity: string;
    size: Vector;

    constructor(_position: Vector) {
      this.position = _position;
      this.velocity = new Vector(0, 0);
      this.activity = "fly";
      this.size = new Vector(50, 100);
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

    fly(_timeslice: number): void {

      let destination = new Vector(700, 590);
      let direction = new Vector(destination.x - this.position.x, destination.y - this.position.y);

      // Aktualisiere die Position basierend auf der Geschwindigkeit und der Zeit
      this.position.add(new Vector(this.velocity.x * _timeslice, this.velocity.y * _timeslice));

      // Normalisiere die Richtung
      const length = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
      direction.scale(1 / length);

      // Aktualisiere die Geschwindigkeit basierend auf der Richtung
      const speed = 100;
      this.velocity.set(direction.x * speed, direction.y * speed);

      // Zeichne den Paraglider
      this.draw();

      // Überprüft, ob die y-Position größer als die Bodenhöhe ist
      const yGround = 590;
      if (this.position.y > yGround) {
        this.activity = "walk";
      }
    }


    walk(_timeslice: number): void {
      //Paraglider läuft zum Berg
    }

    climb(_timeslice: number): void {
      //Paraglider klettert den Berg hoch 
    }

  }
}