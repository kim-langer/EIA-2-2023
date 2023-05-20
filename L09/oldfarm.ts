/*Aufgabe: L09
Name: Kim Langer
Matrikelnummer: 272232
Quellen: ChatGPT, Jirkas Inverted Classroom 
*/
namespace L09 {

    window.addEventListener("load", handleLoad);

    let canvas = document.querySelector('canvas');
    let crc2 = canvas.getContext('2d');

    interface Vector {
        x: number;
        y: number;
    }

    function handleLoad(_event: Event): void {

        drawBackground();
        drawSun({ x: 70, y: 75 });
        drawFarmhouse({ x: 800, y: 250 }, { x: 450, y: 350 });
        drawFoodstation();
        drawPig({ x: 400, y: 500 }, { x: 140, y: 100 });
        drawCow({ x: 200, y: 620}, { x: 140, y: 100 });
        drawBabyPig({ x: 550, y: 500 }, { x: 80, y: 60 })
        drawDog({ x: 780, y: 600}, { x: 90, y: 45 });
        drawChicken({ x: 500, y: 650}, { x: 60, y: 90 });
    }

//Hintergrund definieren//

let horizon: number = 0.62;
function drawBackground(): void {
    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    gradient.addColorStop(0, "lightblue");
    gradient.addColorStop(horizon - 0.001, "white");
    gradient.addColorStop(horizon, "#53753C");
    gradient.addColorStop(1, "#53753C");

    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
}

function drawSun(_position: Vector): void {
    let r1: number = 100;
    let r2: number = 170;
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

function drawFarmhouse(position: Vector, size: Vector): void {
    crc2.save();
    crc2.translate(position.x, position.y);

    // Dach 
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(size.x / 2, -size.y / 2);
    crc2.lineTo(size.x, 0);
    crc2.closePath();
    crc2.fillStyle = "#302018";
    crc2.fill();

    // Wand 
    crc2.beginPath();
    crc2.rect(0, 0, size.x, size.y);
    crc2.fillStyle = "#f3decd";
    crc2.fill();

    crc2.restore();
}

function drawFoodstation () {

crc2.beginPath();
crc2.fillStyle = 'lightgrey';
crc2.fillRect(950, 540, 130, 130);
crc2.closePath();
}


//Das Zeichnen der Tiere//

function drawPig(position: Vector, size: Vector): void {
    crc2.save();
    crc2.translate(position.x, position.y);

    crc2.beginPath();
    crc2.moveTo(0, 0);

    crc2.ellipse(0, 0, size.x / 2, size.y / 2, 0, 0, 2 * Math.PI);

    crc2.closePath();
    crc2.fillStyle = "#f1bdd4";
    crc2.fill();

    crc2.fillStyle = "#f1bdd4";
    crc2.fillRect(-size.x / 4, size.y * 0.3, size.x / 6, size.y / 2);
    crc2.fillRect(size.x / 8, size.y * 0.3, size.x / 6, size.y / 2);

   let headRadius = size.x / 6;
    let headX = size.x / 1.5 - headRadius;
    let headY = -headRadius;
    crc2.beginPath();
    crc2.arc(headX, headY, headRadius, 0, 2 * Math.PI);
    crc2.fillStyle = "#f1bdd4";
    crc2.fill();

        // Zeichne das Auge
        let eyeRadius = headRadius * 0.2;
        let eyeX = headX + eyeRadius;
        let eyeY = headY;
        crc2.beginPath();
        crc2.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "#000000";
        crc2.fill();
    
        // Zeichne die Iris
        let irisRadius = eyeRadius * 0.6;
        let irisX = eyeX + irisRadius;
        let irisY = eyeY;
        crc2.beginPath();
        crc2.arc(irisX, irisY, irisRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

    crc2.restore();
}

function drawBabyPig(position: Vector, size: Vector): void {
    crc2.save();
    crc2.translate(position.x, position.y);

    crc2.beginPath();
    crc2.moveTo(0, 0);

    // Zeichne die Ellipse
    crc2.ellipse(0, 0, size.x / 2, size.y / 2, 0, 0, 2 * Math.PI);

    crc2.closePath();
    crc2.fillStyle = "#f1bdd4";
    crc2.fill();

    crc2.fillStyle = "#f1bdd4";
    crc2.fillRect(-size.x / 4, size.y * 0.3, size.x / 6, size.y / 2);
    crc2.fillRect(size.x / 8, size.y * 0.3, size.x / 6, size.y / 2);

   let headRadius = size.x / 6;
    let headX = size.x / 1.5 - headRadius;
    let headY = -headRadius;
    crc2.beginPath();
    crc2.arc(headX, headY, headRadius, 0, 2 * Math.PI);
    crc2.fillStyle = "#f1bdd4";
    crc2.fill();

        // Zeichne das Auge
        let eyeRadius = headRadius * 0.2;
        let eyeX = headX + eyeRadius;
        let eyeY = headY;
        crc2.beginPath();
        crc2.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "#000000";
        crc2.fill();
    
        // Zeichne die Iris
        let irisRadius = eyeRadius * 0.6;
        let irisX = eyeX + irisRadius;
        let irisY = eyeY;
        crc2.beginPath();
        crc2.arc(irisX, irisY, irisRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

    crc2.restore();
}

function drawCow(position: Vector, size: Vector): void {
    crc2.save();
    crc2.translate(position.x, position.y);

    // Zeichne das Rechteck mit Flecken
    crc2.fillStyle = "#000000";
    crc2.fillRect(-size.x / 2, -size.y / 2, size.x, size.y);

    // Zeichne die schwarzen Flecken
    crc2.fillStyle = "#000000";
    drawSpot(-size.x / 4, -size.y / 4, size.x / 4, size.y / 4);
    drawSpot(size.x / 8, -size.y / 8, size.x / 5, size.y / 5);

    // Zeichne die weißen Flecken
    crc2.fillStyle = "#ffffff";
    drawSpot(-size.x / 6, size.y / 150, size.x / 5, size.y / 5);
    drawSpot(size.x / 4, size.y / 12, size.x / 6, size.y / 6);

    // Zeichne die Beine
    crc2.fillStyle = "black";
    crc2.fillRect(-size.x / 4, size.y * 0.3, size.x / 6, size.y / 2);
    crc2.fillRect(size.x / 8, size.y * 0.3, size.x / 6, size.y / 2);

    // Zeichne den Kopf
    const headRadius = size.x / 6;
    const headX = size.x / 1.5 - headRadius;
    const headY = -headRadius;
    crc2.beginPath();
    crc2.arc(headX, headY, headRadius, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();

    // Zeichne das Auge
    const eyeRadius = headRadius * 0.2;
    const eyeX = headX + eyeRadius;
    const eyeY = headY;
    crc2.beginPath();
    crc2.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI);
    crc2.fillStyle = "#000000";
    crc2.fill();

    // Zeichne die Iris
    const irisRadius = eyeRadius * 0.6;
    const irisX = eyeX + irisRadius;
    const irisY = eyeY;
    crc2.beginPath();
    crc2.arc(irisX, irisY, irisRadius, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();

    crc2.restore();
}

function drawSpot(x: number, y: number, width: number, height: number): void {
    crc2.beginPath();
    crc2.ellipse(x, y, width, height, 0, 0, 2 * Math.PI);
    crc2.fill();
}


function drawDog(position: Vector, size: Vector): void {
    crc2.save();
    crc2.translate(position.x, position.y);

    // Zeichne das Rechteck
    crc2.fillStyle = "#D5B56E";
    crc2.fillRect(-size.x / 3, -size.y / 3, size.x, size.y);

    // Zeichne die Beine
    crc2.fillStyle = "#D5B56E";
    crc2.fillRect(-size.x / 4, size.y * 0.6, size.x / 8, size.y / 2);
    crc2.fillRect(size.x / 3, size.y * 0.6, size.x / 8, size.y / 2);

    // Zeichne den Kopf
    const headRadius = size.x / 6;
    const headX = headRadius - 39
    const headY = -headRadius;
    crc2.beginPath();
    crc2.arc(headX, headY, headRadius, 0, 2 * Math.PI);
    crc2.fillStyle = "#D5B56E";
    crc2.fill();

    // Zeichne das Auge
    let eyeRadius = headRadius * 0.2;
    let eyeX = headX + eyeRadius;
    let eyeY = headY;
    crc2.beginPath();
    crc2.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI);
    crc2.fillStyle = "#000000";
    crc2.fill();

    // Zeichne die Iris
    let irisRadius = eyeRadius * 0.6;
    let irisX = eyeX + irisRadius;
    let irisY = eyeY;
    crc2.beginPath();
    crc2.arc(irisX, irisY, irisRadius, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();

    crc2.restore();
}

function drawChicken(position: Vector, size: Vector): void {
    crc2.save();
    crc2.translate(position.x, position.y);

        // Zeichne die Beine
        crc2.fillStyle = "#ff9900";
        crc2.fillRect(-size.x / 4, size.y * 0.3, size.x / 8, size.y / 2);
        crc2.fillRect(size.x / 7, size.y * 0.3, size.x / 8, size.y / 2);

        // Zeichne den Schnabel
    crc2.fillStyle = "#ffcc00";
    crc2.beginPath();
    crc2.moveTo(size.x * 0.9, -size.y * 0.2);
    crc2.lineTo(size.x * 0.5, -size.y * 0.2);
    crc2.lineTo(size.x * 0.51, size.y * 0.05);
    crc2.closePath();
    crc2.fill();

    // Zeichne den Körper
    crc2.fillStyle = "#ffffff";
    crc2.beginPath();
    crc2.arc(0, 0, size.x / 2, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.fill();

    // Zeichne den Kopf
    crc2.fillStyle = "#ffffff";
    crc2.beginPath();
    crc2.arc(size.x * 0.3, 0, size.x / 4, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.fill();

    // Zeichne den Schnabel
    crc2.fillStyle = "#ffcc00";
    crc2.beginPath();
    crc2.moveTo(size.x * 0.9, -size.y * 0.08);
    crc2.lineTo(size.x * 0.5, -size.y * 0.2);
    crc2.lineTo(size.x * 0.51, size.y * 0.05);
    crc2.closePath();
    crc2.fill();

    // Zeichne die Augen
    const eyeRadius = size.x * 0.05;
    const eyeX = size.x * 0.4;
    const eyeY = -size.y * 0.1;
    crc2.fillStyle = "#000000";
    crc2.beginPath();
    crc2.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.fill();

      // Zeichne die Iris
      let irisRadius = eyeRadius * 0.6;
      let irisX = eyeX + irisRadius;
      let irisY = eyeY;
      crc2.beginPath();
      crc2.arc(irisX, irisY, irisRadius, 0, 2 * Math.PI);
      crc2.fillStyle = "#ffffff";
      crc2.fill();

    crc2.restore();
}









    }