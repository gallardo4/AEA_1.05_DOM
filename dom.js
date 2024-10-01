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

const form = document.createElement("form");
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Escriu aquí...";
const submitBtn = document.createElement("button");
submitBtn.innerHTML = "Envia";

form.appendChild(input);
form.appendChild(submitBtn);
body.appendChild(form);

const resultat = document.createElement("p");
body.appendChild(resultat);

form.onsubmit = function() {
    event.preventDefault();
    const valorInput = input.value;
    resultat.innerHTML = valorInput;
    input.value = "";
}