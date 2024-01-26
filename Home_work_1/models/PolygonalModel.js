import Polygon from './Polygon.js';
import Texture from './Texture.js';

export default class PolygonalModel {
    constructor(polygons, textures) {
        this.polygons = polygons.map(polygon => new Polygon(polygon));
        this.textures = textures.map(texture => new Texture(texture));
        }
        }