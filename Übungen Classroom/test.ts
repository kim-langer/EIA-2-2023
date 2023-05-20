class Vector {
    x: number;
    y: number;

    scale(_factor: number): void {
        this.x *= _factor;
        this.y *= _factor;
    }

    add(_addend: Vector): void {
        this.x += _addend.x;
        this.y += _addend.y;
    }
}

let v1: Vector = new Vector();
v1.scale(2);
console.log(v1);