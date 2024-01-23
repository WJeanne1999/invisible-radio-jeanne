let serial;
let latestData = 0;
let ellipseColor;
let sound;

function preload() {
  sound = loadSound('/libraries/drawing.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  serial = new p5.SerialPort();
  serial.open("/dev/tty.usbmodem14201");
  serial.on('data', gotData);

  ellipseColor = color(random(255), random(255), random(255));
}

function initializeAudio() {
  // Create or initialize the audio context and other audio-related setup
  sound = loadSound('/libraries/drawing.mp3');
  // Additional audio setup...
}


function gotData() {
  var currentString = serial.readLine();
  if (currentString.length > 0) {
    latestData = Number(currentString);
    console.log(latestData);

}}

  

function draw() {
  background("#000000");

  noStroke();

  // Use ellipseColor for the ellipse fill color
  fill(ellipseColor);
  ellipse(width / 2, height / 2, latestData / 4, latestData / 4);
  updateEllipseColor();

  if (latestData > 0){
    sound.play();
  } else {
    sound.stop();
  }}


function updateEllipseColor() {
  // Change ellipse color continuously
  ellipseColor = color(random(255), random(255), random(255));
}
