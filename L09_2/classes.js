"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Insect = exports.Vector = void 0;
var L09_2;
(function (L09_2) {
    class Paraglider {
        position;
        velocity;
        activity;
        constructor(position) {
        }
        draw() {
        }
        fly(_timesclie) {
        }
        walk(_timesclie) {
        }
        climb(_timesclie) {
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
        start(_timesclie) {
        }
        fly(_timesclie) {
        }
    }
    L09_2.HotAirBalloon = HotAirBalloon;
})(L09_2 || (L09_2 = {}));
class Vector {
    x;
    y;
    scale(factor) {
        this.x *= factor;
        this.y *= factor;
        return this;
    }
    add(addend) {
        this.x += addend.x;
        this.y += addend.y;
        return this;
    }
}
exports.Vector = Vector;
class Insect {
    position;
    velocity;
    size;
    constructor(position, size) {
        this.position = position;
        this.velocity = new Vector();
        this.size = size;
    }
    draw(crc2) {
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
    fly(timeslice) {
        this.position.x += this.velocity.x * timeslice;
        this.position.y += this.velocity.y * timeslice;
    }
}
exports.Insect = Insect;
//# sourceMappingURL=classes.js.map