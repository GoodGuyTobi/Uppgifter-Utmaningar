// Deklarera konstanter för komponenterna
const tstBtn = document.querySelector('#resultat');

// Gör om komponenternas id till variabler
var resCheck = document.querySelector('#check-resultat');
var dropCheck = document.querySelector('#select-resultat');

// Event-listeners
tstBtn.addEventListener('click', checker);

// Kopplar alla funktioner till en funtion för knappen
function checker() {
    text();
    checkbox();
    input();
}

// Hämtar först värdet från textbox, sedan skrivs texten ut i text-resultat
function text() {
    var txtResult = document.querySelector('#textbox').value;
    var resTxt = document.querySelector('#text-resultat');
    resTxt.textContent = (txtResult);
}

// if-sats om checkboxen är i eller inte, ger sedan resultatet i check-resultat
function checkbox() {
    if (document.querySelector('#checkbox').checked) {
        resCheck.textContent = 'På';
    } else {
        resCheck.textContent = 'Av';
    }
}   

// Hämtar värdet från dropdown-listan och skriver sedan ut den i check-resultat
function input() {
    var value = document.getElementById('select').value;
    dropCheck.textContent = value;
}