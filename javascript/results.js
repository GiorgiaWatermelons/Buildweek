let risposteCorretteDate = eval(document.cookie.charAt(5));
console.log(risposteCorretteDate);

function percentuale(n) {
  let numero =  (n * 10 )
  
    return numero + '%'
}


var giuste = percentuale(risposteCorretteDate)
console.log(giuste)


function cambiaScritta(){

let a = document.getElementById('percentageGiuste')
a.innerText = giuste

}
cambiaScritta() 


function wrong(n){
   let tot = (10 - n)* 10
   return tot + '%'
   
}


var sbagliate = wrong(risposteCorretteDate)

function cambiaScritta2(){
   let b = document.getElementById('percentageWrong')
   b.innerText = sbagliate
}
cambiaScritta2()

/* ################################################ */
function cambiaTestoCorrette(n){
     let questions = document.getElementById('questions')
     questions.innerHTML = `<p><span> ${n}/10  </span> questions   </p>`
}

cambiaTestoCorrette(risposteCorretteDate)


function cambiaTestoSbagliate(n){
   let questions2 = document.getElementById('questions2')
   questions2.innerHTML = `<p><span> ${n}/10  </span> questions   </p>`
}

cambiaTestoSbagliate(10 - risposteCorretteDate)


/* #################################### */
/*function cambiaTesto3(){

   var div = document.getElementById('circle-text')
   var figli = div.childNodes
   figli.remove ()

  }

console.log(cambiaTesto3())
*/


/* ############################## */

 
let cerchio = document.getElementById('success-value');

cerchio.setAttribute('stroke-dasharray', `${risposteCorretteDate * 88}, 880`) 



