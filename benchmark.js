const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let questionText = document.getElementById("questiontext");
let answers = document.getElementsByClassName("button");
let risposteCorretteDate = 0;
let nDomande = 10;
let nDomanda = 0;

function scegliEMostraDomanda(arr) {



  
  nDomanda += 1;
  document.getElementsByClassName("footer")[0].innerHTML = `QUESTION ${nDomanda}/10`;
  if (nDomanda > 10) {
    // window.location.href = "results.html";
  }

  let rnd = Math.round(Math.random() * (arr.length - 1)); //produco un numero casuale per scegliere dall'array delle domande
  let q = arr[rnd];
  questionText.innerHTML = q.question;
  if (q.type == "multiple") {
    console.log("sei nel blocco multiple");
    //faccio comparire le risposte
    let rndArray = withoutClones(4);
    answers[rndArray[0]].innerHTML = q.correct_answer;
    answers[rndArray[1]].innerHTML = q.incorrect_answers[0];
    answers[rndArray[2]].innerHTML = q.incorrect_answers[1];
    answers[rndArray[3]].innerHTML = q.incorrect_answers[2];

    //metto gli event listener sui buttons

    //il button che contiene la risposta corretta

    let j = 0;
    for (let i = 0; i < 4; i++) {
      if (answers[i].innerHTML == q.correct_answer) {
        j = i;
        answers[i].addEventListener("mousedown", function () {
          risposteCorretteDate += 1;
          arr.splice(rnd, 1);
          scegliEMostraDomanda(arr);
          return 0;
        });
      }
    }
    //i buttons che contengono le risposte sbagliate
    for (let i = 0; i < 4; i++) {
      if (i != j) {
        answers[i].addEventListener("mousedown", function () {
          arr.splice(rnd, 1);
          scegliEMostraDomanda(arr);
          return 0;
        });
      }
    }
  } else {
    console.log("sei nel blocco boolean");
    //faccio comparire le risposte
    answers[2].style.visibility = "hidden";
    answers[3].style.visibility = "hidden";
    answers[0].innerHTML = "False";
    answers[1].innerHTML = "True";

    //metto gli event listener sui buttons

    let j = 0;
     
    for (let b of answers) { 
      b.addEventListener("mousedown", function () {
        for (let a of answers) { 
          a.style.visibility="visible";
        }
       });
    }


    for (let i = 0; i < 2; i++) {
      if (answers[i].innerHTML == q.correct_answer) {
        j = i;
        answers[i].addEventListener("mousedown", function () {
          risposteCorretteDate += 1;
          arr.splice(rnd, 1);
         
          scegliEMostraDomanda(arr);
          return 0;
        });
      }
    }
    //i buttons che contengono le risposte sbagliate
    
     
       answers[1-j].addEventListener("mousedown", function () {
         arr.splice(rnd, 1);
         
         scegliEMostraDomanda(arr);
         return 0;
       });
    
    
    
    
    
    
      }
    }

    //tolgo la domanda dall'array delle domande per evitare che ricompaia dopo


function verificaTuttiDiversi(arr) {
  //caso array non vuoto

  for (let u of arr) {
    if (arr.indexOf(u) < arr.lastIndexOf(u)) {
      //se ci sono due copie di u in arr
      return false;
    }
  }
  return true;
}

function withoutClones(n) {
  let arr = [];
  let i = 0;
  while (i < n) {
    rnd = Math.round(Math.random() * (n - 1)); //genero un numero casuale
    if (verificaTuttiDiversi(arr.concat([rnd]))) {
      //se rnd è diverso da tutte le entrate di arr arr
      arr.push(rnd); //lo aggiungo ad arr
      i = i + 1;
    }
  }
  return arr;
}

// TIPS:

// SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
// Per ogni domanda, crea un container e incorporale tutte all'interno.
// Crea poi dei radio button
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
// con le risposte corrette e incorrette come opzioni
// (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale)
//
// SE MOSTRI UNA DOMANDA ALLA VOLTA:
// Mostra la prima domanda con il testo e i radio button.
// Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
// salvando le risposte dell'utente in una variabile

// Come calcolare il risultato? Hai due strade:
// Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
// Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer
