function submitJavaQuiz() {
  console.log("submitted");

  // get each answer score
  function answerJavaScore(qJavaName) {
    var radiosJavaNo = document.getElementsByName(qJavaName);

    for (var i = 0, length = radiosJavaNo.length; i < length; i++) {
      if (radiosJavaNo[i].checked) {
        // do something with radiosNo
        var answerJavaValue = Number(radiosJavaNo[i].value);
      }
    }
    // change NaNs to zero
    if (isNaN(answerJavaValue)) {
      answerJavaValue = 0;
    }
    return answerJavaValue;
  }

  // calc score with answerScore function
  var calcJavaScore =
    answerJavaScore("JavaQ1") +
    answerJavaScore("JavaQ2") +
    answerJavaScore("JavaQ3") +
    answerJavaScore("JavaQ4") +
    answerJavaScore("JavaQ5") +
    answerJavaScore("JavaQ6") +
    answerJavaScore("JavaQ7") +
    answerJavaScore("JavaQ8") +
    answerJavaScore("JavaQ9") +
    answerJavaScore("JavaQ10");
  console.log("CalcJavaScore: " + calcJavaScore); // it works!

  // function to return correct answer string
  function correctJavaAnswer(correctJavaStringNo, qJavaNumber) {
    console.log("qJavaNumber: " + qJavaNumber); // logs 1,2,3,4 after called below
    return (
      "The correct answer for question #" +
      qJavaNumber +
      ": &nbsp;<strong>" +
      document.getElementById(correctJavaStringNo).innerHTML +
      "</strong>"
    );
  }

  // print correct answers only if wrong (calls correctAnswer function)
  if (answerJavaScore("JavaQ1") === 0) {
    document.getElementById("correctJavaAnswer1").innerHTML = correctJavaAnswer(
      "correctJavaString1",
      1
    );
  }
  if (answerJavaScore("JavaQ2") === 0) {
    document.getElementById("correctJavaAnswer2").innerHTML = correctJavaAnswer(
      "correctJavaString2",
      2
    );
  }
  if (answerJavaScore("JavaQ3") === 0) {
    document.getElementById("correctJavaAnswer3").innerHTML = correctJavaAnswer(
      "correctJavaString3",
      3
    );
  }
  if (answerJavaScore("qJavaQ4") === 0) {
    document.getElementById("correctJavaAnswer4").innerHTML = correctJavaAnswer(
      "correctJavaString4",
      4
    );
  }
  if (answerJavaScore("JavaQ5") === 0) {
    document.getElementById("correctJavaAnswer5").innerHTML = correctJavaAnswer(
      "correctJavaString5",
      5
    );
  }
  if (answerJavaScore("JavaQ6") === 0) {
    document.getElementById("correctJavaAnswer6").innerHTML = correctJavaAnswer(
      "correctJavaString6",
      6
    );
  }
  if (answerJavaScore("JavaQ7") === 0) {
    document.getElementById("correctJavaAnswer7").innerHTML = correctJavaAnswer(
      "correctJavaString7",
      7
    );
  }
  if (answerJavaScore("JavaQ8") === 0) {
    document.getElementById("correctJavaAnswer8").innerHTML = correctJavaAnswer(
      "correctString8",
      8
    );
  }
  if (answerJavaScore("JavaQ9") === 0) {
    document.getElementById("correctJavaAnswer9").innerHTML = correctJavaAnswer(
      "correctJavaString9",
      9
    );
  }
  if (answerJavaScore("JavaQ10") === 0) {
    document.getElementById("correctJavaAnswer10").innerHTML =
      correctJavaAnswer("correctJavaString10", 10);
  }

  // calculate "possible score" integer
  var questionCountJavaArray = document.getElementsByClassName("JavaQuestion");

  var JavaQuestionCounter = 0;
  for (var i = 0, length = questionCountJavaArray.length; i < length; i++) {
    JavaQuestionCounter++;
  }

  // show score as "score/possible score"
  var showJavaScore =
    "Your Score: " + calcJavaScore + "/" + JavaQuestionCounter;
  // if 10/10, "perfect score!"
  if (calcJavaScore === JavaQuestionCounter) {
    showJavaScore = showJavaScore + "&nbsp; <strong>Perfect Score!</strong>";
  }
  document.getElementById("userJavaScore").innerHTML = showJavaScore;
}

$(document).ready(function () {
  $("#submitJavaButton").click(function () {
    $(this).addClass("hide");
  });
});

