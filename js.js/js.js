let RisposteCorretteDate = 3


function percentuale(n){
  let numero =  (n * 10 )
  
    return numero + '%'
}


var giuste = percentuale(RisposteCorretteDate)
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


var sbagliate = wrong(RisposteCorretteDate)

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

cambiaTestoCorrette(RisposteCorretteDate)


function cambiaTestoSbagliate(n){
   let questions2 = document.getElementById('questions2')
   questions2.innerHTML = `<p><span> ${n}/10  </span> questions   </p>`
}

cambiaTestoSbagliate(10 - RisposteCorretteDate)


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

cerchio.setAttribute('stroke-dasharray', `${RisposteCorretteDate * 88}, 880`) 



