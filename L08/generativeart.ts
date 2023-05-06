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
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Hintergrund mit Kurven und Farbverlauf generieren
    function createBackground(): void {
        // Create gradient
        let gradient = crc2.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, getRandomColor2());
        gradient.addColorStop(1, getRandomColor2());

        // Fill background
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        // zufällige Kurven zeichnen
        let pattern = 20;
        for (let i = 0; i < 5; i++) {
            let startX = Math.random() * canvas.width;
            let startY = Math.random() * canvas.height;
            let endX = Math.random() * canvas.width;
            let endY = Math.random() * canvas.height;
            let cp1X = Math.random() * canvas.width;
            let cp1Y = Math.random() * canvas.height;
            let cp2X = Math.random() * canvas.width;
            let cp2Y = Math.random() * canvas.height;

            for (let i = 0; i < pattern; i++) {
                let t1 = i / pattern;
                let t2 = (i + 1) / pattern;
                let x1 = startX * (1 - t1) ** 3 + cp1X * 3 * (1 - t1) ** 2 * t1 + cp2X * 3 * (1 - t1) * t1 ** 2 + endX * t1 ** 3;
                let y1 = startY * (1 - t1) ** 3 + cp1Y * 3 * (1 - t1) ** 2 * t1 + cp2Y * 3 * (1 - t1) * t1 ** 2 + endY * t1 ** 3;
                let x2 = startX * (1 - t2) ** 3 + cp1X * 3 * (1 - t2) ** 2 * t2 + cp2X * 3 * (1 - t2) * t2 ** 2 + endX * t2 ** 3;
                let y2 = startY * (1 - t2) ** 3 + cp1Y * 3 * (1 - t2) ** 2 * t2 + cp2Y * 3 * (1 - t2) * t2 ** 2 + endY * t2 ** 3;
                crc2.beginPath();
                crc2.moveTo(x1, y1);
                crc2.lineTo(x2, y2);
                crc2.strokeStyle = getRandomColor();
                crc2.stroke();
            }
        }

    }

    window.addEventListener("load", handleload);

    function handleload(_event: Event): void {

        createBackground();
        createBlurryCircle(crc2, canvas.width, canvas.height);
        createCircles(50);

    }
}
