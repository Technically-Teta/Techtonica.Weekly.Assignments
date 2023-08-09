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
document.getElementById("user-form").addEventListener('userPlay-btn',(event) =>{

// 1b.Create variables for the inputs
// username
const username = document.getElementById('user-name').value
//email
const email = document.getElementById('user-email').value



})


// steps
//1. write out all the questions
//2. write all the answers
//3. Create all the buttons (even if they dont work)( to start game,to end game, to move to the next question -- let the same buttons appear on the page always)
//3. write variable to handle displaying user name when they enter
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


