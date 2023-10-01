document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            correctAnswer: "A",
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Venus", "Jupiter", "Saturn"],
            correctAnswer: "A",
        },
        {
            question: "What is the largest mammal on Earth?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            correctAnswer: "B",
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "B",
        },
        {
            question: "What is the capital of Japan?",
            options: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
            correctAnswer: "B",
        },
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionText = document.getElementById("question-text");
    const optionA = document.getElementById("optionA-text");
    const optionB = document.getElementById("optionB-text");
    const optionC = document.getElementById("optionC-text");
    const optionD = document.getElementById("optionD-text");
    const submitButton = document.getElementById("submit-btn");
    const nextButton = document.getElementById("next-btn");
    const resultText = document.getElementById("result");
    const scoreText = document.getElementById("score");

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        optionA.textContent = currentQuestion.options[0];
        optionB.textContent = currentQuestion.options[1];
        optionC.textContent = currentQuestion.options[2];
        optionD.textContent = currentQuestion.options[3];
    }

    // Uncheck all radio buttons when the page loads
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function (button) {
        button.checked = false;
    });

    function checkAnswer() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');

        if (!selectedAnswer) {
            resultText.textContent = "Please select an answer.";
            return;
        }

        const userAnswer = selectedAnswer.value;
        const currentQuestion = questions[currentQuestionIndex];

        if (userAnswer === currentQuestion.correctAnswer) {
            resultText.textContent = "Correct!";
            score++;
        } else {
            resultText.textContent = `Incorrect. The correct answer is ${currentQuestion.correctAnswer}`;
        }

        submitButton.disabled = true;
        nextButton.disabled = false;
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
            resultText.textContent = "";
            submitButton.disabled = false;
            nextButton.disabled = true;
        } else {
            // Quiz is completed
            showFinalScore();
        }
    }

    function showFinalScore() {
        questionText.textContent = "Quiz Completed";
        resultText.textContent = `Your Score: ${score} out of ${questions.length}`;
        submitButton.style.display = "none";
        nextButton.style.display = "none";
        scoreText.style.display = "none";
    }

    loadQuestion();

    submitButton.addEventListener("click", checkAnswer);
    nextButton.addEventListener("click", nextQuestion);
});
