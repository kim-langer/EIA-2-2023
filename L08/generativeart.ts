/*Aufgabe: L08
Name: Kim Langer
Matrikelnummer: 272232
Quellen: ChatGPT
*/
namespace L08 {
    // Canvas Referenz speichern/RenderingContext erstellen
    let canvas: HTMLCanvasElement = document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

    // einen zufälligen, verschwommenen Kreis als Grundlage des Bildes
    function createBlurryCircle(_context: CanvasRenderingContext2D, _canvasWidth: number, _canvasHeight: number): void {
       
        let radius = Math.random() * 50 + 10; 
        let color = getRandomColor();
        let x = Math.random() * _canvasWidth;
        let y = Math.random() * _canvasHeight;
        let gradient = _context.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'transparent');
        _context.fillStyle = gradient;
        _context.beginPath();
        _context.arc(x, y, radius, 0, 2 * Math.PI);
        _context.fill();
    }

    // Farben für den kreis auf Grün und Gelbtöne beschränken
    function getRandomColor(): string {
        let colors = ["#2B5441", "#22741C", "#F7DC6F", "#7FFF00"];
        return colors[Math.floor(Math.random() * colors.length)];
      }
      
     // Kreis mit einer Schleife vervielfachen
    function createCircles(_count: number): void {
        for (let i = 0; i < _count; i++) {
            createBlurryCircle(crc2, canvas.width, canvas.height);
        }
    }

    function getRandomColor2(): string {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
      }
      
// Hintergrund mit Kurven und Farbverlauf generieren
      function createBackground(): void {
        // Create gradient
        const gradient = crc2.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, getRandomColor2());
        gradient.addColorStop(1, getRandomColor2());
      
        // Fill background
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
      
        // zufällige Kurven zeichnen
        for (let i = 0; i < 5; i++) {
          const startX = Math.random() * canvas.width;
          const startY = Math.random() * canvas.height;
          const endX = Math.random() * canvas.width;
          const endY = Math.random() * canvas.height;
          const cp1X = Math.random() * canvas.width;
          const cp1Y = Math.random() * canvas.height;
          const cp2X = Math.random() * canvas.width;
          const cp2Y = Math.random() * canvas.height;
      
          crc2.beginPath();
          crc2.moveTo(startX, startY);
          crc2.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY);
          crc2.strokeStyle = "rgba(255, 255, 255, 0.1)";
          crc2.lineWidth = 5;
          crc2.stroke();
        }
      }
      

    window.addEventListener("load", handleload);

    function handleload(_event: Event): void {

        createBackground();
        createBlurryCircle(crc2, canvas.width, canvas.height);
        createCircles(200);

    }
}
