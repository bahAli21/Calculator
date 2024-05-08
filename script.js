let input = document.getElementById('inputBox');
// Je récupère tous les boutons
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            e.preventDefault();
            string = eval(string);
            input.value = string;

            // Vérification de la longueur de la chaîne
            if (string.length > 6 && string.length <=11) {
                input.style.fontSize = '20px'; // je réduis la taille de la police si la longueur est superieur a 6 caractères
            } else if(string.length > 11){
                input.style.fontSize = '10px';
            } else {
                input.style.fontSize = '40px'; // je Garde la taille par défaut de la police si la longueur est différente
            }
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'D'){
            string = string.substring(0, string.length-1); // Je retire un seul caractère
            input.value = string;

            // Vérification de la longueur de la chaîne
            if (string.length > 6 && string.length <=10) {
                input.style.fontSize = '20px'; // je réduis la taille de la police si la longueur est superieur a 6 caractères
            } else if(string.length > 10){
                input.style.fontSize = '13px';
            } else {
                input.style.fontSize = '40px'; // je Garde la taille par défaut de la police si la longueur est différente
            }
        }
        else{
            if(string.length <= 14){
                string += e.target.innerHTML; // Je fais une concaténation
                input.value = string;
            }

        }

        // Vérification de la longueur de la chaîne
        if (string.length > 6 && string.length <=11) {
            input.style.fontSize = '20px'; // je réduis la taille de la police si la longueur est superieur a 6 caractères
        } else if(string.length > 11){
            input.style.fontSize = '10px';
        } else {
            input.style.fontSize = '40px'; // je Garde la taille par défaut de la police si la longueur est différente
        }
    })
})
