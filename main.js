status = "";
function preload()
{
    video = createCapture(480,380);
}

function setup()
{
    video.hide();
    canvas = createCanvas(480,380);
    canvas.center();
    video.volume(0);
}

function start()
{
    objectDetection = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    txtvalue = document.getElementById("inp").value;
 
}

function modelLoaded()
{
    console.log("Model is initialized!");
    status = true;
}

function draw()
{
    image(video,0,0,480,380);
   
}