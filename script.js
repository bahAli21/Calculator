// Sélection de l'élément d'entrée (input)
let input = document.getElementById('inputBox');

// Sélection de tous les boutons
let buttons = document.querySelectorAll('button');

// Chaîne pour l'affichage à l'utilisateur
let displayString = "";

// Chaîne pour l'évaluation de l'expression arithmétique
let evalString = "";

// Variable pour suivre si le dernier bouton cliqué était "="
let lastButtonEquals = false;

// Conversion de la NodeList des boutons en un tableau (Array)
let arr = Array.from(buttons);

// Parcours de tous les boutons pour ajouter un écouteur d'événements
arr.forEach(button => {
    button.addEventListener('click', (e) =>{

        // Gestion des différents boutons cliqués
        if(e.target.innerHTML == '='){
            // Évaluation de la chaîne d'affichage
            evalString = eval(displayString);

            // Affichage du résultat dans l'élément input
            input.value = evalString;

            // Réinitialisation de la chaîne d'affichage pour permettre une nouvelle opération
            displayString = "";

            // Définir lastButtonEquals à true car le dernier bouton cliqué était "="
            lastButtonEquals = true;
        }
        else if(e.target.innerHTML == 'AC'){
            // Effacement complet : Réinitialisation des chaînes d'affichage et d'évaluation
            displayString = "";
            evalString = "";
            input.value = displayString;
        }
        else if(e.target.innerHTML == 'D'){
            // Suppression du dernier caractère de la chaîne d'affichage
            displayString = displayString.substring(0, displayString.length-1);
            input.value = displayString;
        }
        else{
            // Si le dernier bouton cliqué était "=", ou si la chaîne d'affichage est vide
            if (lastButtonEquals || displayString === "") {
                displayString = e.target.innerHTML; // Réinitialisation de la chaîne d'affichage
                input.value = displayString;
            } else {
                displayString += e.target.innerHTML; // Concaténation du caractère du bouton cliqué à la chaîne d'affichage
                input.value = displayString;
            }

            // Réinitialise lastButtonEquals car un nouveau chiffre ou opérateur a été ajouté
            lastButtonEquals = false;
        }

        // Vérification de la longueur de la chaîne d'affichage pour ajuster la taille de la police
        if (displayString.length > 6 && displayString.length < 9) {
            input.style.fontSize = '30px'; // Réduire la taille de la police si la longueur est entre 6 et 9 caractères
        } else {
            input.style.fontSize = '40px'; // Garde la taille par défaut de la police si la longueur est différente
        }
    })
})
