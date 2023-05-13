/*Aufgabe: L08.2
Name: Kim Langer
Matrikelnummer: 272232
Quellen: ChatGPT
*/
namespace L082 {
    const canvas = document.querySelector('canvas');
    const crc2 = canvas.getContext('2d');

    // Darstellung des Bildes responsive gestalten/ smartphoneoptimiert
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    function drawWindsocke(_pos.x, _pos.y) {

        moveTo(_pos.x, _pos.y)
        lineTo(_pos.x, _pos.y - 50)

    }




}