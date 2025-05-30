// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.

let emails = [
  "pippo@gmail.com",
  "mario.rossi@gmail.com",
  "davide.criscuolo@gmail.com",
  "Pinco.pallino72@gmail.com",
];

let utenteMail = prompt("Scrvi la tua email");
let emailPresente = null;
for (let i = 0; i < emails.length; i++) {
  if (emails[i] === utenteMail) {
    emailPresente = true;
  }
}
if (emailPresente === true) {
  console.log("la tua email è presente");
} else console.log("La tua email non è presente nella lista");
