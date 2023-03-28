cats = ["Milo", "Otis", "Garfield"];

function cats(){
    console.log(cats);
}
function destructivelyAppendCat() {
    cats.push("Ralph");
}
cats();
function destructivelyPrependCat(){
    cats.unshift("Bob");
}
cats();
function destructivelyRemoveLastCat(){
    cats.pop();
}
cats();
function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    const cat = [...cats, "Broom"]
    return cat; 
}

function prependCat(){
    const cat = ["Arnold", ...cats];
    return cat;
}

function removeLastCat(){
 const copyCat = cats.slice(0,2);
 return copyCat;
}

function removeFirstCat(){
    const anotherOne = cats.slice(1);
    return anotherOne;
}