
class Square extends Shape {
    constructor(length) {
        super();
        this.length = length;
    }

    area() {
        return this.length * this.length;
    }
}