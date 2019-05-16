function factorial(number){
  n = 0
  if (number == 0 || number == 1)
    return 1;
  else
    return n = factorial(number - 1) * number;
}



console.log("  Début script 2  ");
let number = prompt("Entre le nombre de ton choix :");
console.log(`La factorielle de ton nombre est ${factorial(number)}`);
console.log("  Fin du script");