function submitCSSQuiz() {
  console.log("submitted");

  // get each answer score
  function answerCSSScore(qCSSName) {
    var radiosCSSNo = document.getElementsByName(qCSSName);

    for (var i = 0, length = radiosCSSNo.length; i < length; i++) {
      if (radiosCSSNo[i].checked) {
        // do something with radiosNo
        var answerCSSValue = Number(radiosCSSNo[i].value);
      }
    }
    // change NaNs to zero
    if (isNaN(answerCSSValue)) {
      answerCSSValue = 0;
    }
    return answerCSSValue;
  }

  // calc score with answerScore function
  var calcCSSScore =
    answerCSSScore("CSSQ1") +
    answerCSSScore("CSSQ2") +
    answerCSSScore("CSSQ3") +
    answerCSSScore("CSSQ4") +
    answerCSSScore("CSSQ5") +
    answerCSSScore("CSSQ6") +
    answerCSSScore("CSSQ7") +
    answerCSSScore("CSSQ8") +
    answerCSSScore("CSSQ9") +
    answerCSSScore("CSSQ10");
  console.log("CalcCSSScore: " + calcCSSScore); // it works!

  // function to return correct answer string
  function correctCSSAnswer(correctCSSStringNo, qCSSNumber) {
    console.log("qCSSNumber: " + qCSSNumber); // logs 1,2,3,4 after called below
    return (
      "The correct answer for question #" +
      qCSSNumber +
      ": &nbsp;<strong>" +
      document.getElementById(correctCSSStringNo).innerHTML +
      "</strong>"
    );
  }

  // print correct answers only if wrong (calls correctAnswer function)
  if (answerCSSScore("CSSQ1") === 0) {
    document.getElementById("correctCSSAnswer1").innerHTML = correctCSSAnswer(
      "correctCSSString1",
      1
    );
  }
  if (answerCSSScore("CSSQ2") === 0) {
    document.getElementById("correctCSSAnswer2").innerHTML = correctCSSAnswer(
      "correctCSSString2",
      2
    );
  }
  if (answerCSSScore("CSSQ3") === 0) {
    document.getElementById("correctCSSAnswer3").innerHTML = correctCSSAnswer(
      "correctCSSString3",
      3
    );
  }
  if (answerCSSScore("CSSQ4") === 0) {
    document.getElementById("correctCSSAnswer4").innerHTML = correctCSSAnswer(
      "correctCSSString4",
      4
    );
  }
  if (answerCSSScore("CSSQ5") === 0) {
    document.getElementById("correctCSSAnswer5").innerHTML = correctCSSAnswer(
      "correctCSSString5",
      5
    );
  }
  if (answerCSSScore("CSSQ6") === 0) {
    document.getElementById("correctCSSAnswer6").innerHTML = correctCSSAnswer(
      "correctCSSString6",
      6
    );
  }
  if (answerCSSScore("CSSQ7") === 0) {
    document.getElementById("correctCSSAnswer7").innerHTML = correctCSSAnswer(
      "correctCSSString7",
      7
    );
  }
  if (answerCSSScore("CSSQ8") === 0) {
    document.getElementById("correctCSSAnswer8").innerHTML = correctCSSAnswer(
      "correctCSSString8",
      8
    );
  }
  if (answerCSSScore("CSSQ9") === 0) {
    document.getElementById("correctCSSAnswer9").innerHTML = correctCSSAnswer(
      "correctCSSString9",
      9
    );
  }
  if (answerCSSScore("CSSQ10") === 0) {
    document.getElementById("correctCSSAnswer10").innerHTML = correctCSSAnswer(
      "correctCSSString10",
      10
    );
  }

  // calculate "possible score" integer
  var questionCountCSSArray = document.getElementsByClassName("CSSQuestion");

  var CSSQuestionCounter = 0;
  for (var i = 0, length = questionCountCSSArray.length; i < length; i++) {
    CSSQuestionCounter++;
  }

  // show score as "score/possible score"
  var showCSSScore = "Your Score: " + calcCSSScore + "/" + CSSQuestionCounter;
  // if 4/4, "perfect score!"
  if (calcCSSScore === CSSQuestionCounter) {
    showCSSScore = showCSSScore + "&nbsp; <strong>Perfect Score!</strong>";
  }
  document.getElementById("userCSSScore").innerHTML = showCSSScore;
}

$(document).ready(function () {
  $("#submitCSSButton").click(function () {
    $(this).addClass("hide");
  });
});

