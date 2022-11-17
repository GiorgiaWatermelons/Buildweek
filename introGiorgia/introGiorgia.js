let speech = document.getElementById("speech");
let prof = document.getElementById("prof");
let musichina0 = new Audio("audio/intro.mp3");
let state = 0;
let selezione = document.getElementById("selezione");
let strArr = ["<p>Benvenut*, io sono il prof Oak dopo un ciclo di dBol, deca e primobolan :)</p>", "<p>Questo mondo è popolato da Persone Perbene........Italiane Cristiane Adinolfe...</p>",
    "<p>Ce ne sono di tanti tipi, ma il compito di un allenatore è catturarle e metterle in delle palle - chiamate <i>Pokeball</i> -", "<p>Che altro non sono che le nostre palle, ormai abbastanza grandi da funzionare ;)</p>",
"<p>Scusami, mi sono fumato una cannone...potresti mostrarmi se sei maschio o femmina?</p>"
];


musichina0.loop = true;
//funzioni che prendono array di elementi
//e fanno scomparire/apparire gli el
function add(e, str) {
  
    e.classList.add(str);
  }

function remove(e, str) {

    e.classList.remove(str);
  }

//##### Funzionamento ######
add(speech, "speechIniziale");

setTimeout(function () {
    add(prof, "disappeared");
    add(selezione, "disappeared");
    add(speech, "transition");
    
}, 1);




window.addEventListener("keyup", function (e) {
    if (e.key == "a") {
      
    if (state == 0) {
        setTimeout(add(prof, "transition2"),1)
        setTimeout(remove(prof, "disappeared"), 1);
        setTimeout(musichina0.play(), 1);
        setTimeout(remove(speech, "speechIniziale"),);
        setTimeout(add(speech, "speechFinale"),);
        setTimeout(scrittaSucc(state, strArr),);
        state += 1;
        return;
    }
      if (state == 5) { 
          let lista = document.getElementById("selezione");
          lista.innerHTML=`<ul><li>MASCHIO</li><li>FEMMINA</li><li>ANTONIO RAZZI</li></ul>`;
      }
      
      scrittaSucc(state, strArr);
      state += 1;
  }
});

window.addEventListener("keyup", function (e) {
    if (e.key == "b") { state--; }
});


function scrittaSucc(state, strArr) {
    console.log("scrittaSucc()");
  setTimeout(add(speech, "disappeared"), 1);
    setTimeout(function () {
    remove(speech, "disappeared");
      speech.innerHTML = strArr[state];
  }, 1001);
}



 