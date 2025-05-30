// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

for (let i = 0; i < 1; i++) {
  //genera un numero random da 1 fino al 6 matendendo il valore intero con floor
  let numbRandomPersona = Math.floor(Math.random() * 6 + 1);
  //genera un numero random da 1 fino al 6 matendendo il valore intero con floor
  let numbRandomPc = Math.floor(Math.random() * 6 + 1);
  console.log(numbRandomPersona, numbRandomPc);

  //diamo la condizione per stabiliri chi sia il maggiore
  if (numbRandomPersona > numbRandomPc) {
    console.log("Vince la persona");
  } else if (numbRandomPersona < numbRandomPc) {
    console.log("Vince il pc");
  } else {
    console.log("Pari");
  }
}
