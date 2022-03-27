function setup() {
    canvas = createCanvas(500,400);
    canvas.position(800,200);

    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(200,150);
    
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' ,gotPoses);
}

noseX = 0;
noseY = 0;
left_wristX = 0;
diffrence = 0;
right_wristX = 0;


function draw() {
    background('white');
    fill("red");
    stroke("red");
    square(noseX,noseY,diffrence);

    document.getElementById("result").innerHTML = "Width and Height of the square is " + diffrence + "px";
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPoses(results) {
        if(results.length > 0) {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("nose x position is " + noseX + "nose y position is" + noseY);

            left_wristX = results[0].pose.leftWrist.x;
            right_wristX = results[0].pose.rightWrist.x;
            diffrence = Math.floor(left_wristX - right_wristX);
            console.log("left wrist x = " + left_wristX + "right wirst x = " + right_wristX + "diffrence = " + diffrence);

            
        }
}