/*Aufgabe: L09
Name: Kim Langer
Matrikelnummer: 272232
Quellen: ChatGPT, Jirkas Inverted Classroom
*/
var L09;
(function (L09) {
    window.addEventListener("load", handleLoad);
    let canvas = document.querySelector('canvas');
    let crc2 = canvas.getContext('2d');
    function handleLoad(_event) {
        drawBackground();
        drawSun({ x: 70, y: 75 });
        drawFarmhouse({ x: 800, y: 250 }, { x: 450, y: 350 });
        drawFoodstation();
        drawPig({ x: 400, y: 500 }, { x: 140, y: 100 });
        drawCow({ x: 200, y: 620 }, { x: 140, y: 100 });
        drawBabyPig({ x: 550, y: 500 }, { x: 80, y: 60 });
        drawDog({ x: 780, y: 600 }, { x: 90, y: 45 });
        drawChicken({ x: 500, y: 650 }, { x: 60, y: 90 });
        performActions();
    }
    //Hintergrund definieren//
    let horizon = 0.62;
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(horizon - 0.001, "white");
        gradient.addColorStop(horizon, "#53753C");
        gradient.addColorStop(1, "#53753C");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 100;
        let r2 = 170;
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
    function drawFarmhouse(position, size) {
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
    function drawFoodstation() {
        crc2.beginPath();
        crc2.fillStyle = 'lightgrey';
        crc2.fillRect(950, 540, 130, 130);
        crc2.closePath();
    }
    //Das Zeichnen der Tiere//
    function drawPig(position, size) {
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
    function drawBabyPig(position, size) {
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
        let eyeRadius = headRadius * 0.2;
        let eyeX = headX + eyeRadius;
        let eyeY = headY;
        crc2.beginPath();
        crc2.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "#000000";
        crc2.fill();
        let irisRadius = eyeRadius * 0.6;
        let irisX = eyeX + irisRadius;
        let irisY = eyeY;
        crc2.beginPath();
        crc2.arc(irisX, irisY, irisRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.restore();
    }
    function drawCow(position, size) {
        crc2.save();
        crc2.translate(position.x, position.y);
        crc2.fillStyle = "#000000";
        crc2.fillRect(-size.x / 2, -size.y / 2, size.x, size.y);
        // schwarzen Flecken
        crc2.fillStyle = "#000000";
        drawSpot(-size.x / 4, -size.y / 4, size.x / 4, size.y / 4);
        drawSpot(size.x / 8, -size.y / 8, size.x / 5, size.y / 5);
        // weißen Flecken
        crc2.fillStyle = "#ffffff";
        drawSpot(-size.x / 6, size.y / 150, size.x / 5, size.y / 5);
        drawSpot(size.x / 4, size.y / 12, size.x / 6, size.y / 6);
        crc2.fillStyle = "black";
        crc2.fillRect(-size.x / 4, size.y * 0.3, size.x / 6, size.y / 2);
        crc2.fillRect(size.x / 8, size.y * 0.3, size.x / 6, size.y / 2);
        let headRadius = size.x / 6;
        let headX = size.x / 1.5 - headRadius;
        let headY = -headRadius;
        crc2.beginPath();
        crc2.arc(headX, headY, headRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        let eyeRadius = headRadius * 0.2;
        let eyeX = headX + eyeRadius;
        let eyeY = headY;
        crc2.beginPath();
        crc2.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "#000000";
        crc2.fill();
        let irisRadius = eyeRadius * 0.6;
        let irisX = eyeX + irisRadius;
        let irisY = eyeY;
        crc2.beginPath();
        crc2.arc(irisX, irisY, irisRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.restore();
    }
    function drawSpot(x, y, width, height) {
        crc2.beginPath();
        crc2.ellipse(x, y, width, height, 0, 0, 2 * Math.PI);
        crc2.fill();
    }
    function drawDog(position, size) {
        crc2.save();
        crc2.translate(position.x, position.y);
        crc2.fillStyle = "#D5B56E";
        crc2.fillRect(-size.x / 3, -size.y / 3, size.x, size.y);
        crc2.fillStyle = "#D5B56E";
        crc2.fillRect(-size.x / 4, size.y * 0.6, size.x / 8, size.y / 2);
        crc2.fillRect(size.x / 3, size.y * 0.6, size.x / 8, size.y / 2);
        const headRadius = size.x / 6;
        const headX = headRadius - 39;
        const headY = -headRadius;
        crc2.beginPath();
        crc2.arc(headX, headY, headRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "#D5B56E";
        crc2.fill();
        let eyeRadius = headRadius * 0.2;
        let eyeX = headX + eyeRadius;
        let eyeY = headY;
        crc2.beginPath();
        crc2.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "#000000";
        crc2.fill();
        let irisRadius = eyeRadius * 0.6;
        let irisX = eyeX + irisRadius;
        let irisY = eyeY;
        crc2.beginPath();
        crc2.arc(irisX, irisY, irisRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.restore();
    }
    function drawChicken(position, size) {
        crc2.save();
        crc2.translate(position.x, position.y);
        crc2.fillStyle = "#ff9900";
        crc2.fillRect(-size.x / 4, size.y * 0.3, size.x / 8, size.y / 2);
        crc2.fillRect(size.x / 7, size.y * 0.3, size.x / 8, size.y / 2);
        crc2.fillStyle = "#ffcc00";
        crc2.beginPath();
        crc2.moveTo(size.x * 0.9, -size.y * 0.2);
        crc2.lineTo(size.x * 0.5, -size.y * 0.2);
        crc2.lineTo(size.x * 0.51, size.y * 0.05);
        crc2.closePath();
        crc2.fill();
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.arc(0, 0, size.x / 2, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.arc(size.x * 0.3, 0, size.x / 4, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.fillStyle = "#ffcc00";
        crc2.beginPath();
        crc2.moveTo(size.x * 0.9, -size.y * 0.08);
        crc2.lineTo(size.x * 0.5, -size.y * 0.2);
        crc2.lineTo(size.x * 0.51, size.y * 0.05);
        crc2.closePath();
        crc2.fill();
        const eyeRadius = size.x * 0.05;
        const eyeX = size.x * 0.4;
        const eyeY = -size.y * 0.1;
        crc2.fillStyle = "#000000";
        crc2.beginPath();
        crc2.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        let irisRadius = eyeRadius * 0.6;
        let irisX = eyeX + irisRadius;
        let irisY = eyeY;
        crc2.beginPath();
        crc2.arc(irisX, irisY, irisRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.restore();
    }
    //Die Tiere aus den Classes erstellen//
    let cow = new L09.Cow();
    let chicken = new L09.Chicken();
    let pig = new L09.Pig();
    let babypig = new L09.Pig();
    let dog = new L09.Dog();
    async function performActions() {
        await singAndEat(cow);
        await singAndEat(chicken);
        await singAndEat(pig);
        await singAndEat(dog);
        await singAndEat(babypig);
        showFarmertheAmount();
    }
    async function singAndEat(animal) {
        let songText = await animal.sing();
        console.log(songText);
        crc2.font = '20px Montserrat';
        crc2.fillStyle = 'black';
        crc2.fillText(songText, 150, 300);
        let eatText = await animal.eat();
        crc2.fillText(eatText, 150, 350);
        // Timeout von 3 Sekunden
        await new Promise(resolve => setTimeout(resolve, 3000));
        // Hier erfolgt das Löschen der Texte
        let textWidth = Math.max(crc2.measureText(songText).width, crc2.measureText(eatText).width);
        crc2.clearRect(150, 300 - 20, textWidth, 80);
    }
    function showFarmertheAmount() {
        let endText = `The day is over`;
        let cowAmountText = `Cow's remaining food: ${cow.getAmount()}`;
        let chickenAmountText = `Chicken's remaining food: ${chicken.getAmount()}`;
        let pigAmountText = `Pig's remaining food: ${pig.getAmount()}`;
        let babypigAmountText = `Baby Pig's remaining food: ${babypig.getAmount()}`;
        let dogAmountText = `Dog's remaining food: ${dog.getAmount()}`;
        crc2.font = 'bold 20px Montserrat';
        crc2.fillStyle = 'black';
        crc2.fillText(endText, 150, 200);
        crc2.font = '20px Montserrat'; // Zurück zum normalen Font für den restlichen Text
        crc2.fillText(cowAmountText, 150, 250);
        crc2.fillText(chickenAmountText, 150, 280);
        crc2.fillText(pigAmountText, 150, 310);
        crc2.fillText(babypigAmountText, 150, 340);
        crc2.fillText(dogAmountText, 150, 370);
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=oldfarm.js.map