// OUR SERVICES FORM QUESTIONS

var questions = [
    {
        "question": "What area of the world are you thinking of discovering next?",
        "answer1": "Europe",
        "answer1Total": ['Algarve - Portugal', 'Asturias and Covadonga - Spain', 'Mdina & Zebbug - Malta', 'Salzkammergut - Austria', 'The Azores - Portugal', 'Perast - Montenegro', 'Lednice-Valtice - Czech Republic', 'Pag Island - Croatia', 'Saaremaa Island - Estonia', 'Volos & Pelion region - Greece', 'Kamnik Alps - Slovenia'],
        "answer2": "Asia",
        "answer2Total": ['Yakushima Island - Japan', 'Mount Wudang Shan - China', 'Bantayan Island - Philippines', 'Coonoor - India', 'Kuang Si Falls - Laos', 'Koh Rong Sanloem - Cambodia', 'Mae Hong Song - Thailand', 'The Red Lotus Sea - Thailand'],
        "answer3": "America",
        "answer3Total": ['San Cipriano - Colombia', 'Iquitos - Peru', 'Natal - Brazil', 'Bariloche - Argentina', 'Concón - Chile', 'Baños - Ecuador', 'Copacabana - Bolivia', 'Apostle Islands - Wisconsin', 'Block Island - Rhode Island', "Thor's Well - Oregon"],
        "answer4": "Australia",
        "answer4Total": ['Robe - South Australia', 'Arnhem Land - Northern Territory', 'Castlemaine - Victoria', 'Bay of Fires - Tasmania', 'Bungle Bungles - Western Australia', 'Cockatoo Island - New South Wales', 'Lake Bumbunga - South Australia', 'North Stradbroke Island - Queensland', 'Adelaide - South Australia']        
    },
    {
        "question": "Who do you intend to travel with?",
        "answer1": "Myself",
        "answer1Total": "6",
        "answer2": "My Partner",
        "answer2Total": "3",
        "answer3": "My Family",
        "answer3Total": "1",
        "answer4": "My Friends",
        "answer4Total": "6"
    },
    {
        "question": "What do you value more?",
        "answer1": "Wildlife",
        "answer1Total": "2",
        "answer2": "Scenery",
        "answer2Total": "2",
        "answer3": "Relaxation",
        "answer3Total": "2",
        "answer4": "The Unknown",
        "answer4Total": "10"
    },
    {
        "question": "Are you interested in the history of the area?",
        "answer1": "Yes",
        "answer1Total": "1",
        "answer2": "No",
        "answer2Total": "5",
        "answer3": "Only if i am with other people",
        "answer3Total": "2",
        "answer4": "Not Often",
        "answer4Total": "3"
    },
    {
        "question": "Do you feel it's important to live like the locals?",
        "answer1": "Yes",
        "answer1Total": "5",
        "answer2": "No",
        "answer2Total": "1",
        "answer3": "Only if i am alone",
        "answer3Total": "5",
        "answer4": "Only for a few days",
        "answer4Total": "2"
    },
    {
        "question": "What makes you happy?",
        "answer1": "Nightlife",
        "answer1Total": "3",
        "answer2": "Quietness",
        "answer2Total": "1",
        "answer3": "Food",
        "answer3Total": "2",
        "answer4": "Discovery",
        "answer4Total": "5"
    },
    {
        "question": "Do you like to take risks?",
        "answer1": "Yes",
        "answer1Total": "15",
        "answer2": "No",
        "answer2Total": "1",
        "answer3": "Sometimes",
        "answer3Total": "8",
        "answer4": "Only with other people",
        "answer4Total": "5"
    }
]

let selectedAnswersData = [];
let currentQuestion = 0;
let choice = [];

const totalQuestions = questions.length;
const container = document.querySelector('.form-body');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;

    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
}

function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    const answerchoice = selectedOption.nextElementSibling.getAttribute('data-total');

    ////Add the answer choice to the choice array
    choice.push(answerchoice);

    selectedAnswersData.push()

    // Variables for returned random locations in choice array

    const whatContinent = choice[0].split(',');
    const whatContinentRand = whatContinent[Math.floor(Math.random() * whatContinent.length)];
    const continentRand = whatContinent.sort(function() {
        return 0.5 - Math.random();
    })
    const continentSlice = continentRand.slice(whatContinent,3);
    const locationA = continentSlice[0];
    const locationB = continentSlice[1];
    const locationC = continentSlice[2];


    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }

    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';

        result.innerHTML =
        `<h1 class="final-choice">Our Top 3 Recommendations:</h1>
        <div class="summary">
            <p><br></br></p>
            <p class="firstChoice">1. ${locationA}</p>
            <p class="secondChoice">2. ${locationB}</p>
            <p class="thirdChoice">3. ${locationC}</p>
        </div>
        <a href="contact.html"><button class="contact-us">Contact Us</button></a>
        <button class="restart">Restart Quiz</button>
         `;
        return;
    }
    generateQuestions(currentQuestion);
}


//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    choice.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and choice
    currentQuestion = 0;
    choice = [];
    //Reload quiz to the start
    location.reload();
    }

}

generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);