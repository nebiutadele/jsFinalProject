const quizCont = document.getElementById("quiz");
const resultsCont = document.getElementById("results");
const submitBtn = document.getElementById("submit");

function buildQuiz() {
  const output = [];

  JavaQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${1}" value="${letter}"> 
          ${letter} :
          ${currentQuestion.answers[letter]}
          </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
    );
  });

  quizCont.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");
  let numCorrect = 0;

  JavaQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;

      answerContainers[questionNumber].style.color = "lightgreen";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

buildQuiz();

submitBtn.addEventListener("click", showResults);

const JavaQuestions = [
  {
    question:
      "A collection of data items, all of the same type, in which each item's position is uniquely designed by an integer.",
    answers: {
      A: "abstract",
      B: "array",
      C: "autoboxing",
      D: "integer",
    },
    correctAnswer: "B",
  },
  {
    question:
      "A java keyword used in a class definition to specify that a class is not to be instantiated, but rather inherited.",
    answers: {
      A: "abstract",
      B: "array",
      C: "casting",
      D: "double",
    },
    correctAnswer: "A",
  },
  {
    question:
      "An event during program execution that prevents the program from continuing normally; an error",
    answers: {
      A: "extends",
      B: "identifier",
      C: "exception",
      D: "inheritance",
    },
    correctAnswer: "C",
  },
  {
    question:
      "A data item known within a block, but inaccessible to code outside the block.",
    answers: {
      A: "instance variable",
      B: "local variable",
      C: "The best variable",
      D: "method",
    },
    correctAnswer: "B",
  },
  {
    question:
      "Using one identifier to refer to multiple items in the same scope.",
    answers: {
      A: "overdoingit",
      B: "overloading",
      C: "overriding",
      D: "package",
    },
    correctAnswer: "B",
  },
  {
    question:
      "A variable data type in which the variable's value is of the appropriate size and format for its type.",
    answers: {
      A: "primitive type",
      B: "secondary type",
      C: "privilege",
      D: "class",
    },
    correctAnswer: "A",
  },
  {
    question:
      "It signifies that the method or variable can be accessed by elements residing in other classes.",
    answers: {
      A: "private",
      B: "encrypted",
      C: "protected",
      D: "public",
    },
    correctAnswer: "D",
  },
  {
    question:
      "A Java keyword used in method declarations to specify that the method does not return any value.",
    answers: {
      A: "exit",
      B: "while",
      C: "void",
      D: "for",
    },
    correctAnswer: "C",
  },
  {
    question:
      "An object that encapsulates and delegates to another object to alter its interface or behavior in some way.",
    answers: {
      A: "Unicode",
      B: "throw",
      C: "variable",
      D: "wrapper",
    },
    correctAnswer: "D",
  },
  {
    question: "Automatic conversion between reference and primitive types.",
    answers: {
      A: "autobots",
      B: "authentication",
      C: "break",
      D: "autoboxing",
    },
    correctAnswer: "D",
  },
];

const CSSQuestions = [
  {
    question: "What does CSS stand for?",
    answers: {
      A: "Cascading Style Sheets",
      B: "Computer Style Sheets",
      C: "Coloful Style Sheets",
      D: "Creative Style Sheets",
    },
    correctAnswer: "A",
  },
  {
    question: "How do you insert a comment in a CSS file?",
    answers: {
      A: "/* this is a comment */",
      B: "// this is a comment",
      C: "// this is a comment //",
      D: "'this is a comment",
    },
    correctAnswer: "A",
  },
  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    answers: {
      A: "In the <body> section",
      B: "In the <head> section",
      C: "At the end of the document",
      D: "It doesn't matter",
    },
    correctAnswer: "B",
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    answers: {
      A: "select.all {background-color:#FFFFFF;}",
      B: "h1 {background-color:#FFFFFF;}",
      C: "all.h1 {background-color:#FFFFFF;}",
      D: "h1.all {background-color:#FFFFFF;}",
    },
    correctAnswer: "B",
  },
  {
    question: "Which property is used to change the background color?",
    answers: {
      A: "color",
      B: "background-color",
      C: "change: background color",
      D: "bgcolor",
    },
    correctAnswer: "B",
  },
  {
    question: "Which property is used to change the font of an element?",
    answers: {
      A: "font-style",
      B: "font-family",
      C: "font-change",
      D: "font-weight",
    },
    correctAnswer: "B",
  },
  {
    question: "Which CSS property controls the text size?",
    answers: {
      A: "text-size",
      B: "text-style",
      C: "font-style",
      D: "font-size",
    },
    correctAnswer: "D",
  },
  {
    question: "Which property is used to change the left margin of an element?",
    answers: {
      A: "margin-left",
      B: "padding-left",
      C: "left-margin",
      D: "indent",
    },
    correctAnswer: "A",
  },
  {
    question: "How do you select an element with id 'practice?",
    answers: {
      A: "practice",
      B: "#practice",
      C: ".practice",
      D: "$practice",
    },
    correctAnswer: "B",
  },
  {
    question: "How do you select an element with the class 'practice'?",
    answers: {
      A: ".practice",
      B: "#practice",
      C: "$practice",
      D: "c.practice",
    },
    correctAnswer: "A",
  },
];

