var canvas = document.getElementById("myScene");
var context = canvas.getContext("2d");

var background = new Image();
var foreground1 = new Image();
var foreground2 = new Image();
var foreground3 = new Image();

background.src = "imgs/bckg.jpg";
background.onload = function() {
    context.drawImage(background, 0, 0, canvas.clientWidth, canvas.clientHeight)
};

foreground1.src = "imgs/kitty.png"
foreground1.onload = function() {
    context.drawImage(foreground1,120,400,150,150)
};

foreground2.src = "imgs/web.png"
foreground2.onload = function() {
    context.drawImage(foreground2,82,175,180,180)
};

foreground3.src = "imgs/ghost.png"
foreground3.onload = function() {
    context.drawImage(foreground3,250,250,320,320)
    context.font = "20pt Georgia";
    context.fillStyle = "black";
    context.fillText("Yousra Elassa", 223, 60);
    context.fillText("Spooky Encounter", 196, 100);
};