const canvas = document.getElementById("brain");
const ctx = canvas.getContext("2d");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

let selectedAnswer = null;
let currentQuestion = 0;
let brainParts = [];

const brain = new Image();
brain.src = "assets/brain.png";
brain.onload = () => drawBrain();

fetch("brainData.json")
    .then(res => res.json())
    .then(data => {
        brainParts = data.brainParts;
        shuffle(brainParts);
        loadQuestion();
    });

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function drawBrain(partTitle = null) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(brain, 0, 0, canvas.width, canvas.height);

    if (partTitle) {
        const part = brainParts.find(p => p.title === partTitle);
        if (part && part.highlight) {
            const { x, y, r } = part.highlight;
            ctx.fillStyle = "rgba(0, 255, 255, 0.6)";
            ctx.shadowColor = "#00ffff";
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }
}

function loadQuestion() {
    document.getElementById("quizQuestion").textContent =
        brainParts[currentQuestion].question;

    selectedAnswer = null;
    document.getElementById("explanationBox").style.display = "none";
    document.getElementById("nextButton").style.display = "none";

    drawBrain();
}

function selectPart(event, partName) {
    selectedAnswer = partName;

    const buttons = document.querySelectorAll("#brainMenu button");
    buttons.forEach(btn => btn.classList.remove("selected"));
    
    event.target.classList.add("selected");
}

function submitAnswer() {
    if (!selectedAnswer) {
        alert("Select an answer first!");
        return;
    }

    const correct = brainParts[currentQuestion].title;

    if (selectedAnswer === correct) {
        drawBrain(correct);

        document.getElementById("brainPartTitle").textContent = brainParts[currentQuestion].title;
        document.getElementById("brainPartDesc").textContent = brainParts[currentQuestion].description;
        document.getElementById("explanationBox").style.display = "block";
        document.getElementById("nextButton").style.display = "block";

        const audio = new Audio("assets/correct.mp3");
        audio.play();
    } else {
        const audio = new Audio("assets/wrong.mp3");
        audio.play();

        const buttons = document.querySelectorAll("#brainMenu button");
        
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= brainParts.length) {
        document.getElementById("nextButton").textContent = "";
        alert("You’ve completed the quiz!");
        currentQuestion = 0;
        shuffle(brainParts);
    } else {
        document.getElementById("nextButton").textContent = "Next";
    }

    const buttons = document.querySelectorAll("#brainMenu button");
    buttons.forEach(btn => btn.classList.remove("selected"));

    loadQuestion();
}