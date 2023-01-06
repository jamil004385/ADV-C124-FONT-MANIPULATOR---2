function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 110);
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses)
}

function draw() {
    background('#8E8E8E');
}

function modelLoaded(){
    console.log('poseNet Is Initialized!');
}

function gotPoses(results) 
{
   if(results.length >  0)
   {
    console.log(results);
   }
}
