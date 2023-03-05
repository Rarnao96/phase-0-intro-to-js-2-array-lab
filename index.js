// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats;
}

function prependCat(name){
    const allCats = ["Arnold", ...cats];
    return allCats;
}

function removeLastCat(){
    const lessCats = cats.slice(0, cats.length -1);
    return lessCats;
}

function removeFirstCat(){
    const noFirstCat = cats.slice(1);
    return noFirstCat;
}