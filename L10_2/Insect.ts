namespace L010_2 {
  
  export class Insect extends flyingObjects {

    constructor(_position: Vector) {
      super(_position);
      this.velocity = new Vector(0, 0);
      this.size = new Vector(10, 40);
  }
  
    draw(): void {
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

    doActivity(): void {
      let directionX = Math.random() * 2 - 1; 
      let directionY = Math.random() * 2 - 1; 
      let speed = Math.random() * 2 + 0.5; 

      let stepX = directionX * speed;
      let stepY = directionY * speed;

      this.position.x += stepX;
      this.position.y += stepY;

      this.draw();
    }
  }
}