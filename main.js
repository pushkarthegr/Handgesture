//https://teachablemachine.withgoogle.com/models/dOUry0aca/

function load(){
    setInterval(function(){
        document.getElementById("startEmoji").innerHTML = "&#9757;&#9996;";
    },6000);
    setTimeout(function(){
        setInterval(function(){
            document.getElementById("startEmoji").innerHTML = "&#128075;&#128076;";
        },6000);
    },2000);
    setTimeout(function(){
        setInterval(function(){
            document.getElementById("startEmoji").innerHTML = "&#128079;&#128077;";
        },6000);
    },4000);
}
Webcam.set({
    width:320,
    height:290,
    image_format:'png',
    png_quality:90
});
cam = document.getElementById("camera");
Webcam.attach(cam);

function snapshot(){
    Webcam.snap(function(img){
        console.log(img);
        document.getElementById("webcam").style.display = "none";
        document.getElementById("pic").style.display = "block";
        document.getElementById("result").innerHTML = "<img src="+img+">";
    });
    Webcam.reset();
}
