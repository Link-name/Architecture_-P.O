import Point3D from './Point3D.js';
import Angle3D from './Angle3D.js';

export default class Modifications {
  constructor(location, angle) {
    this.location = new Point3D(...location);
    this.angle = new Angle3D(...angle);
  }

  rotate(newAngle) {
    this.angle = new Angle3D(...newAngle);
  }

  move(newLocation) {
    this.location = new Point3D(...newLocation);
  }
}