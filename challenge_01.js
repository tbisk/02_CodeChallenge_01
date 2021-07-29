
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/
zahlA = prompt("Bitte erste Zahl eingeben:");
zahlB = prompt("Bitte zweite Zahl eingeben:")
console.log(zahlA);
console.log(zahlB);
zahlA = Number(zahlA);
zahlB = Number(zahlB);
let summe = zahlA + zahlB;
console.log("Die Summe beider Zahlen ergibt: " + summe);