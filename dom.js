// Exercici 1

const titol = document.getElementById("titol");
titol.innerHTML = "Nou Títol";

const llista = document.getElementById("llista");
const elementLlista = document.createElement("li");
llista.appendChild(elementLlista);
elementLlista.innerHTML = "Element 4";

const btnCanvi = document.getElementById("canviText");
btnCanvi.onclick = function() {
    const paragraf = document.getElementById("paragraf");
    paragraf.innerHTML = "Text del paràgraf modificat.";
}

// Exercici 2

const div = document.createElement("div");
const body = document.getElementById("body");
body.appendChild(div);
div.onclick = function() {
    
}