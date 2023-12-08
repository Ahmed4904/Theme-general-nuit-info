// var quiz1 = [
//     { question: 'le quel de ces models est electric', options: ['Hondai', 'Tesla', 'Ferrari', 'Honda'], correct: 'Tesla' },
//     { question: 'quel modele des modeles suivants de mercedes est un model electric?', options: ['Mercedes-Benz EQC', 'Mercedes-Benz GLE-Class', 'Mercedes-Benz C-Class', 'Mercedes-Benz A-Class'], correct: 'Mercedes-Benz GLE-Class' },
//     { question: 'Quel phénomène est associé à l\'augmentation du niveau de la mer en raison du changement climatique ?', options: ['Érosion des sols', 'Acidification des océans', 'Fonte des glaciers', 'Déforestation'], correct: 'Fonte des glaciers' },
// ];

// var quiz2 = [
//     { question: 'Quelle activité humaine contribue le plus aux émissions de gaz à effet de serre ?', options: ['Agriculture', 'Transport', 'Production d\'électricité', 'Déforestation'], correct: 'Production d\'électricité' },
//     { question: 'Quel est l\'effet du changement climatique sur les modèles météorologiques ?', options: ['Stabilisation des conditions météorologiques', 'Intensification des événements météorologiques extrêmes', 'Augmentation de la prévisibilité', 'Diminution des températures globales'], correct: 'Intensification des événements météorologiques extrêmes' },
//     { question: 'Quel gaz est principalement responsable du réchauffement climatique d\'origine humaine ?', options: ['Azote (N2)', 'Dioxyde de carbone (CO2)', 'Ozone (O3)', 'Méthane (CH4)'], correct: 'Dioxyde de carbone (CO2)' },
// ];

// var sujet = [quiz1, quiz2]
// var index = Math.floor(Math.random() * 2);
// var quizData = sujet[index]

// let currentQuestion = 0;
// let score = 0;

// function startQuiz() {
//     const quizContainer = document.getElementById('bd');
//     quizContainer.innerHTML = '';

//     if (currentQuestion < quizData.length) {
//         loadQuestion();
//     } else {
//         var button = document.createElement('button');
//         button.innerText = 'Play again'
//         button.onclick = function() {
//             startQuiz();
//         };
//         quizContainer.appendChild(button)
//         showResults();
//     }
// }

// function loadQuestion() {
//     const quizContainer = document.getElementById('bd');
//     const currentQuizData = quizData[currentQuestion];

//     const questionElement = document.createElement("p");
//     questionElement.innerText = currentQuizData.question;
//     console.log(currentQuizData.question)
//     const optionsElement = document.createElement('div');
//     currentQuizData.options.forEach((option) => {
//         const button = document.createElement('button');
//         button.id = 'quiz'
//         button.innerText = option;
//         button.addEventListener('click', () => checkAnswer(option));
//         optionsElement.appendChild(button);
//     });

//     quizContainer.appendChild(questionElement);
//     quizContainer.appendChild(optionsElement);
// }

// function checkAnswer(answer) {
//     const currentQuizData = quizData[currentQuestion];
//     if (answer === currentQuizData.correct) {
//         score++;
//     }

//     currentQuestion++;

//     startQuiz();
// }

// function showResults() {
//     const quizContainer = document.getElementById('bd');
//     quizContainer.innerHTML = `<p>Quiz Completed!</p><p>Score: ${score}/${quizData.length}</p>`;
// }


// quizJeu:
var quiz1 = [
    { question: 'le quel de ces models est electric', options: ['Hondai', 'Tesla', 'Ferrari', 'Honda'], correct: 'Tesla' },
    { question: 'quel modele des modeles suivants de mercedes est un model electric?', options: ['Mercedes-Benz EQC', 'Mercedes-Benz GLE-Class', 'Mercedes-Benz C-Class', 'Mercedes-Benz A-Class'], correct: 'Mercedes-Benz GLE-Class' },
    { question: 'Quel phénomène est associé à l\'augmentation du niveau de la mer en raison du changement climatique ?', options: ['Érosion des sols', 'Acidification des océans', 'Fonte des glaciers', 'Déforestation'], correct: 'Fonte des glaciers' },
];

var quiz2 = [
    { question: 'Quelle activité humaine contribue le plus aux émissions de gaz à effet de serre ?', options: ['Agriculture', 'Transport', 'Production d\'électricité', 'Déforestation'], correct: 'Production d\'électricité' },
    { question: 'Quel est l\'effet du changement climatique sur les modèles météorologiques ?', options: ['Stabilisation des conditions météorologiques', 'Intensification des événements météorologiques extrêmes', 'Augmentation de la prévisibilité', 'Diminution des températures globales'], correct: 'Intensification des événements météorologiques extrêmes' },
    { question: 'Quel gaz est principalement responsable du réchauffement climatique d\'origine humaine ?', options: ['Azote (N2)', 'Dioxyde de carbone (CO2)', 'Ozone (O3)', 'Méthane (CH4)'], correct: 'Dioxyde de carbone (CO2)' },
];

var sujet = [quiz1, quiz2]
var index = Math.floor(Math.random() * 2);
var quizData = sujet[index]

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    const quizContainer = document.getElementById('bd');
    quizContainer.innerHTML = '';

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        var button = document.createElement('button');
        button.innerText = 'Play again'
        button.onclick = function() {
            startQuiz();
        };
        quizContainer.appendChild(button)
        showResults();
    }
}

function loadQuestion() {
    const quizContainer = document.getElementById('bd');
    const currentQuizData = quizData[currentQuestion];

    const questionElement = document.createElement("p");
    questionElement.innerText = currentQuizData.question;
    console.log(currentQuizData.question)
    const optionsElement = document.createElement('div');
    currentQuizData.options.forEach((option) => {
        const button = document.createElement('button');
        button.id = 'quiz'
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });

    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
}

function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    if (answer === currentQuizData.correct) {
        score++;
    }

    currentQuestion++;

    startQuiz();
}

function showResults() {
    const quizContainer = document.getElementById('bd');
    quizContainer.innerHTML = `<p>Quiz Completed!</p><p>Score: ${score}/${quizData.length}</p>`;
}
