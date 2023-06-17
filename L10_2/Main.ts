/*Aufgabe: L10.2
Name: Kim Langer
Matrikelnummer: 272232
Quellen: Jirka

Anmerkungen: 
- 
*/

namespace L010_2 {

  window.addEventListener("load", handleLoad);

  export let crc2: CanvasRenderingContext2D;
  let canvas: HTMLCanvasElement;
  let backgroundCanvas: HTMLCanvasElement;
  let backgroundContext: CanvasRenderingContext2D;
  let insects: Insect[] = [];
  let paraglider: Paraglider;

  interface Vector {
    x: number;
    y: number;
  }

  function handleLoad(_event: Event): void {
    canvas = document.querySelector('canvas#front');
    crc2 = canvas.getContext('2d');

    // Hintergrund mit statischen Objekten auf ein anderes Canvas speichern
    backgroundCanvas = document.querySelector('canvas#back');
    backgroundCanvas.width = canvas.width;
    backgroundCanvas.height = canvas.height;
    backgroundContext = backgroundCanvas.getContext("2d");

    drawBackground(backgroundContext);
    drawSun(backgroundContext, { x: 1100, y: 75 });
    drawClouds(backgroundContext, { x: 500, y: 100 }, { x: 200, y: 200 });
    let mountainsHeight: number = crc2.canvas.height * horizon;
    drawMountains(backgroundContext, { x: 0, y: mountainsHeight }, 100, 230, "grey", "white");
    drawKiosk(backgroundContext, { x: 950, y: 560 }, { x: 100, y: 100 });
    drawLandingPlace(backgroundContext, { x: 700, y: 590 }, { x: 140, y: 100 });
    drawHotAirBalloon(backgroundContext, { x: 800, y: 280 }, 60, 50, 10);
    drawActivityMountain(backgroundContext);
    drawParaglider(backgroundContext, { x: 50, y: 280 }, { x: 100, y: 180 });
    // backgroundContext.drawImage(backgroundCanvas, 0, 0);

    // Animationen starten
    insects.push(new Insect(new Vector(400, 600), 30));
    insects.push(new Insect(new Vector(500, 600), 30));
    insects.push(new Insect(new Vector(600, 600), 30));
    setInterval(draw, 100);

    paraglider = new Paraglider(new Vector(30, 280));
  }

  function draw() {
    crc2.fillStyle = "#00000000";
    crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    for (let insect of insects)
      insect.flyRandom();

    paraglider.fly(1);
  }

  //Hintergrund definieren//
  let horizon: number = 0.62;
  function drawBackground(crc2: CanvasRenderingContext2D): void {
    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    gradient.addColorStop(0, "lightblue");
    gradient.addColorStop(horizon - 0.001, "white");
    gradient.addColorStop(horizon, "#53753C");
    gradient.addColorStop(1, "#53753C");

    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
  }

  function drawSun(crc2: CanvasRenderingContext2D, _position: Vector): void {
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
  function drawClouds(crc2: CanvasRenderingContext2D, _position: Vector, _size: Vector): void {
    let nParticles: number = 200;
    let radiusParticle: number = 23;
    let particle: Path2D = new Path2D();
    let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

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
  function drawMountains(crc2: CanvasRenderingContext2D, _position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
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

  function drawKiosk(crc2: CanvasRenderingContext2D, position: Vector, size: Vector): void {
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

  function drawLandingPlace(crc2: CanvasRenderingContext2D, position: Vector, size: Vector): void {

    crc2.save();
    crc2.translate(position.x, position.y);

    crc2.beginPath();
    crc2.ellipse(0, 0, size.x, size.y / 2, 0, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.fillStyle = "#68924b";
    crc2.fill();

    crc2.restore();
  }

  function drawHotAirBalloon(crc2: CanvasRenderingContext2D, _position: Vector, _balloonRadius: number, _basketWidth: number, _basketHeight: number): void {

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

  function drawActivityMountain(crc2: CanvasRenderingContext2D) {
    crc2.beginPath();
    crc2.moveTo(0, 550);

    crc2.lineTo(500, 550)
    crc2.lineTo(0, 250)

    crc2.fillStyle = "#838383";
    crc2.fill();
  }

  function drawParaglider(crc2: CanvasRenderingContext2D, position: Vector, size: Vector): void {

    crc2.save();
    crc2.translate(position.x, position.y);

    // Körper
    crc2.beginPath();
    crc2.arc(0, 0, size.x / 4, 0, 2 * Math.PI); // Beispiel für einen Kreis als Körper
    crc2.fillStyle = "brown"; // Farbe des Körpers
    crc2.fill();
    crc2.closePath();

    // Kopf
    crc2.beginPath();
    crc2.arc(0, -size.x / 4, size.x / 8, 0, 2 * Math.PI); // Beispiel für einen Kreis als Kopf
    crc2.fillStyle = "bisque"; // Farbe des Kopfes
    crc2.fill();
    crc2.closePath();

    // Seile
    const ropeLength = size.y / 3;
    const ropeOffset = size.x / 5;

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
    crc2.arc(0, -ropeLength, size.x / 4, Math.PI, 2 * Math.PI);
    crc2.fillStyle = "lightblue";
    crc2.fill();
    crc2.closePath();

    crc2.restore();
  }
}


