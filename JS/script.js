let names = ['Michele', ' Felipe', 'Aubrie', 'Denise', 'Elaina', 'Morely', 'Paris', 'Sophe', 'Carol', 'John'];

function generator() {
document.getElementById("name").innerHTML = 
        names[Math.floor(Math.random()* names.length)] + ", " + 
        names[Math.floor(Math.random()* names.length)] + ", " +
        names[Math.floor(Math.random()* names.length)] + ", " +
        names[Math.floor(Math.random()* names.length)] + '.';
    }