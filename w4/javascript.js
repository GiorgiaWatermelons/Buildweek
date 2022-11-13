






function showResults(nDomande, nRisposteCorrette) { 
    let percR = document.getElementById("percR");
    let numberR = document.getElementById("numberR");
    let percW = document.getElementById("percW");
    let numberW = document.getElementById("numberW");

    let nRisposteSbagliate = nDomande - nRisposteCorrette;

    //1)modifico i blocchi 1,3
    percR.innerHTML = `${((nRisposteCorrette/nDomande)*100).toFixed(2)}%`;
    percW.innerHTML = `${((nRisposteSbagliate/nDomande)*100).toFixed(2)}%`;

    numberR.innerHTML = `${nRisposteCorrette}/${nDomande} questions`;
    numberW.innerHTML = `${nRisposteSbagliate}/${nDomande} questions`;

    //2)modifico il blocco centrale
    //2.1)Attendo risposta Luca
     

    //2.2)modifico scritta centrale
    let svg = document.getElementsByTagName("svg")[0];
    
    let textRight = document.createElement("text");
    textRight.innerHTML = "Mariello era bravo";
    textRight.setAttribute("fill", "#ffffff");
    textRight.setAttribute("x", "35%");
    textRight.setAttribute("y", "35%");
    textRight.setAttribute("alignment-baseline", "middle");
    textRight.setAttribute("text-anchor", "middle");
    textRight.setAttribute("font-size", "10");
    textRight.setAttribute("font-family","'Outfit', sans-serif");
    

        
    svg.appendChild(textRight);

/*Congratulations!<br>You passed the exam (bluette).

(very small font-size) We'll send you the certificate <br>
in very few minutes.<br>
Check your email (including <br>
    promotions/smap folder)*/  
}


showResults(115, 33);