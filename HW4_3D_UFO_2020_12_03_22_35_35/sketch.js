const ufo = {
  x: 0,
  y: -100,
  z: -1000,
  theta: 0,
  gravity: 0.3
}

let grassTexture;
let metalTexture;
let skyTexture;
let moonTexture;
let alienTexture;

function preload() {
  grassTexture = loadImage("textures/grassTexture.jpg")
  metalTexture = loadImage("textures/circular-837510_1920.jpg")
  skyTexture = loadImage("textures/milky-way-starry-sky-night-sky-star-957010.jpeg")
  moonTexture = loadImage("textures/lroc_color_poles_1k.jpg")
  alienTexture = loadImage("textures/Airani_Iofifteen_-_Portrait.png")
}

function setup() {
  createCanvas(700, 700, WEBGL);
}

function draw() {
  push()
  texture(skyTexture)
  translate(0, 0, -1500)
  plane(5000, 5000)
  pop()
  directionalLight(255, 255, 255, 1, 1, -1)
  pointLight(255, 255, 255, 0, ufo.y - 30, 0)
  drawGround()
  drawSky()
  drawUfo()
  moveUfo()
}

function drawGround() {
  drawTree(150, 25, 100)
  drawTree(-150, 25, 100)
  drawTree(130, 25, 350)
  drawTree(-130, 25, 350)

  push()
  texture(grassTexture)
  spotLight(255, 255, 255, 0, ufo.y, 0, 0, 1, 0, Math.PI / 6, 5)
  translate(0, 200, 0)
  rotateX(Math.PI / 2)
  plane(1200, 700)
  pop()
}

function drawTree(x, y, z) {
  push()
  noStroke()
  translate(x, y, z)
  rotateX(degrees(122))
  ambientMaterial("green")
  cone(50, 150)
  translate(0, -90, 0)
  ambientMaterial("brown")
  cylinder(15, 25)
  pop()
}

function drawSky() {
  push()
  noStroke()
  texture(moonTexture)
  translate(250, -500, -500)
  sphere(100)
  pop()
}

function drawUfo() {
  push()
  noStroke()
  translate(ufo.x, ufo.y, ufo.z)
  rotateY(ufo.theta)
  scale(1, 0.25, 1)
  specularMaterial("grey")
  shininess(10)
  sphere(80)

  translate(0, -100, 0)
  specularMaterial("skyblue")
  cylinder(39, 160)
  specularMaterial("grey")
  rotateX(Math.PI)
  translate(0, 115, 0)
  cone(45, 60)

  rotateX(-Math.PI)
  translate(0, 100, 0)
  texture(alienTexture)
  cylinder(40, 160)

  translate(0, 150, 0)
  scale(1, 4, 1)
  emissiveMaterial("violet")
  sphere(20)
  emissiveMaterial("pink")
  translate(0, -70, 0)
  sphere(10)
  pop()
}

function moveUfo() {
  if (ufo.z < 150) {
    ufo.z += 3
    ufo.theta += 0.04
  } else if (ufo.y < 160) {
    ufo.y += 1 / ufo.gravity
    ufo.gravity += 0.01
    ufo.theta += 0.02
  } else {
    noLoop()
  }
}