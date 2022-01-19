video="";
status="";

function perload()
{
    video=creatvideo('video.mp4');
}
function setup()
{
    canvas = createCanvas(480, 480);
    canvas.center();
}
function draw()
{
    image(video , 0 , 0 , 480 , 380)
}
function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status: Detecting Objects";
}
function modelLoaded()
{
    console.log("model loaded")
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
