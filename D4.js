/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(l1, l2) {
    let areaRettangolo = l1 * l2;
    return areaRettangolo;
}

let a = 11;
let b = 12;
var risultato = area(a, b);
console.log("L'area del rettangolo è:", risultato);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return num1 + num2;
    }
}

let c = 23;
let e = 34;
var result = crazySum(c, e); // Chiamata corretta alla funzione con i valori 23 e 34
console.log("Il risultato è:", result); // Aggiunta la virgola per concatenare il risultato alla stringa




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero) {
    // Calcola la differenza assoluta tra il numero fornito e 19
    let differenza = Math.abs(numero - 19);
    
    // Controlla se il numero fornito è maggiore di 19 e moltiplica la differenza per tre
    if (numero > 19) {
        differenza *= 3;
    }
    
    // Restituisci la differenza calcolata
    return differenza;
}

// Esempio di utilizzo della funzione
let numero1 = 25;
let risultato1 = crazyDiff(numero1);
console.log("Il risultato per", numero1, "è:", risultato1); // Output: Il risultato per 25 è: 18

let numero2 = 10;
let risultato2 = crazyDiff(numero2);
console.log("Il risultato per", numero2, "è:", risultato2); // Output: Il risultato per 10 è: 9


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* ESERCIZIO 3 */
function crazyDiff(numero) {
    // Calcola la differenza assoluta tra il numero fornito e 19
    let differenzaAssoluta = Math.abs(numero - 19);
    
    // Controlla se il numero fornito è maggiore di 19
    if (numero > 19) {
        // Se sì, moltiplica la differenza assoluta per tre
        return differenzaAssoluta * 3;
    } else {
        // Altrimenti, restituisci solo la differenza assoluta
        return differenzaAssoluta;
    }
}

/* ESERCIZIO 4 */
function boundary(n) {
    // Controlla se n è compreso tra 20 e 100 (incluso) oppure se è uguale a 400
    if ((n >= 20 && n <= 100) || n === 400) {
        return true;
    } else {
        return false;
    }
}

// Esempi di utilizzo delle funzioni:
console.log("Esercizio 3:");
console.log("crazyDiff(5):", crazyDiff(5)); // Output: 14
console.log("crazyDiff(25):", crazyDiff(25)); // Output: 18 * 3 = 54

console.log("\nEsercizio 4:");
console.log("boundary(10):", boundary(10)); // Output: false
console.log("boundary(50):", boundary(50)); // Output: true
console.log("boundary(400):", boundary(400)); // Output: true



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* ESERCIZIO 5 */
function epify(stringa) {
    // Controlla se la stringa fornita inizia già con "EPICODE"
    if (stringa.startsWith("EPICODE")) {
        // Se sì, ritorna la stringa originale senza alterarla
        return stringa;
    } else {
        // Altrimenti, aggiungi "EPICODE" all'inizio della stringa e ritorna il risultato
        return "EPICODE" + stringa;
    }
}

// Esempi di utilizzo della funzione:
console.log("epify('Hello'):", epify("Hello")); // Output: EPICODEHello
console.log("epify('EPICODE World'):", epify("EPICODE World")); // Output: EPICODE World
console.log("epify('EPICODE is cool'):", epify("EPICODE is cool")); // Output: EPICODE is cool (nessuna modifica)


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* ESERCIZIO 6 */
function check3and7(numero) {
    // Controlla se il numero è positivo
    if (numero <= 0) {
        return false; // Se il numero non è positivo, restituisce false
    }

    // Controlla se il numero è multiplo di 3 o di 7 usando l'operatore modulo (%)
    if (numero % 3 === 0 || numero % 7 === 0) {
        return true; // Se il numero è multiplo di 3 o di 7, restituisce true
    } else {
        return false; // Altrimenti, restituisce false
    }
}

// Esempi di utilizzo della funzione:
console.log("check3and7(9):", check3and7(9)); // Output: true (9 è multiplo di 3)
console.log("check3and7(14):", check3and7(14)); // Output: true (14 è multiplo di 7)
console.log("check3and7(15):", check3and7(15)); // Output: true (15 è multiplo di 3)
console.log("check3and7(20):", check3and7(20)); // Output: true (20 è multiplo di 5)
console.log("check3and7(22):", check3and7(22)); // Output: false (non è multiplo di 3 o di 7)


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* ESERCIZIO 7 */
function reverseString(stringa) {
    // Converte la stringa in un array di caratteri, inverte l'array e lo ricongiunge in una nuova stringa
    return stringa.split("").reverse().join("");
}

// Esempi di utilizzo della funzione:
console.log("reverseString('EPICODE'):", reverseString("EPICODE")); // Output: EDOCIP
console.log("reverseString('Hello World'):", reverseString("Hello World")); // Output: dlroW olleH


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* ESERCIZIO 8 */
function upperFirst(stringa) {
    // Dividi la stringa in un array di parole usando uno spazio come separatore
    let parole = stringa.split(" ");
    
    // Itera su ogni parola dell'array
    for (let i = 0; i < parole.length; i++) {
        // Rendi maiuscola la prima lettera di ogni parola
        parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
    }
    
    // Unisci le parole modificate in una nuova stringa
    return parole.join(" ");
}

// Esempi di utilizzo della funzione:
console.log("upperFirst('ciao mondo'):", upperFirst("ciao mondo")); // Output: Ciao Mondo
console.log("upperFirst('questa è una frase'):", upperFirst("questa è una frase")); // Output: Questa È Una Frase



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* ESERCIZIO 9 */
function cutString(stringa) {
    // Controlla se la stringa ha almeno due caratteri
    if (stringa.length >= 2) {
        // Se sì, rimuovi il primo e l'ultimo carattere e restituisci la nuova stringa
        return stringa.slice(1, -1);
    } else {
        // Se la stringa ha meno di due caratteri, restituisci una stringa vuota
        return "";
    }
}

// Esempi di utilizzo della funzione:
console.log("cutString('hello'):", cutString("hello")); // Output: ell
console.log("cutString('EPICODE'):", cutString("EPICODE")); // Output: PICO
console.log("cutString('a'):", cutString("a")); // Output: ""
console.log("cutString(''):", cutString("")); // Output: ""



/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* ESERCIZIO 10 */
function giveMeRandom(n) {
    // Inizializza un array vuoto per contenere i numeri casuali
    let numeriCasuali = [];

    // Genera n numeri casuali inclusi tra 0 e 10 e li aggiunge all'array
    for (let i = 0; i < n; i++) {
        let numeroCasuale = Math.floor(Math.random() * 11); // Genera un numero casuale tra 0 e 10
        numeriCasuali.push(numeroCasuale); // Aggiunge il numero casuale all'array
    }

    // Restituisce l'array contenente i numeri casuali
    return numeriCasuali;
}

// Esempio di utilizzo della funzione:
console.log("giveMeRandom(5):", giveMeRandom(5)); // Esempio di output: [3, 7, 1, 9, 4] (numeri casuali compresi tra 0 e 10)
