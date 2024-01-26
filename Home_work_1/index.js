import Scene from './scenes/Scene.js';

const scene = new Scene();

// объекты в вашу сцену.
scene.addModel({
  polygons: [[[0, 0, 0], [1, 0, 0], [1, 1, 0]]],
  textures: [/* ... */]
});
scene.addFlash({
  location: [10, 10, 5],
  angle: [45, 0, 0],
  color: [255, 255, 240],
  power: 100
});
scene.addCamera({
  location: [0, 0, 10],
  angle: [0, -45, 0]
});

console.log(scene);
