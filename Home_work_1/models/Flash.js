
import Modifications from './Modifications.js';
import Color from './Color.js';

export default class Flash extends Modifications {
    constructor(location, angle, color, power) {
        super(location, angle);
        this.color = new Color(...color);
        this.power = power;
    }
}