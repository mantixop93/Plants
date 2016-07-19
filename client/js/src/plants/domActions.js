function refreshTable(greenery) {

    let newTable = document.createElement('tbody');
    let table = document.getElementById('statusTable');

    function removePlant(){
        let plantName = this.parentElement.parentElement.firstChild.innerHTML;
        greenery.removePlant(plantName);
        refreshTable(greenery);
    }

    function waterPlant(){
        let plantName = this.parentElement.parentElement.firstChild.innerHTML;
        greenery.waterPlant(plantName);
        refreshTable(greenery);
    }

    for (let i = 0; i < greenery.plants.length; i++) {
        let row = document.createElement("tr");
        let plant = greenery.plants[i];

        let name = document.createElement('td');
        name.innerHTML = plant.name;
        row.appendChild(name);

        let location = document.createElement('td');
        location.innerHTML = plant.location;
        row.appendChild(location);

        let status = document.createElement('td');
        status.innerHTML = plant.getStatus();
        row.appendChild(status);

        let watering = document.createElement('td');
        let btn = document.createElement('button');
        btn.innerHTML = "Water";
        btn.onclick = waterPlant;
        btn.className = "btn btn-primary btn-xs"
        watering.appendChild(btn);
        row.appendChild(watering);

        let dlt = document.createElement('td');
        btn = document.createElement('button');
        btn.innerHTML = "Delete";
        btn.onclick = removePlant;
        btn.className = "btn btn-primary btn-xs"
        dlt.appendChild(btn);
        row.appendChild(dlt);

        let colorClass;
        let st = plant.getStatus();

        if (st > 0) {
            colorClass = "success";
        }  else if (st == 0) {
            colorClass = 'warning';
        } else {
            colorClass = 'danger';
        }

        row.className = colorClass;
        newTable.appendChild(row);
    }
    table.replaceChild(newTable, document.getElementsByTagName('tbody')[0])
}

function addPlant(greenery) {
    let plant = {};

    plant.name = document.querySelector("#inputName").value;
    plant.location = document.querySelector("#inputLocation").value;
    plant.period = document.querySelector("#inputPeriod").value;
    plant.last = document.querySelector("#inputLastWatering").value;

    greenery.addPlant(plant);
    refreshTable(greenery);
}

module.exports = {
    addPlant,
    refreshTable
}