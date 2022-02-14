const quizCont = document.getElementById("quiz");
const resultsCont = document.getElementById("results");
const submitBtn = document.getElementById("submit");

function buildQuiz() {}

function showResults() {}

buildQuiz();

submitBtn.addEventListener("click", showResults);

const Questions = [
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