const HTMLQuestions = [
  {
    question: "What does HTML stand for",
    answers: {
      A: "Hyperlink Tool Markup Language",
      B: "Hyperlinks and Text Markup Language",
      C: "Home Tool Markup Language",
      D: "Hyper Text Markup Language",
    },
    correctAnswer: "D",
  },
  {
    question: "Choose the correct HTML element for the largest heading.",
    answers: {
      A: "<h6>",
      B: "<heading>",
      C: "<h1>",
      D: "<head>",
    },
    correctAnswer: "C",
  },
  {
    question: "How can you make a numbered list?",
    answers: {
      A: "<ul>",
      B: "<list>",
      C: "<ol>",
      D: "<dl>",
    },
    correctAnswer: "C",
  },
  {
    question: "Which HTML element defines the title of a document?",
    answers: {
      A: "<head>",
      B: "<meta>",
      C: "<document>",
      D: "<title>",
    },
    correctAnswer: "D",
  },
  {
    question: "What is the correct HTML element for playing video files?",
    answers: {
      A: "<video>",
      B: "<mp3>",
      C: "<media>",
      D: "<movie>",
    },
    correctAnswer: "A",
  },
  {
    question: "In HTML, onblur and onfocus are:",
    answers: {
      A: "Event elements",
      B: "Style attributes",
      C: "Image attributes",
      D: "HTML elements",
    },
    correctAnswer: "A",
  },
  {
    question: "What is the correct HTML element for playing audio files?",
    answers: {
      A: "<mp3>",
      B: "<audio>",
      C: "<video>",
      D: "<sound>",
    },
    correctAnswer: "B",
  },
  {
    question:
      "In HTML, which attribute is used to specify that an input field must be filled out?",
    answers: {
      A: "validate",
      B: "form",
      C: "required",
      D: "placeholder",
    },
    correctAnswer: "C",
  },
  {
    question: "Which HTML element defines navigation links?",
    answers: {
      A: "<navigation>",
      B: "<navigate>",
      C: "<nav>",
      D: "<nav.link>",
    },
    correctAnswer: "C",
  },
  {
    question: "Choose the correct HTML element to define emphasized text.",
    answers: {
      A: "<emp>",
      B: "<italic>",
      C: "<i>",
      D: "<em>",
    },
    correctAnswer: "D",
  },
];

const JavaScriptQuestions = [
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: {
      A: "The <body> section>",
      B: "The <head> section>",
      C: "Both the <body> and <head> sections",
      D: "The <div> section",
    },
    correctAnswer: "C",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
      A: "<scripting>",
      B: "<script>",
      C: "<javascript",
      D: "<js>",
    },
    correctAnswer: "B",
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: {
      A: "function = myFunction()",
      B: "function myFunction()",
      C: "function:myFunction()",
      D: "function = function()",
    },
    correctAnswer: "B",
  },
  {
    question: "How do you write an IF statement in JavaScript?",
    answers: {
      A: "if i == 5 then",
      B: "if i = 5",
      C: "if (i == 5)",
      D: "if i = 5 then",
    },
    correctAnswer: "C",
  },
  {
    question: "How do you call a function named myFunction?",
    answers: {
      A: "call myFunction()",
      B: "myFunction()",
      C: "call function myFunction()",
      D: "call = myFunction()",
    },
    correctAnswer: "B",
  },
  {
    question:
      "How do you write an IF statement for executing code if i is NOT equal to 5?",
    answers: {
      A: "if i <> 5",
      B: "if (i!=5)",
      C: "if i=! 5 then",
      D: "if (i<>5)",
    },
    correctAnswer: "B",
  },
  {
    question: "How do you start a WHILE loop in JavaScript?",
    answers: {
      A: "WHILE ( == 10)",
      B: "while ( <= 10)",
      C: "while i = 1 to 10",
      D: "while (i <= 10; i++)",
    },
    correctAnswer: "B",
  },
  {
    question: "How do you add a comment in JavaScript?",
    answers: {
      A: "//This is a comment",
      B: "$This is a comment",
      C: "'This is a comment",
      D: "<!--This is a comment",
    },
    correctAnswer: "A",
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    answers: {
      A: "ceil(x,y)",
      B: "Math.max(x,y)",
      C: "top(x,y)",
      D: "Math.ceil(x,y)",
    },
    correctAnswer: "B",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: {
      A: "onmouseclick",
      B: "onclick",
      C: "onchange",
      D: "onmouseover",
    },
    correctAnswer: "B",
  },
];
