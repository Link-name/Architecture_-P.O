import Point3D from './Point3D.js';

export default class Polygon {
  constructor(points) {
    this.points = points.map(point => new Point3D(...point));
  }
}