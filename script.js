let form = document.querySelector('#loginForm');


//Ecouter la modification de l'email
form.email.addEventListener('change', function() {
    validEmail(this);
});


//Ecouter la modification du password
form.password.addEventListener('change', function() {
    validPassword(this);
});


//Ecouter la soumission du formulaire
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validEmail(form.email) && validPassword(form.password)) {
        formsubmit();
    }
});



// **************************VALIDATION EMAIL***************************
const validEmail = function(inputEmail) {
    // Creation de la reg exp pour validation email
    let emailREgExp = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
    );
    // renvoie soit VRAI soit FAUX

    // Recuperation de la balise Small
    let small = inputEmail.nextElementSibling;
    // On test l'expression reguliere
    if (emailREgExp.test(inputEmail.value)) {
        small.innerHTML = 'Adresse Valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        // return true;
    } else {
        small.innerHTML = 'Adresse Non Valide'
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        // return false;
    }




};

// ****************************VALIDATION PASSWORD*****************
const validPassword = function(inputPassword) {
    let msg;
    let valid = false;
    // Au moins 3 caracteres dans le mot de passe
    if (inputPassword.value.length < 3) {
        msg = 'Le mot de passe doit contenir au moins 3 caracteres';
    }
    // Au moins 1 majuscule dans le mot de passe
    else if (!/[A-Z]/.test(inputPassword.value)) {
        msg = 'Le mot de passe doit contenir au moins 1 majuscule';
    }

    // Au moins 1 minuscule dans le mot de passe
    else if (!/[a-z]/.test(inputPassword.value)) {
        msg = 'Le mot de passe doit contenir au moins 1 minuscule';
    }
    // Au moins 1 chiffre dans le mot de passe
    else if (!/[0-9]/.test(inputPassword.value)) {
        msg = 'Le mot de passe doit contenir au moins 1 chiffre';
    }
    // Mot de passe valide
    else {
        msg = 'le mot de passe est valide';
        valid = true;
    }

    //Affichage
    // Recuperation de la balise Small
    let small = inputPassword.nextElementSibling;
    // On test l'expression reguliere
    if (valid) {
        small.innerHTML = 'Mot de passe Valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    } else {
        small.innerHTML = msg;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
}