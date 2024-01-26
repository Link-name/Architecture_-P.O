import PolygonalModel from '../models/PolygonalModel.js';
import Flash from '../models/Flash.js';
import Camera from '../models/Camera.js';

export default class Scene {
  constructor() {
    this.id = Math.floor(Math.random() * 10000);
    this.models = [];
    this.flashes = [];
    this.cameras = [];
  }

  addModel(model) {
    this.models.push(new PolygonalModel(model.polygons, model.textures));
  }

  addFlash(flash) {
    this.flashes.push(new Flash(flash.location, flash.angle, flash.color, flash.power));
  }

  addCamera(camera) {
    this.cameras.push(new Camera(camera.location, camera.angle));
  }

  
  method1(type) {

  }

  method2(type) {

  }
}
