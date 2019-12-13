let mobilenet;
let video;
let label = '';
let probability = '';

function modelReady() {
  console.log('Model Is Ready!');
  mobilenet.predict(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    mobilenet.predict(gotResults);
    label = results[0].label;
    probability = results[0].confidence;
  }
}

function imageReady() {
  image(video, 0, 0, width, height);
}
function setup() {
  createCanvas(640, 550);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}
function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 10);

  //   let div = createDiv(label);
  //   div.html(probability, true);
  //   createP(label);
  //   createP(probability);
}
