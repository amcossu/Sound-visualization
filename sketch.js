let fft;
let mic;
let w;

function setup() {
  createCanvas(800, 200);
  colorMode(HSB);
  angleMode(DEGREES);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.9);
  fft.setInput(mic);
  w = width / 256;

}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  stroke(255);

  for (var i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    let y = map(amp, 0, 400, height, 0);
    fill(i, 255, 255);
    rect(i * w, y, w, height);
  }

}
