const quizQuestions = [
  { question: "What is the capital of India?", answer: "delhi" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "What is the largest ocean on Earth?", answer: "pacific" },
  { question: "Who wrote 'Harry Potter'?", answer: "j.k. rowling" },
  { question: "What is 5 + 7?", answer: "12" }
];

function runQuiz() {
  let score = 0; // 

  for (let i = 0; i < quizQuestions.length; i++) {
    const userAnswer = prompt(quizQuestions[i].question);


    if (userAnswer === null) {
      alert("You skipped this question.");
      continue;
    }


    const cleanedAnswer = userAnswer.toLowerCase().trim();

   
    if (cleanedAnswer === quizQuestions[i].answer) {
      alert("Correct! ");
      score++;
    } else {
      alert("Wrong Correct answer: " + quizQuestions[i].answer);
    }
  }

  alert("Quiz Completed!\nYour Score: " + score + " / " + quizQuestions.length);
}


runQuiz();
