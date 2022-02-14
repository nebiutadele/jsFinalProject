const quizCont = document.getElementById('quiz');
const resultsCont = document.getElementById('results');
const submitBtn = document.getElementById('submit');

function buildQuiz() {

}

function showResults() {

}

buildQuiz();

submitBtn.addEventListener('click', showResults);

const Questions = [
    {
        question: "A collection of data items, all of the same type, in which each item's position is uniquely designed by an integer.",
        answers: {
            A: "abstract",
            B: "array",
            C: "autoboxing",
            D: "integer"
        },
        correctAnswer: "B"
    },
    {
        question: "A java keyword used in a class definition to specify that a class is not to be instantiated, but rather inherited.",
        answers: {
            A: "abstract",
            B: "array",
            C: "casting",
            D: "double",
        },
        correctAnswer: "A"
    },
    {
        
    }
]