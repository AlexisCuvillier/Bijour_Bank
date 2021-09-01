// import { user } from "./user.js";

// console.dir(user);

// console.log(
//   `hello ${user.firstname}, i know your password :-) ${user.password}`
// );

// document.querySelector("#firstname").textContent = user.firstname;



document.getElementById('btnSubmit').addEventListener('click', function (event) {

  event.preventDefault();



  // On récupere le montant 
  let mount = document.getElementById("montant").value;
  //On récup + ou - (crédit ou débiteur)
  let operation = document.getElementById("operation");
  // On récup l'intitulé de l'achat ou de la rente
  let intitule = document.getElementById("intitule").value;
  // On Récup le crédit total
  let totalCredit = document.getElementById("totalCredit");
  //On récup le débit total
  let totalDebit = document.getElementById("totalDebit");
  //On récup le total
  let total = document.getElementById("total");
  //On récup la liste des crédit
  let detailsCredit = document.getElementById("detailsCredit");
  //On récup liste des débit 
  let detailsDebit = document.getElementById("detailsDebit");
  // On récup le total du debit pour calculé les %
  let percentDebit = document.getElementById("totalDebitPercent");
  //devise
  let devise = document.getElementById("devise");




  if (operation.value == "+") {
    console.log(mount);
    var newLi = document.createElement('li');
    detailsCredit.appendChild(newLi);
    var newSpan = document.createElement('span');
    newSpan.setAttribute("class", "intitule");
    newLi.appendChild(newSpan);
    newSpan.innerHTML = intitule;
    var newSpan2 = document.createElement('span');
    newSpan2.setAttribute("class", "montant txt-color-gazoil");
    newLi.appendChild(newSpan2);
    newSpan2.innerHTML = Number(mount) + " €";
    totalCredit.innerHTML = Number(totalCredit.innerHTML) + Number(mount);
    console.log(totalCredit.innerHTML);
  }
  else {
    console.log(mount);
    var newLi = document.createElement('li');
    detailsDebit.appendChild(newLi);
    var newSpan = document.createElement('span');
    newSpan.setAttribute("class", "intitule");
    newLi.appendChild(newSpan);
    newSpan.innerHTML = intitule;
    var newSpan2 = document.createElement('span');
    newSpan2.setAttribute("class", "montant txt-color-red");
    newLi.appendChild(newSpan2);
    newSpan2.innerHTML = Number(mount) + " €";
    var newSpan3 = document.createElement('span');
    newSpan3.setAttribute("class", "percent txt-color-red");
    newLi.appendChild(newSpan3);
    newSpan3.innerHTML = ((Number(mount) / Number(totalCredit.innerHTML)) * 100).toFixed(2) + " %";
    totalDebit.innerHTML = Number(totalDebit.innerHTML) + Number(mount);
    console.log(totalDebit.innerHTML);
  }
  total.innerHTML = (Number(totalCredit.innerHTML) - Number(totalDebit.innerHTML)).toFixed(2);
  percentDebit.innerHTML = (Number(totalDebit.innerHTML) / Number(totalCredit.innerHTML) * 100).toFixed(2) + " %";
  if (Number(total.innerHTML) <= 0) {
    total.style.color = 'red';
    devise.style.color = 'red';
  }
  else{
    
  }

});









// function calcul(operateur, libelle, montant) { }
// // on execute la function
// // calcul();

// // send form, add operation
// const formulaire = document.getElementById("ajoutOperation");
// formulaire.addEventListener("submit", function (e) {
//   e.preventDefault();
//   // on récupère les valeurs des champs du formulaire

//   // on stocke ces valeurs dans un array[]

//   // on ajoute cet array dans notre array global operationsCompte

//   // console.table(operationsCompte);
//   // on execute la fonction pour actualiser

//   // on reset le formulaire
//   formulaire.reset();
// });
