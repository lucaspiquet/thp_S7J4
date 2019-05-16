function pyramid(number){
  let numberOfSpaces = 0;
  let numberOfHashtags = 0;
  let printString = "";
  for(floor=1; floor<=number; floor++){
    numberOfSpaces = number - floor;
    //Print spaces
    for(i=0; i<numberOfSpaces; i++){
      printString += " ";
    }
    //Print '#'
    numberOfHashtags = floor;
    for(i=0; i<numberOfHashtags; i++){
      printString += "#"
    }
    console.log(printString);
    printString = "";
  }
 
}

console.log("  Début script 3  ");
let n = prompt("Combien d'étages pour ta pyramide ?");
pyramid(n);
console.log("  Fin du script  ");