console.log("I'm ready!");

// Iteration 1: Names and Input
console.log ("Iteration 1: Names and Input:")
let hacker1 = "Carlos";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Carlos";
console.log(`The navigator's name is ${hacker2}`);
console.log("\n")



// Iteration 2: Conditionals
console.log ("Iteration 2: Conditionals:")
if (hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length<hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
console.log("\n")

// Iteration 3: Loops
console.log ("Iteration 3: Loops:")
let hacker1UpperCase = "";
for (let i=0; i<hacker1.length; i++) {
    hacker1UpperCase += hacker1[i].toUpperCase()
    hacker1UpperCase += " "
}
console.log(hacker1UpperCase.slice(0, -1));
let hacker2ReverseOrder = "";
for (let i=hacker2.length; i>0; i--) {
    hacker2ReverseOrder += hacker2[i-1];
}
console.log(hacker2ReverseOrder);

let contarParaVerSiSonExactamenteIguales = 0;
for (let i=0; (hacker1[i]=hacker2[i]); i++) {
    if (hacker1[i]<hacker2[i]) {
        console.log("The driver's name goes first.")
        break;
    } else if (hacker1[i]>hacker2[i]) {
        console.log("Yo, the navigator goes first definitely.")
        break;
    } else {contarParaVerSiSonExactamenteIguales=contarParaVerSiSonExactamenteIguales+1}
}
if (contarParaVerSiSonExactamenteIguales===hacker1.length) {
    console.log("What?! You both have the same name?")
}

/*if (hacker1[0]<hacker2[0]) {
    console.log("The driver's name goes first.")
} else if (hacker1[0]>hacker2[0]) {
    console.log("Yo, the navigator goes first definitely.")
} else console.log("What?! You both have the same name?")
*/