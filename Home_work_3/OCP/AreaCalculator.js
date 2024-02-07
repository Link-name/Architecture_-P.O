class AreaCalculator {
    static calculate(shapes) {
        return shapes.reduce((area, shape) => area + shape.area(), 0);
    }
}