function submitHTMLQuiz() {
  console.log("submitted");

  // get each answer score
  function answerHTMLScore(qHTMLName) {
    var radiosHTMLNo = document.getElementsByName(qHTMLName);

    for (var i = 0, length = radiosHTMLNo.length; i < length; i++) {
      if (radiosHTMLNo[i].checked) {
        // do something with radiosNo
        var answerHTMLValue = Number(radiosHTMLNo[i].value);
      }
    }
    // change NaNs to zero
    if (isNaN(answerHTMLValue)) {
      answerHTMLValue = 0;
    }
    return answerHTMLValue;
  }

  // calc score with answerScore function
  var calcHTMLScore =
    answerHTMLScore("HTMLQ1") +
    answerHTMLScore("HTMLQ2") +
    answerHTMLScore("HTMLQ3") +
    answerHTMLScore("HTMLQ4") +
    answerHTMLScore("HTMLQ5") +
    answerHTMLScore("HTMLQ6") +
    answerHTMLScore("HTMLQ7") +
    answerHTMLScore("HTMLQ8") +
    answerHTMLScore("HTMLQ9") +
    answerHTMLScore("HTMLQ10");
  console.log("CalcHTMLScore: " + calcHTMLScore); // it works!

  // function to return correct answer string
  function correctHTMLAnswer(correctHTMLStringNo, qHTMLNumber) {
    console.log("qHTMLNumber: " + qHTMLNumber); // logs 1,2,3,4 after called below
    return (
      "The correct answer for question #" +
      qHTMLNumber +
      ": &nbsp;<strong>" +
      document.getElementById(correctHTMLStringNo).innerHTML +
      "</strong>"
    );
  }

  // print correct answers only if wrong (calls correctAnswer function)
  if (answerHTMLScore("HTMLQ1") === 0) {
    document.getElementById("correctHTMLAnswer1").innerHTML = correctHTMLAnswer(
      "correctHTMLString1",
      1
    );
  }
  if (answerHTMLScore("HTMLQ2") === 0) {
    document.getElementById("correctHTMLAnswer2").innerHTML = correctHTMLAnswer(
      "correctHTMLString2",
      2
    );
  }
  if (answerHTMLScore("HTMLQ3") === 0) {
    document.getElementById("correctHTMLAnswer3").innerHTML = correctHTMLAnswer(
      "correctHTMLString3",
      3
    );
  }
  if (answerHTMLScore("HTMLQ4") === 0) {
    document.getElementById("correctHTMLAnswer4").innerHTML = correctHTMLAnswer(
      "correctHTMLString4",
      4
    );
  }
  if (answerHTMLScore("HTMLQ5") === 0) {
    document.getElementById("correctHTMLAnswer5").innerHTML = correctHTMLAnswer(
      "correctHTMLString5",
      5
    );
  }
  if (answerHTMLScore("HTMLQ6") === 0) {
    document.getElementById("correctHTMLAnswer6").innerHTML = correctHTMLAnswer(
      "correctHTMLString6",
      6
    );
  }
  if (answerHTMLScore("HTMLQ7") === 0) {
    document.getElementById("correctHTMLAnswer7").innerHTML = correctHTMLAnswer(
      "correctHTMLString7",
      7
    );
  }
  if (answerHTMLScore("HTMLQ8") === 0) {
    document.getElementById("correctHTMLAnswer8").innerHTML = correctHTMLAnswer(
      "correctHTMLString8",
      8
    );
  }
  if (answerHTMLScore("HTMLQ9") === 0) {
    document.getElementById("correctHTMLAnswer9").innerHTML = correctHTMLAnswer(
      "correctHTMLString9",
      9
    );
  }
  if (answerHTMLScore("HTMLQ10") === 0) {
    document.getElementById("correctHTMLAnswer10").innerHTML =
      correctHTMLAnswer("correctHTMLString10", 10);
  }

  // calculate "possible score" integer
  var questionCountHTMLArray = document.getElementsByClassName("HTMLQuestion");

  var HTMLQuestionCounter = 0;
  for (var i = 0, length = questionCountHTMLArray.length; i < length; i++) {
    HTMLQuestionCounter++;
  }

  // show score as "score/possible score"
  var showHTMLScore =
    "Your Score: " + calcHTMLScore + "/" + HTMLQuestionCounter;
  // if 4/4, "perfect score!"
  if (calcHTMLScore === HTMLQuestionCounter) {
    showHTMLScore = showHTMLScore + "&nbsp; <strong>Perfect Score!</strong>";
  }
  document.getElementById("userHTMLScore").innerHTML = showHTMLScore;
}

$(document).ready(function () {
  $("#submitHTMLButton").click(function () {
    $(this).addClass("hide");
  });
});

