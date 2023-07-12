
namespace L010_2 {
export abstract class flyingObjects {
    position: Vector;
    velocity: Vector;
    size: Vector;

    constructor(_position: Vector) {
      this.position = _position;
      this.velocity = new Vector(0, 0);
      this.size = new Vector(50, 100);
    }

  

    draw(): void {
   //Zeichnen 
      };


    doActivity(): void {
        // Aktivität
      };


}
}

