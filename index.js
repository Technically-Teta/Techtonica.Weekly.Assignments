const playButton = document.getElementById("play");
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question=container');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentquestion;



document.getElementById("userNameForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get the entered username from the form
  const username = document.getElementById("username").value;

  // Display a message on the screen including the username
  const messageElement = document.createElement("p");
  messageElement.textContent = `Thank you ${username} click the play button to get started!`;
  document.body.appendChild(messageElement);
});



// Btn starts game *** check error
playButton.addEventListener('click', startGame);
nextButton.addEventListener('click', ()=>{
  currentQuestionIndex++
  setNextQuestion()
})

function startGame(){
   console.log('did it start?');
   playButton.classList.add('hide');
   shuffledQuestions =questions.sort(() => Math.random() - .5 );
   currentQuestionIndex = 0;
   questionContainerElement.classList.remove('hide');
   setNextQuestion()

}

function setNextQuestion() {
  resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button= document.createElement('button')
    button.innerText= answer.text
    button.classList.add('btn')
    if(answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button)
})
}

function resetState(){
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while(answerButtonsElement.firstChild){
     answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}


function selectAnswer(e){
  const selectButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body,correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if(shuffleQuestions.length > currentQuestionIndex +1){
     nextButton.classList.remove('hide')
  }else{
    playButton.innerText = 'Restart'
    playButton.classList.remove('hide')
  }
  
}

function setStatusClass(element,correct){
  clearStatusClass(element)
  if(correct){
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
 
}


// // Display the question container
//     const questionContainer = document.getElementById('question-container');
//     questionContainer.classList.remove('hide');

// // make the form appear on button click
// function myFunction() {
//         let click = document.getElementById("container");
//         if (click.style.display === "none") {
//             click.style.display = "block";
//         } else {
//             click.style.display = "none";
//         }
//     }
// })



// steps
//1. write out all the questions + answers
const questions = [
  {
    question: 'What spearheading Actress is spearheading the current SAG actors strike?',
    answers: [
      { text: 'Gloria Steinum', correct: false },
      { text: 'David Dacoveny', correct: false },
      {text: 'Fran Drescher', correct:true}
    ]
  },
  {
    question: 'Who is banned from the Oscars for the next 10 years?',
    answers: [
      { text: 'James Cameron', correct: false },
      { text: 'Eddie Murphy', correct: false },
      { text: 'Will Smith', correct: true },
      { text: 'Darral Sanders', correct: false }
    ]
  },
  {
    question: ' Who is TIME Magazines Person of the Year of 2022? ',
    answers: [
      { text: 'President Volodymyr Zelensky ', correct: true },
      { text: 'Donald Trump', correct: false},
      { text: 'The Rock', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What Musical Artist is NOT on tour?',
    answers: [
      { text: 'Taylor Swift', correct: false },
      { text: 'Drake', correct: false },
       { text: 'Anita Baker', correct: true },
       {text:'Quad City DJs', correct:true}
    ]
  }
]





// function setQuestion(n) {
//    const questionElement = document.getElementById('question');
//    questionElement.textContent = questions[n];
// }


// setQuestion(0);



