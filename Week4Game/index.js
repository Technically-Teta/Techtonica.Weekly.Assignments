

// How the game works

// The user clicks several responses to questions about pop culture
// at every question after the 1st one the user is asked if 
// they "wanna know what they know" which means are they ready to see
// the level of pop culture genius they have?

// A picture will appear that shows which level of knowledge they have
// for example if a user got all 10 questions correct they will 
// get a picture of Ken Jennings which is a calcultion of 10/10 
// Game will Track what numbers the user has already guessed and display those along with the picture 


// need event to trigger page // a form that takes in their name and email 
document.getElementById("play").addEventListener('click',(event) =>{
event.preventDefault();
// 1b.Create variables for the inputs
// username
const username = document.getElementById('user-name').value

})

const userForm = document.getElementById('uformid')
if(username !=" ") {
   uformid.innerText = `WELCOME TO THE GAME ${username}`
}else {
uformid.innerText = "Don't forget to enter your name!"
}

// make the form appear on button click
function myFunction() {
        let click = document.getElementById("container");
        if (click.style.display === "none") {
            click.style.display = "block";
        } else {
            click.style.display = "none";
        }
    }




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
       {text:'Quad City DJ', correct:true}
    ]
  }
]




//3. #Create all the buttons (even if they dont work)( to start game,to end game, to move to the next question -- let the same buttons appear on the page always)
//3. #write variable to handle displaying user name when they enter
//4. write variable to handle displaying thank you message when they quit
//5. find images for each count of questions ex.. if you only guess 2 correctly, what image will you see?
//6. test functionality of everthing thus far
//7. Create a function that returns the correct image 



function setQuestion(n) {
   const questionElement = document.getElementById('question');
   questionElement.textContent = questions[n];
}


setQuestion(0);

// button click events

// picture switch after they click what they want to do

// get from old project


