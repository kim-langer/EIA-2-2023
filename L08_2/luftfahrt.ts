/*Aufgabe: L08.2
Name: Kim Langer
Matrikelnummer: 272232
Quellen: Jirkas Inverted Classroom, ChatGPT
*/
namespace L08_2 {

    window.addEventListener("load", handleLoad);

    let canvas = document.querySelector('canvas');
    let crc2 = canvas.getContext('2d');

    function handleLoad(_event: Event): void {
        drawBackground();
        drawCloud();

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


    function drawCloud(_position: Vector, _size: Vector): void {

        let nParticles: number = 200;
        let radiusParticle: number = 23;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle)

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
  crc2.fillStyle = gradient;

        for(let drawn: number= 0 ; drawn < nParticles; drawn++) {
            let x: number = (Math.random() -0.5) * _size.x;
            let y: number = -(Math.random()) * _size.y;
            crc2.translate(x,y);
            crc2.fill(particle);
            crc2.restore();
        }

        crc2.restore();

    }


    // function drawWindsocke(_pos.x, _pos.y) {moveTo(_pos.x, _pos.y) lineTo(_pos.x, _pos.y - 50)//*




}