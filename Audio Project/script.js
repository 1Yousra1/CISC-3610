var canvas = document.getElementById("myScene");
var context = canvas.getContext("2d");

var selectedBckgImg = null;
var selectedItemImg = null;
var isItem1Visible = false;
var isItem2Visible = false;
var isItem3Visible = false;

var characterX = 120;
var characterY = 60;

function displayBckg(imgFile) {
    selectedBckgImg = imgFile;
    var background = new Image();
    background.src = imgFile;
    background.onload = function() {
        redrawScene();
    };
}

function displayItem(id) {
    var toggle = document.getElementById(id);

    if (id === 'item1') {
        isItem1Visible = toggle.checked;
    }
    if (id === 'item2') {
        isItem2Visible = toggle.checked;
    }
    if (id === 'item3') {
        isItem3Visible = toggle.checked;
    }

    redrawScene();
}


function playSound(soundfile) {
    var audio = new Audio(soundfile);
    audio.play();
};

function updateHorizontalPos(id) {
    var range = document.getElementById(id);
    
    switch (parseInt(range.value)) {
        case 0:
            characterX = 0;
            break;
        case 1:
            characterX = 40;
            break;
        case 2:
            characterX = 80;
            break;
        case 3:
            characterX = 120;
            break;
        case 4:
            characterX = 150;
            break;
        case 5:
            characterX = 170;
            break;
        case 6:
            characterX = 220;
            break;
    }
    redrawScene();
}

function updateVerticalPos(id) {
    var range = document.getElementById(id);

    switch (parseInt(range.value)) {
        case 0:
            characterY = -2;
            break;
        case 1:
            characterY = 20;
            break;
        case 2:
            characterY = 40;
            break;
        case 3:
            characterY = 60;
            break;
        case 4:
            characterY = 70;
            break;
        case 5:
            characterY = 75;
            break;
        case 6:
            characterY = 80;
            break;
    }
    redrawScene()
}

function redrawScene() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    var background = new Image();
    background.src = selectedBckgImg;
    background.onload = function () {
        context.drawImage(background, 0, 0, canvas.width, canvas.height);

        var character = new Image();
        character.src = "imgs/astronut.png";
        character.onload = function () {
            context.drawImage(character, characterX, characterY, 90, 80);
        };

        if (isItem1Visible) {
            var item1 = new Image();
            item1.src = 'imgs/astronut_jetpack.png';
            item1.onload = function () {
                context.drawImage(item1, 220, 50, 50, 50);
            };
        }

        if (isItem2Visible) {
            var item2 = new Image();
            item2.src = 'imgs/abduction.png';
            item2.onload = function () {
                context.drawImage(item2, 10, 0, 90, 110);
            };
        }

        if (isItem3Visible) {
            var item3 = new Image();
            item3.src = 'imgs/astronut_falling.png';
            item3.onload = function () {
                context.drawImage(item3, 150, 0, 60, 50);
            };
        }
    };
}
