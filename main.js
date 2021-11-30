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
    " "
    }
    
    
    function preload(){
    " "
    }


    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
        }
      }