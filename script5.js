const books = [
{ title: 'Gatsby le magnifique', id: 133712, rented: 39 },
{ title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
{ title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
{ title: 'Les frères Karamazov', id: 450911, rented: 55 },
{ title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
{ title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
{ title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
{ title: 'Le meilleur des mondes', id: 88847, rented: 58 },
{ title: 'La disparition', id: 364445, rented: 33 },
{ title: 'La lune seule le sait', id: 63541, rented: 43 },
{ title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
{ title: 'Les frères Karamazov', id: 450911, rented: 5 },
{ title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log(" Début script 5  ");


console.log(">> Est-ce que tous les livres ont été au moins empruntés une fois ?");
let noBorrowedBooks = 0;
books.forEach(function(book){
  if (book.rented == 0)
    noBorrowedBooks++;
});
if (noBorrowedBooks == 0)
  console.log("Tous les livres ont été empruntés au moins une fois !");
else
  console.log(`${noBorrowedBooks} livres n'ont jamais été empruntés !`);


console.log(">> Quel est livre le plus emprunté ?");
let mostBorrowed = null;
let mostBorrowedTitle = "";
books.forEach(function(book){
  if(book.rented > mostBorrowed || mostBorrowed == null){
    mostBorrowed = book.rented;
    mostBorrowedTitle = book.title;
  }
});
console.log(`Le livre le plus emprunté est ${mostBorrowedTitle}`)


console.log(">> Quel est le livre le moins emprunté ?");
let leastBorrowed = null;
let leastBorrowedTitle = "";
books.forEach(function(book){
  if(book.rented < leastBorrowed ||leastBorrowed == null){
    leastBorrowed = book.rented;
    leastBorrowedTitle = book.title;
  }
});
console.log(`Le livre le moins emprunté est ${leastBorrowedTitle}`)


console.log(">> Trouve le livre avec l'ID: 873495");
books.find(function(book){
  if (book.id == 873495)
    console.log(book)
});


console.log(">> Supprime le livre avec l'ID: 133712");
let index = books.findIndex(function(book){
  return book.id == 133712
});
books.splice(index, 1);
console.log(`Le livre portant l'id 133712 a bien été supprimé`);


console.log(">> Trie les livres par ordre alphabétique.");
books.sort(function(a,b){
  if (a.title > b.title)
    return 1;
  else if(a.title < b.title)
    return -1;
  else
    return 0;
});
console.log(books);

console.log("  Fin du script  ");