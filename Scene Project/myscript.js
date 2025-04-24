var canvas = document.getElementById("myScene");
var context = canvas.getContext("2d");
context.shadowColor = "grey";
context.shadowBlur = 20;

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
    drawGhost()
};

let ghostY = 250;
let direction = 1;

function drawGhost() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    context.drawImage(foreground1, 120, 400, 150, 150);
    context.drawImage(foreground2, 82, 175, 180, 180);

    context.drawImage(foreground3, 250, ghostY, 320, 320);

    context.font = "20pt Georgia";
    context.fillStyle = "black";
    context.fillText("Yousra Elassa", 223, 60);
    context.fillText("Spooky Encounter", 196, 100);

    if (ghostY >= 255) direction = -.5;
    if (ghostY <= 240) direction = .5;
    ghostY += direction * 0.5;

    requestAnimationFrame(drawGhost);
}
