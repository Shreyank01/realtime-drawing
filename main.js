function setup() {
    canvas = createCanvas(500,400);
    canvas.position(800,200);

    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(200,150);
    
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' ,gotPoses);
}

noseX = "";
noseY = "";
left_wristX = "";
left_wristY = "";
right_wristX = "";
right_wristy = "";

function draw() {
    background('grey');
    square(x,y,l);
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPoses(results) {
        if(results.length > 0) {
            console.log(results);
        }
}