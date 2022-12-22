function setup()
{
   canvas=createCanvas(640,420);
   canvas.center(); 

   objectDetector=ml5.objectDetector("cocossd",modelloaded);
   document.getElementById("status").innerHTML="Status:Detecting Objects";

}
function preload()
{
    img=loadImage("hero.jpg");
}