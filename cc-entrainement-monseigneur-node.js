console.log(4 + 2);
console.log("4 + 2");
console.log("4" + "2");
const a = 0;
console.log(a);
let A = true;
console.log(A);
let num1 = 0;
{
    num1 = 1; // num 1 dans le bloc parent
    const num2 = 0; 
    console.log(num2);
}
console.log(num1);
let B = (12 + "0") / (4**2);
console.log("J'ai " + B + " euros");
console.log(`J'ai ${B} euros`);

const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`);
console.log(x + " + " + y + " = " + (x+y));
let C = 42;
C = String(C);
console.log(typeof(C));
let D = 52;
D = Number(D);
console.log(typeof(D));
let e = "0";
let f = 0;
console.log(e==f);
console.log(e===f);

let age = 17
if (age>=18) {
    console.log("Majeur"); // Affiche majeur si il est majeur
} else if (age<18) {
    console.log("Mineur"); // Affiche mineur si il est mineur
}

let couleur = "orange";
if (couleur==="bleu") {
    console.log("La couleur est bleu"); // Affiche bleu si bleu
} else if (couleur==="rouge") {
    console.log("La couleur est rouge"); // Affiche rouge si rouge
} else if (couleur==="vert") {
    console.log("La couleur est vert"); // Affiche vert si vert 
} else if (couleur==="jaune") {
    console.log("La couleur est jaune") // Affiche jaune si jaune
} else {
    console.log(`La couleur était : ${couleur}`);
}
let E=10;
for (let F=0; F<E; F++){
    console.log(F);
}
let tab_couleur = ["orange", "violet", "vert", "bleu"];

for (let index = 0; index < 4; index++) {

    switch (tab_couleur[index]) {
    case "bleu":
        console.log(`La couleur à l'index ${index} est bleu`);
        break;
    case "rouge":
        console.log(`La couleur à l'index ${index} est rouge`);
        break;
    case "vert":
        console.log(`La couleur à l'index ${index} est vert`);
        break;
    case "jaune":
        console.log(`La couleur à l'index ${index} est jaune`);
        break;
    default:
        console.log(`La couleur ${tab_couleur[index]} n'etait pas attendue`);
    }
}
