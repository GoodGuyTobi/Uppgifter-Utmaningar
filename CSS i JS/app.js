//  Kopplar funktionerna till de olika knapparnas id
const clrBtn = document.querySelector('#color');
const sizeBtn = document.querySelector('#size');
const fontBtn = document.querySelector('#font');

// Lägg till click-event listeners för knapparna som anropar varsin funktion/metod
clrBtn.addEventListener('click', changeColor);
sizeBtn.addEventListener('click', changeSize);
fontBtn.addEventListener('click', changeFont);

// Funktion för att kolla och ändra färg
function changeColor() {

    //  Är knappens bakgrundfärg inte rosa? Gör den till rosa
    //  (Console retunerar rgd, därav är jämförelsen i rgb)
    if (color.style.background !== 'rgb(255, 0, 255)'){
        color.style.background = '#ff00ff';
    } else {
        //  Annars, gör knappen till originalfärgen.
        color.style.background = '#007bff';
    }
}

function changeSize() {

    //  Om bredden inte är större, gör den större
    if (size.style.width !=='50%'){
        size.style.width = '50%';
    } else {
        //  Om knappen är större, gör mindre
        size.style.width = '11.5%';
    }
    
}

function changeFont() {

    console.log(font.style.fontSize);
    //  Om  fontstorleken inte är xx-large, gör den till det
    if (font.style.fontSize !=='xx-large') {
       font.style.fontSize = 'xx-large';
    } else {
        //  Annars, gör den till medium
        font.style.fontSize = 'medium';
    }
    
}