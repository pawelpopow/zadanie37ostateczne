let myHeading = document.querySelector('h1');
myHeading.textContent = 'Tytuł strony';

console.log(myHeading);

let plik1 = document.querySelector('p');
plik1.textContent = 'tekst';

console.log(plik1);

let plik2 = document.getElementById('dodaj');
plik2.onclick = function () {
    plik1.textContent = 'tekst';

    
}

console.log(plik1);

let plik3 = document.getElementById('usun');
plik3.onclick = function () { 
    plik1.textContent = '';
}
console.log(plik1);