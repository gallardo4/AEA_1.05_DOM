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
div.innerHTML = "Div amb text clicable.";
div.style.fontSize = "16px";
div.style.color = "black";

const body = document.getElementById("body");
body.appendChild(div);

div.onclick = function() {
    div.style.color = "blue";
    div.style.fontSize = "24px";
}

// Exercici 3

const llistaEsdeveniments = document.createElement("h2");
llistaEsdeveniments.innerHTML = "Llista d'esdeveniments";

const form = document.createElement("form");

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Escriu aquí...";

const submitBtn = document.createElement("button");
submitBtn.innerHTML = "Envia";

form.appendChild(input);
form.appendChild(submitBtn);
body.appendChild(llistaEsdeveniments);
body.appendChild(form);

const resultat = document.createElement("p");
body.appendChild(resultat);

form.onsubmit = function(event) {
    event.preventDefault();
    const valorInput = input.value;
    resultat.innerHTML = valorInput;
    input.value = "";
}

// Exercici 4

const llistaSuggeriments = document.createElement("h2");
llistaSuggeriments.innerHTML = "Llista de suggeriments"

const form2 = document.createElement("form");

const input2 = document.createElement("input");
input2.type = "text";
input2.placeholder = "Afegeix un suggeriment...";

const submitBtn2 = document.createElement("button");
submitBtn2.innerHTML = "Afegeix";

form2.appendChild(input2);
form2.appendChild(submitBtn2);
body.appendChild(llistaSuggeriments);
body.appendChild(form2);

const suggerimentList = document.createElement("ul");
body.appendChild(suggerimentList);

form2.onsubmit = function(event) {
    event.preventDefault();

    const valorInput2 = input2.value;

    const suggeriment = document.createElement("li");
    suggeriment.innerHTML = valorInput2;

    const fetBtn = document.createElement("button");
    fetBtn.innerHTML = "Marca com a realitzat";
    fetBtn.onclick = function() {
        suggeriment.style.textDecoration = "line-through";
    }

    const eliminarBtn = document.createElement("button");
    eliminarBtn.innerHTML = "Eliminar";
    eliminarBtn.onclick = function() {
        suggerimentList.removeChild(suggeriment);
    }

    suggeriment.appendChild(fetBtn);
    suggeriment.appendChild(eliminarBtn);

    suggerimentList.appendChild(suggeriment);

    input2.value = "";
}