var L09_2;
(function (L09_2) {
    class Paraglider {
        position;
        velocity;
        activity;
        size;
        constructor(_position) {
            this.position = _position;
            this.velocity = new L09_2.Vector(0, 0);
            this.activity = "fly";
            this.size = new L09_2.Vector(50, 100);
        }
        draw(crc2) {
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
        fly(crc2, _timeslice) {
            let destination = new L09_2.Vector(700, 590);
            let direction = new L09_2.Vector(destination.x - this.position.x, destination.y - this.position.y);
            // Aktualisiere die Position basierend auf der Geschwindigkeit und der Zeit
            this.position.add(this.velocity.scale(_timeslice));
            // Normalisiere die Richtung
            const length = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
            direction.scale(1 / length);
            // Aktualisiere die Geschwindigkeit basierend auf der Richtung
            const speed = 100;
            this.velocity.set(direction.x * speed, direction.y * speed);
            // Zeichne den Paraglider
            this.draw(crc2);
            // Überprüft, ob die y-Position größer als die Bodenhöhe ist
            const yGround = 590;
            if (this.position.y > yGround) {
                this.activity = "walk";
            }
        }
        walk(_timeslice) {
            //Paraglider läuft zum Berg
        }
        climb(_timeslice) {
            //Paraglider klettert den Berg hoch 
        }
    }
    L09_2.Paraglider = Paraglider;
    class HotAirBalloon {
        position;
        velocity;
        activity;
        constructor(position) {
        }
        draw() {
        }
        start(_timeslice) {
        }
        fly(_timeslice) {
        }
    }
    L09_2.HotAirBalloon = HotAirBalloon;
})(L09_2 || (L09_2 = {}));
//# sourceMappingURL=classes.js.map