/*Aufgabe: L08.2
Name: Kim Langer
Matrikelnummer: 272232
Quellen: Jirkas Inverted Classroom, ChatGPT
*/
var L08_2;
(function (L08_2) {
    window.addEventListener("load", handleLoad);
    let canvas = document.querySelector('canvas');
    let crc2 = canvas.getContext('2d');
    function handleLoad(_event) {
        drawBackground();
        drawSun({ x: 1100, y: 75 });
        drawClouds({ x: 500, y: 100 }, { x: 200, y: 200 });
        drawMountains(posMountains, 50, 110, "grey", "lightgrey");
        drawPerson({ x: 100, y: 600 }); // Eine Person an Position (100, 200)
    }
    //Hintergrund definieren//
    let horizon = 0.62;
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(horizon - 0.001, "white");
        gradient.addColorStop(horizon, "darkgreen");
        gradient.addColorStop(1, "darkgreen");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 120;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
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
    function drawClouds(_position, _size) {
        let nParticles = 200;
        let radiusParticle = 23;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.setTransform(1, 0, 0, 1, 0, 0);
        }
        crc2.restore();
    }
    let posMountains = { x: 50, y: horizon };
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 30;
        let stepMax = 100;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.75, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    ;
    function drawPerson(_position) {
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
        crc2.fillStyle = "bisque";
        crc2.ellipse(0, bodyHeight / 2 - headRadius, bodyWidth, bodyHeight, 0, 0, Math.PI * 1.5);
        crc2.closePath(); // Eine Linie zum Schließen der Ellipse hinzufügen
        crc2.fill();
        // Lokales Koordinatensystem wiederherstellen
        crc2.restore();
    }
})(L08_2 || (L08_2 = {}));
//# sourceMappingURL=luftfahrt.js.map