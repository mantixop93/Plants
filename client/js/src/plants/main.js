let Greenery = require('./greenery.js');
let domActions = require('./domActions.js');

let greenery = new Greenery("plants");

window.onload = function() {

    document.getElementById("add-form").addEventListener('submit', function() {
        domActions.addPlant(greenery);
    });

    setInterval( () => {
        domActions.refreshTable(greenery);
    }, 1000);
}






