/*Add your JavaScript here*/

var netflixScore = 0; //Stores the total score for Netflix
var disneyScore = 0; //Stores the total score for Disney+
var huluScore = 0; //Stores the total score for Hulu

var questionCount = 0; //Stores the total number of questions answered

var restart = 0; //Variable for restart button

var reveal = 0; //Variable for revealing the results button


//Connecting each answer button to JS

//Var Question 1
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

//Var Question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

//Var Question 3
/*var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");*/

//Var Question 4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

//Var Question 5
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");

//Var result
var result = document.getElementById("result");

//Var restart
var restart = document.getElementById("restart");

//Var reveal
var reveal = document.getElementById("reveal");

//Adding event listeners to each separate answer button

//Q1
q1a1.addEventListener("click", netflix);
q1a2.addEventListener("click", disney);
q1a3.addEventListener("click", hulu);

//Q2
q2a1.addEventListener("click", disney);
q2a2.addEventListener("click", netflix);
q2a3.addEventListener("click", hulu);

//Q3
/*q3a1.addEventListener("click", disney);
q3a2.addEventListener("click", hulu);
q3a3.addEventListener("click", netflix);*/

//Q4
q4a1.addEventListener("click", hulu);
q4a2.addEventListener("click", netflix);
q4a3.addEventListener("click", disney);

//Q5
q5a1.addEventListener("click", netflix);
q5a2.addEventListener("click", hulu);
q5a3.addEventListener("click", disney);

//Restart button
restart.addEventListener("click", resetQuiz);

//Creating a function for each of the possible outcomes

//NETFLIX
function netflix() {
  netflixScore += 1;
  questionCount += 1;
  console.log("questionCount = " +questionCount + " netflixScore = " + netflixScore);
  if (questionCount == 4) {
    console.log("Quiz is complete.")
    //updatedResult();
  }
}

//DISNEY
function disney() {
  disneyScore += 1;
  questionCount += 1;
  console.log("questionCount = " +questionCount + " disneyScore = " + disneyScore);
  if (questionCount == 4) {
    console.log("Quiz is complete.")
    //updatedResult();
  }
}

//HULU
function hulu() {
  huluScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " huluScore = " + huluScore);
  if (questionCount == 4) {
    console.log("Quiz is complete.")
    //updatedResult();
  }
}

reveal.addEventListener("click", display);

function display (){
  //reveal.addEventListener("click", display;
  if (netflixScore >=2) {
    result.innerHTML = "You are Netflix!";
    console.log("You are Netflix!");
  }
  else if (disneyScore >=2) {
    result.innerHTML = "You are Disney+!";
    console.log("You are Disney+!");
  }
  else if (huluScore >=2) {
    result.innerHTML = "You are Hulu!";
    console.log("You are Hulu!");
  }
}

//Quiz output
/*function updatedResult() {
  //reveal.addEventListener("click", display);
  if (netflixScore >=2) {
    result.innerHTML = "You are Netflix!";
    console.log("You are Netflix!");
  }
  else if (disneyScore >=2) {
    result.innerHTML = "You are Disney+!";
    console.log("You are Disney+!");
  }
  else if (huluScore >=2) {
    result.innerHTML = "You are Hulu!";
    console.log("You are Hulu!");
  }
}*/

//Defining the restart button to appear


//resetting all variable values back to 0
function resetQuiz() {
  result.innerHTML = "You are...";
  questionCount = 0;
  netflixScore = 0;
  disneyScore = 0;
  huluScore = 0;
  q1a1.disable = true;
  q1a2.disable = true;
  q1a3.disable = true;
  q2a1.disable = true;
  q2a2.disable = true;
  q2a3.disable = true;
  q4a1.disable = true;
  q4a2.disable = true;
  q4a3.disable = true;
  q5a1.disable = true;
  q5a2.disable = true;
  q5a3.disable = true;

  //Making the console print out the 0 variables to make sure everything reset
  console.log("question count = " + questionCount + " netflixScore = " + netflixScore + " disneyScore = " + disneyScore + " huluScore = " + huluScore);
}



/*Asynch practice work
console.log("hello world");

console.log(3);
console.log("Total = "+(3+10+1));

console.log("Books I read this year = "+3);

var books = 3;
console.log("Number of books I read = " + books);

var movies = 12;
var tvShows = 3;
console.log("Number of movies I watched = " + movies);
console.log("Number of TV shows I watched = " + tvShows);

var totalMedia = (12+3);
console.log("Total number of media watched = " + totalMedia);

console.log("Total number of media watched = "+(12+3));*/
