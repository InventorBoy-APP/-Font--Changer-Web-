rightWristX = 0;
leftWristX = 0;
difference = 0; 





function setup(){
    canvas = createCanvas(600,500);
    canvas.position(840,150)
    video = createCapture(VIDEO);
    video.size(600,500);
    video.position(140,150)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
    }


    function modelLoaded(){
        console.log(" PoseNet Has Been Initialized ");
    }
    
    
    function draw(){
     background("#E04E49");
     fill("#71F69F");
     textSize(difference);
     text('Earth', 40, 100);

    }
    
    
    function preload(){
    " "
    }


    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            rightWristX = results[0].pose.rightWrist.x;
            leftWristX = results[0].pose.leftWrist.x;
            console.log(" Left Wrist X = " + leftWristX + " Right Wrist X = " + rightWristX);
            difference = floor(leftWristX - rightWristX);
            console.log(" Difference Is = " + difference);
        }
      }