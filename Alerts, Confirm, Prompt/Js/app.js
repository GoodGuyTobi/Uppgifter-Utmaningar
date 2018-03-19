//  Kopplar funktionerna till de olika knapparnas id.
const alertBtn = document.querySelector('#alert');
const confirmBtn = document.querySelector('#confirm');
const promptBtn = document.querySelector('#prompt');

//  Kallar på metoderna när man klickar på knapparna.
alertBtn.addEventListener('click', alertChange);
confirmBtn.addEventListener('click', confirmCHange);
promptBtn.addEventListener('click', promptChange);

//  Vad som händer när man klickar på knappen "alert".
function alertChange() {
    alert('Hello!');
    result.textContent = 'Alert used!';
}

//  Vad som händer när man klickar på knappen "confirm".
function confirmCHange() {
    var c = confirm('Are you Sure?');
    if (c == true) {
        result.textContent = 'Great!';
    } else {
        result.textContent = 'Too bad!';
    }
}

//  Vad som händer när man klickar på knappen "confirm".
function promptChange() {
    //  id && else if ser till att man måste skriva in namn.
    var namn = prompt("Name?");
    if (namn === '') {
        promptChange();
    } else if (namn === null) {
        promptChange();
    } else {
        result.textContent = namn;
    }
}