function submitJavaScriptQuiz() {
  console.log("submitted");

  // get each answer score
  function answerJavaScriptScore(qJavaScriptName) {
    var radiosJavaScriptNo = document.getElementsByName(qJavaScriptName);

    for (var i = 0, length = radiosJavaScriptNo.length; i < length; i++) {
      if (radiosJavaScriptNo[i].checked) {
        // do something with radiosNo
        var answerJavaScriptValue = Number(radiosJavaScriptNo[i].value);
      }
    }
    // change NaNs to zero
    if (isNaN(answerJavaScriptValue)) {
      answerJavaScriptValue = 0;
    }
    return answerJavaScriptValue;
  }

  // calc score with answerScore function
  var calcJavaScriptScore =
    answerJavaScriptScore("JavaScriptQ1") +
    answerJavaScriptScore("JavaScriptQ2") +
    answerJavaScriptScore("JavaScriptQ3") +
    answerJavaScriptScore("JavaScriptQ4") +
    answerJavaScriptScore("JavaScriptQ5") +
    answerJavaScriptScore("JavaScriptQ6") +
    answerJavaScriptScore("JavaScriptQ7") +
    answerJavaScriptScore("JavaScriptQ8") +
    answerJavaScriptScore("JavaScriptQ9") +
    answerJavaScriptScore("JavaScriptQ10");
  console.log("CalcJavaScriptScore: " + calcJavaScriptScore); // it works!

  // function to return correct answer string
  function correctJavaScriptAnswer(
    correctJavaScriptStringNo,
    qJavaScriptNumber
  ) {
    console.log("qJavaScriptNumber: " + qJavaScriptNumber); // logs 1,2,3,4 after called below
    return (
      "The correct answer for question #" +
      qJavaScriptNumber +
      ": &nbsp;<strong>" +
      document.getElementById(correctJavaScriptStringNo).innerHTML +
      "</strong>"
    );
  }

  // print correct answers only if wrong (calls correctAnswer function)
  if (answerJavaScriptScore("JavaScriptQ1") === 0) {
    document.getElementById("correctJavaScriptAnswer1").innerHTML =
      correctJavaScriptAnswer("correctJavaScriptString1", 1);
  }
  if (answerJavaScriptScore("JavaScriptQ2") === 0) {
    document.getElementById("correctJavaScriptAnswer2").innerHTML =
      correctJavaScriptAnswer("correctJavaScriptString2", 2);
  }
  if (answerJavaScriptScore("JavaScriptQ3") === 0) {
    document.getElementById("correctJavaScriptAnswer3").innerHTML =
      correctJavaScriptAnswer("correctJavaScriptString3", 3);
  }
  if (answerJavaScriptScore("JavaScriptQ4") === 0) {
    document.getElementById("correctJavaScriptAnswer4").innerHTML =
      correctJavaScriptAnswer("correctJavaScriptString4", 4);
  }
  if (answerJavaScriptScore("JavaScriptQ5") === 0) {
    document.getElementById("correctJavaScriptAnswer5").innerHTML =
      correctJavaScriptAnswer("correctJavaScriptString5", 5);
  }
  if (answerJavaScriptScore("JavaScriptQ6") === 0) {
    document.getElementById("correctJavaScriptAnswer6").innerHTML =
      correctJavaScriptAnswer("correctJavaScriptString6", 6);
  }
  if (answerJavaScriptScore("JavaScriptQ7") === 0) {
    document.getElementById("correctJavaScriptAnswer7").innerHTML =
      correctJavaScriptAnswer("correctJavaScriptString7", 7);
  }
  if (answerJavaScriptScore("JavaScriptQ8") === 0) {
    document.getElementById("correctJavaScriptAnswer8").innerHTML =
      correctJavaScriptAnswer("correctJavaScriptString8", 8);
  }
  if (answerJavaScriptScore("JavaScriptQ9") === 0) {
    document.getElementById("correctJavaScriptAnswer9").innerHTML =
      correctJavaScriptAnswer("correctJavaScriptString9", 9);
  }
  if (answerJavaScriptScore("JavaScriptQ10") === 0) {
    document.getElementById("correctJavaScriptAnswer10").innerHTML =
      correctJavaScriptAnswer("correctJavaScriptString10", 10);
  }

  // calculate "possible score" integer
  var questionCountJavaScriptArray =
    document.getElementsByClassName("JavaScriptQuestion");

  var JavaScriptQuestionCounter = 0;
  for (
    var i = 0, length = questionCountJavaScriptArray.length;
    i < length;
    i++
  ) {
    JavaScriptQuestionCounter++;
  }

  // show score as "score/possible score"
  var showJavaScriptScore =
    "Your Score: " + calcJavaScriptScore + "/" + JavaScriptQuestionCounter;
  // if 4/4, "perfect score!"
  if (calcJavaScriptScore === JavaScriptQuestionCounter) {
    showJavaScriptScore =
      showJavaScriptScore + "&nbsp; <strong>Perfect Score!</strong>";
  }
  document.getElementById("userJavaScriptScore").innerHTML =
    showJavaScriptScore;
}

$(document).ready(function () {
  $("#submitJavaScriptButton").click(function () {
    $(this).addClass("hide");
  });
});

