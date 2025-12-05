const questions = [
    {
        text: "Which keyword declares a constant in JavaScript?",
        options: ["var", "let", "const", "static"],
        correctIndex: 2
    },
    {
        text: "Which method is used to log to the console?",
        options: ["print()", "log()", "console()", "console.log()"],
        correctIndex: 3
    },
    {
        text: "Which of these is NOT a JavaScript data type?",
        options: ["number", "string", "boolean", "character"],
        correctIndex: 3
    }
];

let currentQuestionIndex = 0;
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const questionCount = document.getElementById("question-count");
const nextBtn = document.getElementById("next-btn");
function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionCount.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    questionText.textContent = q.text;
    optionsContainer.innerHTML = "";
    q.options.forEach(option => {
        const p = document.createElement("p");
        p.textContent = option;
        p.className =
            "hover:scale-105 bg-gray-600 rounded-lg p-2 duration-300 cursor-pointer";
        optionsContainer.appendChild(p);
    });
}
nextBtn.addEventListener("click", () => {-
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionText.textContent = "Quiz Completed!";
        optionsContainer.innerHTML = "";
        questionCount.textContent = "";
        nextBtn.style.display = "none";
    }
});
loadQuestion();
