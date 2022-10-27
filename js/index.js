console.log("I'm ready!");

// Iteration 1: Names and Input
console.log ("Iteration 1: Names and Input:")
let hacker1 = "Carlos";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Juan";
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
console.log("\n")


/*if (hacker1[0]<hacker2[0]) {
    console.log("The driver's name goes first.")
} else if (hacker1[0]>hacker2[0]) {
    console.log("Yo, the navigator goes first definitely.")
} else console.log("What?! You both have the same name?")
*/

// Bonus1
console.log ("Bonus 1:")
let loremText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus metus enim, dignissim in risus quis, pellentesque blandit leo. Nulla volutpat diam ut augue tempus, imperdiet lacinia eros sodales. Mauris id efficitur magna. Mauris lobortis sed metus volutpat bibendum. Donec sed mi a lacus volutpat auctor quis bibendum quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ante diam, consequat at convallis vitae, vulputate nec sapien. Nunc ante turpis, varius et leo non, sodales euismod magna. Mauris at tristique felis, quis fringilla lacus. Aenean eget sem ut arcu rhoncus vehicula. Suspendisse tristique ex quis commodo porttitor. Nam luctus, est eu euismod pretium, ante odio suscipit diam, quis mollis nibh sem ac erat. Fusce nec viverra nisl. Suspendisse ornare iaculis ante, elementum pharetra lorem varius et. Etiam pulvinar neque sed tellus finibus venenatis. Suspendisse fringilla libero semper risus faucibus, eget imperdiet lectus semper. Integer justo est, mattis sit amet varius quis, dictum at tortor. Aliquam ac facilisis nibh, et aliquam enim. Proin vehicula dolor tortor, a cursus dui rhoncus a. Mauris eu augue sed dolor mollis varius ac sit amet arcu. Aliquam facilisis dapibus congue. Aenean interdum sit amet justo eget congue. Mauris convallis auctor lectus, vel suscipit turpis accumsan ut. Nulla tincidunt diam eget purus rutrum efficitur. Phasellus pharetra sem sit amet diam malesuada rutrum. Nulla malesuada ultricies efficitur. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sit amet turpis blandit, euismod nisl vel, posuere elit. Sed eu malesuada leo. Donec tincidunt, ante in varius ultricies, lacus erat fringilla leo, sit amet ultricies elit neque a lacus. Integer eleifend pretium risus a iaculis. Mauris aliquam turpis eu vestibulum tempor. Pellentesque turpis ligula, bibendum in sem ut, aliquam cursus justo. Sed a elementum nisl."

let arrayWordsLorem = loremText.split(" ");

console.log(`El número de palabras del Lorem Ipsum es: ${arrayWordsLorem.length}`);

let totalEt = 0;

arrayWordsLorem.forEach(nameEt => {if (nameEt==="et") {totalEt=totalEt+1}});
console.log(`El número de veces que la palabra "et" aparece es: ${totalEt}`);