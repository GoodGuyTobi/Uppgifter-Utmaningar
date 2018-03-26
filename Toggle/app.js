//  Kopplar funktionerna till knappens id
const toggle = document.querySelector('#toggle');

// Lägg till click-event listeners för knapparna som anropar varsin funktion/metod
toggle.addEventListener('click', hide);

//  Funktion för att toggla mellan visibility 'block' och 'none'
function hide() {

    console.log (message.style.display);
    if (message.style.display !== 'none'){
        message.style.display = 'none';
    } else {
        message.style.display = 'block';
    }
}
