/*Aufgabe: L08.2
Name: Kim Langer
Matrikelnummer: 272232
Quellen: Jirkas Inverted Classroom
*/
namespace L08_2 {

    window.addEventListener("load", handleLoad);

    let canvas = document.querySelector('canvas');
    let crc2 = canvas.getContext('2d');

    interface Vector {
        x: number;
        y: number;
    }
    function handleLoad(_event: Event): void {
        drawBackground();
        drawSun({ x: 1100, y: 75 });
        drawClouds({ x: 500, y: 100 }, { x: 200, y: 200 });
        let moutainsheight: number = crc2.canvas.height * horizon
        drawMountains({x: 0, y: moutainsheight}, 100, 230, "grey", "white");
        drawClimber({ x: 100, y: 600 }); // Eine Person an Position (100, 200)
        drawActivityMountain();
        drawKiosk({ x: 800, y: 500 }, { x: 100, y: 100 });

      }


    //Hintergrund definieren//
    let horizon: number = 0.62;
    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(horizon - 0.001, "white");
        gradient.addColorStop(horizon, "darkgreen");
        gradient.addColorStop(1, "darkgreen");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void {
        let r1: number = 30;
        let r2: number = 120;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "#FFEFA1");
        gradient.addColorStop(1, "HSLA(60, 100%, 70%, 0");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();

    }

    //Anmerkung: Wolken nicht im Bild sichtbar//
    function drawClouds(_position: Vector, _size: Vector): void {
        let nParticles: number = 200;
        let radiusParticle: number = 23;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient( 0,0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.setTransform(1, 0, 0, 1, 0, 0); 
        }
        crc2.restore();
    }


    let posMountains: Vector = { x: 50, y: horizon };
    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        let stepMin: number = 40;
        let stepMax: number = 80;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(1, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    };


    function drawActivityMountain () {
        crc2.beginPath();
        crc2.moveTo(0, 150);
        crc2.lineTo(400, 500);
        crc2.lineTo(400, 0);
        crc2.closePath();
        crc2.fillStyle = "darkbrown";
        crc2.fill();

    }

    function drawClimber(_position: Vector) {
        let headRadius = 15; // Radius des Kopfs
        let bodyWidth = 30; // Breite des Oberkörpers
        let bodyHeight = 50; // Höhe des Oberkörpers
      
        // Lokales Koordinatensystem verschieben
        crc2.save();
        crc2.translate(_position.x, _position.y);
      
        // Kopf zeichnen
        crc2.beginPath();
        crc2.fillStyle = "bisque";
        crc2.arc(0, -headRadius, headRadius, 0, Math.PI * 2, true);
        crc2.fill();
      
        // Oberkörper zeichnen
        crc2.beginPath();
        crc2.fillStyle = "#302018";
        crc2.ellipse(0, headRadius - bodyHeight / 2, bodyHeight, bodyWidth, 0, Math.PI * 1.5, Math.PI * 0.5);
        crc2.closePath(); // Eine Linie zum Schließen der Ellipse hinzufügen
        crc2.fill();
      
        // Lokales Koordinatensystem wiederherstellen
        crc2.restore();
      }
      
      function drawKiosk(position: Vector, size: Vector): void {
        // Lokales Koordinatensystem verschieben
        crc2.save();
        crc2.translate(position.x, position.y);
      
        // Dach zeichnen
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(size.x / 2, -size.y / 2);
        crc2.lineTo(size.x, 0);
        crc2.closePath();
        crc2.fillStyle = "#d97315";
        crc2.fill();
      
        // Wand zeichnen
        crc2.beginPath();
        crc2.rect(0, 0, size.x, size.y);
        crc2.fillStyle = "#f3decd";
        crc2.fill();
      
        // Fenster links zeichnen
        crc2.beginPath();
        crc2.rect(size.x * 0.1, size.y * 0.2, size.x * 0.6, size.y * 0.4);
        crc2.fillStyle = "#2c3e50";
        crc2.fill();
      
      
        // Lokales Koordinatensystem wiederherstellen
        crc2.restore();
      }
      
    
    }
    
    
    

       
    
}
      


    // function drawWindsocke(_pos.x, _pos.y) {moveTo(_pos.x, _pos.y) lineTo(_pos.x, _pos.y - 50)//*




}