let startBtn = document.querySelector(".start-btn");
let questionContainer = document.querySelector(".question-container");
let question = document.querySelector(".quiz-question");
let ul = document.querySelector(".option-list");
let nextBtn = document.querySelector(".next-question");
let restartBtn = document.querySelector(".reset-quiz");
let scoreHeading = document.querySelector(".score-heading");
let scoreDisplay = document.querySelector(".score");
let currentQuestionIndex = 0;
let score = 0;


let questions = [
{
    question: "Which one of the following is capital of France?",
    options: ["Berlin", "Karachi", "London", "Paris"],
    answer: "Paris"
},
{
    question: "Which is the most populated country in the world?",
    options: ["India", "China", "America", "Canada"],
    answer: "India"
},
{
    question: "Which city has least crime rate in 2025?",
    options: ["Berlin", "Lahore", "London", "Abu Dhabi"],
    answer: "Abu Dhabi"
},
];

document.addEventListener('DOMContentLoaded', () => {
    startBtn.addEventListener('click', showQuestion);

    function showQuestion() {
        startBtn.classList.add('hidden')
        questionContainer.classList.remove('hidden');
        question.classList.remove('hidden');
        question.textContent = "";
        ul.innerHTML = "";
        question.textContent = questions[currentQuestionIndex].question;
        ul.classList.remove('hidden');
        questions[currentQuestionIndex].options.forEach((choice) => {
            let li = document.createElement('li');
            li.innerHTML = `${choice}`;
            li.style.cursor = "pointer";
            li.addEventListener('click', function() {
                console.log(li.textContent);
                let allOption = ul.querySelectorAll("li");
                allOption.forEach((option) => option.classList.remove("selected"));
                li.classList.add('selected');
                checkAnswer(li.textContent);
            })
            ul.appendChild(li);
            nextBtn.classList.remove('hidden');
            nextBtn.addEventListener('click', moveToNextQuestion)
        })
    }
    
    function checkAnswer(choice) {
        let correctAnswer = questions[currentQuestionIndex].answer;
        if(correctAnswer === choice) {
            score++;
        }
        else {
            score = score;
        }
    }

    function moveToNextQuestion() {
        if(currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        }else {
            questionContainer.classList.add('hidden');
            ul.classList.add('hidden');
            nextBtn.classList.add('hidden');
            startBtn.classList.add('hidden');
            restartBtn.classList.remove('hidden');
            scoreHeading.classList.remove('hidden');
            scoreDisplay.classList.remove('hidden');
            scoreDisplay.textContent = `${score}`;
            restartBtn.addEventListener('click', startAgain);
        }
    }

    function startAgain() {
        currentQuestionIndex = 0;
        score = 0;
        scoreHeading.classList.add('hidden');
        scoreDisplay.classList.add('hidden');
        restartBtn.classList.add('hidden');
        startBtn.classList.remove('hidden');
    }
})