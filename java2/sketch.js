function setup() {
 createCanvas(window.innerWidth, window.innerHeight,WEBGL);
}

function draw() {
  background(50);
  rotateY(frameCount * 0.01);

  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 200; i++) {
      translate(
        sin(frameCount * 0.02 + j) * 50,
        sin(frameCount * 0.02 + j) * 50,
        i * 0.1
      );
      rotateZ(frameCount * 0.001);
      push();
      sphere(5, 7, 4);
      pop();
    }
    pop();
  }
}