var L010_2;
(function (L010_2) {
    class Insect extends L010_2.flyingObjects {
        constructor(_position) {
            super(_position);
            this.velocity = new L010_2.Vector(0, 0);
            this.size = new L010_2.Vector(10, 40);
        }
        draw() {
            L010_2.crc2.save();
            L010_2.crc2.translate(this.position.x, this.position.y);
            // Körper des Insekts
            L010_2.crc2.beginPath();
            L010_2.crc2.arc(0, 0, this.size / 6, 0, 2 * Math.PI); // Kreis als Körper
            L010_2.crc2.fillStyle = "#fcca27"; // Farbe des Körpers
            L010_2.crc2.fill();
            L010_2.crc2.closePath();
            // Kopf des Insekts
            L010_2.crc2.beginPath();
            L010_2.crc2.arc(0, -this.size / 6, this.size / 8, 0, 2 * Math.PI);
            L010_2.crc2.fillStyle = "black";
            L010_2.crc2.fill();
            L010_2.crc2.closePath();
            // Flügel des Insekts
            L010_2.crc2.beginPath();
            L010_2.crc2.moveTo(this.size / 6, 0);
            L010_2.crc2.lineTo(this.size / 3, -this.size / 10);
            L010_2.crc2.lineTo(this.size / 6, -this.size / 10);
            L010_2.crc2.fillStyle = "#fcca27";
            L010_2.crc2.fill();
            L010_2.crc2.closePath();
            L010_2.crc2.restore();
        }
        doActivity() {
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
    L010_2.Insect = Insect;
})(L010_2 || (L010_2 = {}));
/*Aufgabe: L10.2
Name: Kim Langer
Matrikelnummer: 272232
Quellen: -

Anmerkungen:
-
*/
var L010_2;
/*Aufgabe: L10.2
Name: Kim Langer
Matrikelnummer: 272232
Quellen: -

Anmerkungen:
-
*/
(function (L010_2) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let backgroundCanvas;
    let backgroundContext;
    function handleLoad(_event) {
        canvas = document.querySelector('canvas#front');
        L010_2.crc2 = canvas.getContext('2d');
        // Hintergrund mit statischen Objekten auf ein anderes Canvas speichern
        backgroundCanvas = document.querySelector('canvas#back');
        backgroundCanvas.width = canvas.width;
        backgroundCanvas.height = canvas.height;
        backgroundContext = backgroundCanvas.getContext("2d");
        drawBackground(backgroundContext);
        drawSun(backgroundContext, { x: 1100, y: 75 });
        drawClouds(backgroundContext, { x: 500, y: 100 }, { x: 200, y: 200 });
        let mountainsHeight = L010_2.crc2.canvas.height * horizon;
        drawMountains(backgroundContext, { x: 0, y: mountainsHeight }, 100, 230, "grey", "white");
        drawKiosk(backgroundContext, { x: 950, y: 560 }, { x: 100, y: 100 });
        drawLandingPlace(backgroundContext, { x: 700, y: 590 }, { x: 140, y: 100 });
        drawHotAirBalloon(backgroundContext, { x: 800, y: 280 }, 60, 50, 10);
        drawActivityMountain(backgroundContext);
        function draw() {
            L010_2.crc2.fillStyle = "#00000000";
            L010_2.crc2.clearRect(0, 0, L010_2.crc2.canvas.width, L010_2.crc2.canvas.height);
        }
        draw();
        // Array für Superklasse
        let objects = [];
        // Erstellen eines Paragliders und Hinzufügen zum Array
        let paragliderPosition = new L010_2.Vector(100, 100);
        let paraglider = new L010_2.Paraglider(paragliderPosition);
        objects.push(paraglider);
        for (let people of objects) {
            people.doActivity();
        }
        // dasselbe für die Insekten
        for (let insect of objects)
            insect.doActivity();
    }
    //Hintergrund definieren//
    let horizon = 0.62;
    function drawBackground(crc2) {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(horizon - 0.001, "white");
        gradient.addColorStop(horizon, "#53753C");
        gradient.addColorStop(1, "#53753C");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(crc2, _position) {
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
    function drawClouds(crc2, _position, _size) {
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
    function drawMountains(crc2, _position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 40;
        let stepMax = 80;
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
        gradient.addColorStop(1, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    ;
    function drawKiosk(crc2, position, size) {
        crc2.save();
        crc2.translate(position.x, position.y);
        // Dach 
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(size.x / 2, -size.y / 2);
        crc2.lineTo(size.x, 0);
        crc2.closePath();
        crc2.fillStyle = "#d97315";
        crc2.fill();
        // Wand 
        crc2.beginPath();
        crc2.rect(0, 0, size.x, size.y);
        crc2.fillStyle = "#f3decd";
        crc2.fill();
        // Fenster 
        crc2.beginPath();
        crc2.rect(size.x * 0.1, size.y * 0.2, size.x * 0.6, size.y * 0.4);
        crc2.fillStyle = "#2c3e50";
        crc2.fill();
        crc2.restore();
    }
    function drawLandingPlace(crc2, position, size) {
        crc2.save();
        crc2.translate(position.x, position.y);
        crc2.beginPath();
        crc2.ellipse(0, 0, size.x, size.y / 2, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#68924b";
        crc2.fill();
        crc2.restore();
    }
    function drawHotAirBalloon(crc2, _position, _balloonRadius, _basketWidth, _basketHeight) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        // Korb 
        crc2.beginPath();
        crc2.moveTo(-_basketWidth / 2, _balloonRadius);
        crc2.lineTo(-_basketWidth / 2, _balloonRadius + _basketHeight);
        crc2.arcTo(-_basketWidth / 2, _balloonRadius + _basketHeight + _basketWidth / 2, _basketWidth / 2, _balloonRadius + _basketHeight + _basketWidth / 2, 10);
        crc2.arcTo(_basketWidth / 2, _balloonRadius + _basketHeight + _basketWidth / 2, _basketWidth / 2, _balloonRadius + _basketHeight, 10);
        crc2.lineTo(_basketWidth / 2, _balloonRadius);
        crc2.closePath();
        crc2.fillStyle = "#754c24";
        crc2.fill();
        // Ballon zeichnen
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, _balloonRadius);
        gradient.addColorStop(0, "orange");
        gradient.addColorStop(0.5, "darkred");
        gradient.addColorStop(1, "beige");
        crc2.beginPath();
        crc2.arc(0, 0, _balloonRadius, 0, 2 * Math.PI);
        crc2.fillStyle = gradient;
        crc2.fill();
        // Linien zwischen Korb und Ballon
        crc2.beginPath();
        crc2.moveTo(-_basketWidth / 2, _balloonRadius);
        crc2.lineTo(0, 0);
        crc2.lineTo(_basketWidth / 2, _balloonRadius);
        crc2.strokeStyle = "#595959";
        crc2.lineWidth = 1;
        crc2.stroke();
        crc2.restore();
    }
    function drawActivityMountain(crc2) {
        crc2.beginPath();
        crc2.moveTo(0, 550);
        crc2.lineTo(500, 550);
        crc2.lineTo(0, 250);
        crc2.fillStyle = "#838383";
        crc2.fill();
    }
})(L010_2 || (L010_2 = {}));
var L010_2;
(function (L010_2) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    L010_2.Vector = Vector;
})(L010_2 || (L010_2 = {}));
var L010_2;
(function (L010_2) {
    class flyingObjects {
        position;
        velocity;
        size;
        constructor(_position) {
            this.position = _position;
            this.velocity = new L010_2.Vector(0, 0);
            this.size = new L010_2.Vector(50, 100);
        }
    }
    L010_2.flyingObjects = flyingObjects;
    draw();
    void {
    //Zeichnen (was kommt hier rein?)
    };
    doActivity();
    void {
    // Aktivität (was kommt hier rein?)
    };
})(L010_2 || (L010_2 = {}));
var L010_2;
(function (L010_2) {
    class Paraglider extends L010_2.flyingObjects {
        activity;
        constructor(_position) {
            super(_position);
            this.velocity = new L010_2.Vector(0, 0);
            this.size = new L010_2.Vector(50, 100);
            this.activity = "fly";
        }
        draw() {
            L010_2.crc2.save();
            L010_2.crc2.translate(this.position.x, this.position.y);
            // Körper
            L010_2.crc2.beginPath();
            L010_2.crc2.arc(0, 0, this.size.x / 4, 0, 2 * Math.PI);
            L010_2.crc2.fillStyle = "brown";
            L010_2.crc2.fill();
            L010_2.crc2.closePath();
            // Kopf
            L010_2.crc2.beginPath();
            L010_2.crc2.arc(0, -this.size.x / 4, this.size.x / 8, 0, 2 * Math.PI);
            L010_2.crc2.fillStyle = "bisque";
            L010_2.crc2.fill();
            L010_2.crc2.closePath();
            // Seile
            const ropeLength = this.size.y / 3;
            const ropeOffset = this.size.x / 5;
            L010_2.crc2.beginPath();
            L010_2.crc2.moveTo(-ropeOffset, 0);
            L010_2.crc2.lineTo(-ropeOffset * 1.2, -ropeLength);
            L010_2.crc2.strokeStyle = "black";
            L010_2.crc2.stroke();
            L010_2.crc2.closePath();
            L010_2.crc2.beginPath();
            L010_2.crc2.moveTo(ropeOffset, 0);
            L010_2.crc2.lineTo(ropeOffset * 1.2, -ropeLength);
            L010_2.crc2.strokeStyle = "black";
            L010_2.crc2.stroke();
            L010_2.crc2.closePath();
            L010_2.crc2.beginPath();
            L010_2.crc2.arc(0, -ropeLength, this.size.x / 4, Math.PI, 2 * Math.PI);
            L010_2.crc2.fillStyle = "lightblue";
            L010_2.crc2.fill();
            L010_2.crc2.closePath();
            L010_2.crc2.restore();
        }
        //Paraglider fliegt los
        doActivity(_timeslice) {
            const destination = new L010_2.Vector(700, 590);
            const direction = new L010_2.Vector(destination.x - this.position.x, destination.y - this.position.y);
            this.position.add(new L010_2.Vector(this.velocity.x * _timeslice, this.velocity.y * _timeslice));
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
    L010_2.Paraglider = Paraglider;
    class Walker extends Paraglider {
        constructor(_position) {
            super(_position);
            this.velocity = new L010_2.Vector(0, 0);
            this.size = new L010_2.Vector(50, 100);
            this.activity = "walk";
        }
        draw() {
            L010_2.crc2.save();
            L010_2.crc2.translate(this.position.x, this.position.y);
            // Körper
            L010_2.crc2.beginPath();
            L010_2.crc2.arc(0, 0, this.size.x / 4, 0, 2 * Math.PI);
            L010_2.crc2.fillStyle = "brown";
            L010_2.crc2.fill();
            L010_2.crc2.closePath();
            // Kopf
            L010_2.crc2.beginPath();
            L010_2.crc2.arc(0, -this.size.x / 4, this.size.x / 8, 0, 2 * Math.PI);
            L010_2.crc2.fillStyle = "bisque";
            L010_2.crc2.fill();
            L010_2.crc2.closePath();
            L010_2.crc2.restore();
        }
        doActivity(_timeslice) {
            const destination = new L010_2.Vector(this.position.x, 100);
            const direction = new L010_2.Vector(destination.x - this.position.x, destination.y - this.position.y);
            this.position.add(new L010_2.Vector(this.velocity.x * _timeslice, this.velocity.y * _timeslice));
            const length = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
            direction.scale(1 / length);
            const speed = 50;
            this.velocity.set(direction.x * speed, direction.y * speed);
            this.draw();
            // Überprüft, ob die y-Position kleiner als 100 ist
            if (this.position.y < 100) {
                this.activity = "climb";
            }
        }
    }
    L010_2.Walker = Walker;
    class Climber extends Paraglider {
        constructor(_position) {
            super(_position);
            this.velocity = new L010_2.Vector(0, 0);
            this.size = new L010_2.Vector(50, 100);
            this.activity = "climb";
        }
        draw() {
            L010_2.crc2.save();
            L010_2.crc2.translate(this.position.x, this.position.y);
            // Körper
            L010_2.crc2.beginPath();
            L010_2.crc2.arc(0, 0, this.size.x / 4, 0, 2 * Math.PI);
            L010_2.crc2.fillStyle = "brown";
            L010_2.crc2.fill();
            L010_2.crc2.closePath();
            // Kopf
            L010_2.crc2.beginPath();
            L010_2.crc2.arc(0, -this.size.x / 4, this.size.x / 8, 0, 2 * Math.PI);
            L010_2.crc2.fillStyle = "bisque";
            L010_2.crc2.fill();
            L010_2.crc2.closePath();
            L010_2.crc2.restore();
        }
        doActivity(_timeslice) {
            const destination = new L010_2.Vector(100, 200);
            const direction = new L010_2.Vector(destination.x - this.position.x, destination.y - this.position.y);
            this.position.add(new L010_2.Vector(this.velocity.x * _timeslice, this.velocity.y * _timeslice));
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
    L010_2.Climber = Climber;
})(L010_2 || (L010_2 = {}));
//# sourceMappingURL=Compiled.js.map