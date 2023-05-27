"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Aufgabe: L09.2
Name: Kim Langer
Matrikelnummer: 272232
Quellen:
*/
var L09_2;
(function (L09_2) {
    window.addEventListener("load", handleLoad);
    L09_2.canvas = document.querySelector('canvas');
    L09_2.crc2 = L09_2.canvas.getContext('2d');
    function handleLoad(_event) {
        drawBackground();
        drawSun({ x: 1100, y: 75 });
        drawClouds({ x: 500, y: 100 }, { x: 200, y: 200 });
        let moutainsheight = L09_2.crc2.canvas.height * horizon;
        drawMountains({ x: 0, y: moutainsheight }, 100, 230, "grey", "white");
        drawKiosk({ x: 950, y: 560 }, { x: 100, y: 100 });
        drawLandingPlace({ x: 700, y: 590 }, { x: 140, y: 100 });
        drawHotAirBalloon({ x: 800, y: 280 }, 60, 50, 10);
        drawHotAirBalloon({ x: 400, y: 200 }, 60, 50, 10);
        drawActivityMountain();
        drawFigure({ x: 400, y: 500 }, { x: 100, y: 180 });
    }
    //Hintergrund definieren//
    let horizon = 0.62;
    function drawBackground() {
        let gradient = L09_2.crc2.createLinearGradient(0, 0, 0, L09_2.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(horizon - 0.001, "white");
        gradient.addColorStop(horizon, "#53753C");
        gradient.addColorStop(1, "#53753C");
        L09_2.crc2.fillStyle = gradient;
        L09_2.crc2.fillRect(0, 0, L09_2.crc2.canvas.width, L09_2.crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 120;
        let gradient = L09_2.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "#FFEFA1");
        gradient.addColorStop(1, "HSLA(60, 100%, 70%, 0");
        L09_2.crc2.save();
        L09_2.crc2.translate(_position.x, _position.y);
        L09_2.crc2.fillStyle = gradient;
        L09_2.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_2.crc2.fill();
        L09_2.crc2.restore();
    }
    //Anmerkung: Wolken nicht im Bild sichtbar//
    function drawClouds(_position, _size) {
        let nParticles = 200;
        let radiusParticle = 23;
        let particle = new Path2D();
        let gradient = L09_2.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L09_2.crc2.save();
        L09_2.crc2.translate(_position.x, _position.y);
        L09_2.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L09_2.crc2.translate(x, y);
            L09_2.crc2.fill(particle);
            L09_2.crc2.setTransform(1, 0, 0, 1, 0, 0);
        }
        L09_2.crc2.restore();
    }
    let posMountains = { x: 50, y: horizon };
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 40;
        let stepMax = 80;
        let x = 0;
        L09_2.crc2.save();
        L09_2.crc2.translate(_position.x, _position.y);
        L09_2.crc2.beginPath();
        L09_2.crc2.moveTo(0, 0);
        L09_2.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09_2.crc2.lineTo(x, y);
        } while (x < L09_2.crc2.canvas.width);
        L09_2.crc2.lineTo(x, 0);
        L09_2.crc2.closePath();
        let gradient = L09_2.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(1, _colorHigh);
        L09_2.crc2.fillStyle = gradient;
        L09_2.crc2.fill();
        L09_2.crc2.restore();
    }
    ;
    function drawKiosk(position, size) {
        L09_2.crc2.save();
        L09_2.crc2.translate(position.x, position.y);
        // Dach 
        L09_2.crc2.beginPath();
        L09_2.crc2.moveTo(0, 0);
        L09_2.crc2.lineTo(size.x / 2, -size.y / 2);
        L09_2.crc2.lineTo(size.x, 0);
        L09_2.crc2.closePath();
        L09_2.crc2.fillStyle = "#d97315";
        L09_2.crc2.fill();
        // Wand 
        L09_2.crc2.beginPath();
        L09_2.crc2.rect(0, 0, size.x, size.y);
        L09_2.crc2.fillStyle = "#f3decd";
        L09_2.crc2.fill();
        // Fenster 
        L09_2.crc2.beginPath();
        L09_2.crc2.rect(size.x * 0.1, size.y * 0.2, size.x * 0.6, size.y * 0.4);
        L09_2.crc2.fillStyle = "#2c3e50";
        L09_2.crc2.fill();
        L09_2.crc2.restore();
    }
    function drawLandingPlace(position, size) {
        L09_2.crc2.save();
        L09_2.crc2.translate(position.x, position.y);
        L09_2.crc2.beginPath();
        L09_2.crc2.ellipse(0, 0, size.x, size.y / 2, 0, 0, 2 * Math.PI);
        L09_2.crc2.closePath();
        L09_2.crc2.fillStyle = "#68924b";
        L09_2.crc2.fill();
        L09_2.crc2.restore();
    }
    function drawHotAirBalloon(_position, _balloonRadius, _basketWidth, _basketHeight) {
        L09_2.crc2.save();
        L09_2.crc2.translate(_position.x, _position.y);
        // Korb 
        L09_2.crc2.beginPath();
        L09_2.crc2.moveTo(-_basketWidth / 2, _balloonRadius);
        L09_2.crc2.lineTo(-_basketWidth / 2, _balloonRadius + _basketHeight);
        L09_2.crc2.arcTo(-_basketWidth / 2, _balloonRadius + _basketHeight + _basketWidth / 2, _basketWidth / 2, _balloonRadius + _basketHeight + _basketWidth / 2, 10);
        L09_2.crc2.arcTo(_basketWidth / 2, _balloonRadius + _basketHeight + _basketWidth / 2, _basketWidth / 2, _balloonRadius + _basketHeight, 10);
        L09_2.crc2.lineTo(_basketWidth / 2, _balloonRadius);
        L09_2.crc2.closePath();
        L09_2.crc2.fillStyle = "#754c24";
        L09_2.crc2.fill();
        // Ballon zeichnen
        let gradient = L09_2.crc2.createRadialGradient(0, 0, 0, 0, 0, _balloonRadius);
        gradient.addColorStop(0, "orange");
        gradient.addColorStop(0.5, "darkred");
        gradient.addColorStop(1, "beige");
        L09_2.crc2.beginPath();
        L09_2.crc2.arc(0, 0, _balloonRadius, 0, 2 * Math.PI);
        L09_2.crc2.fillStyle = gradient;
        L09_2.crc2.fill();
        // Linien zwischen Korb und Ballon
        L09_2.crc2.beginPath();
        L09_2.crc2.moveTo(-_basketWidth / 2, _balloonRadius);
        L09_2.crc2.lineTo(0, 0);
        L09_2.crc2.lineTo(_basketWidth / 2, _balloonRadius);
        L09_2.crc2.strokeStyle = "#595959";
        L09_2.crc2.lineWidth = 1;
        L09_2.crc2.stroke();
        L09_2.crc2.restore();
    }
    function drawActivityMountain() {
        L09_2.crc2.beginPath();
        L09_2.crc2.moveTo(0, 550);
        L09_2.crc2.lineTo(500, 550);
        L09_2.crc2.lineTo(0, 250);
        L09_2.crc2.fillStyle = "#838383";
        L09_2.crc2.fill();
    }
    function drawFigure(position, size) {
        L09_2.crc2.save();
        L09_2.crc2.translate(position.x, position.y);
        // Körper
        L09_2.crc2.beginPath();
        L09_2.crc2.arc(0, 0, size.x / 4, 0, 2 * Math.PI); // Beispiel für einen Kreis als Körper
        L09_2.crc2.fillStyle = "brown"; // Farbe des Körpers
        L09_2.crc2.fill();
        L09_2.crc2.closePath();
        // Kopf
        L09_2.crc2.beginPath();
        L09_2.crc2.arc(0, -size.x / 4, size.x / 8, 0, 2 * Math.PI); // Beispiel für einen Kreis als Kopf
        L09_2.crc2.fillStyle = "bisque"; // Farbe des Kopfes
        L09_2.crc2.fill();
        L09_2.crc2.closePath();
        // Seile
        const ropeLength = size.y / 3;
        const ropeOffset = size.x / 5;
        L09_2.crc2.beginPath();
        L09_2.crc2.moveTo(-ropeOffset, 0);
        L09_2.crc2.lineTo(-ropeOffset * 1.2, -ropeLength);
        L09_2.crc2.strokeStyle = "black";
        L09_2.crc2.stroke();
        L09_2.crc2.closePath();
        L09_2.crc2.beginPath();
        L09_2.crc2.moveTo(ropeOffset, 0);
        L09_2.crc2.lineTo(ropeOffset * 1.2, -ropeLength);
        L09_2.crc2.strokeStyle = "black";
        L09_2.crc2.stroke();
        L09_2.crc2.closePath();
        L09_2.crc2.beginPath();
        L09_2.crc2.arc(0, -ropeLength, size.x / 4, Math.PI, 2 * Math.PI);
        L09_2.crc2.fillStyle = "lightblue";
        L09_2.crc2.fill();
        L09_2.crc2.closePath();
        L09_2.crc2.restore();
    }
})(L09_2 || (L09_2 = {}));
//# sourceMappingURL=luftfahrt.js.map