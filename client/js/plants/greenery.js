function Greenery(name) {

    this.name = name;

    var load = function(name) {
        var storedGreenery = this.localStorage.getItem(name);
        var plants = [];

        if (storedGreenery !== null) {
            var storedPlants = JSON.parse(storedGreenery).plants;
            for (var i = 0; i < storedPlants.length; i++) {
                plants.push(Plant.revive(storedPlants[i]));
            }
        }

        return plants;
    }

    //TODO: Why var functions inside constractor has global scope?

    var save = function(context) {
        this.localStorage.setItem(name, JSON.stringify(context));
    }

    this.plants = load(name);

    //TODO: How to avoid dublication? 

    this.addPlant = function(name, location, period, lastWatering) {
        this.plants.push(new Plant(name, location, period, lastWatering));
        save(this);
    }

    this.removePlant = function(name) {
        for (var i = 0; i < this.plants.length; i++) {
            if (this.plants[i].name === name) {
                this.plants.splice(i, 1);
            }
        }
        save(this);
    }

    this.waterPlant = function(name, date) {
        for (var i = 0; i < this.plants.length; i++) {
            if (this.plants[i].name === name) {
                this.plants[i].watering(date);
            }
        }
    }

    var getStatus = function(plants) {
        var result = "";

        for (var i = 0; i < plants.length; i++) {
            result += plants[i].getStatus();
        }

        return result;
    }

    this.getStatusForAllPlants = function() {
        return getStatus(this.plants);
    }

    this.getStatusByLocation = function(location) {
        var arr = [];

        for (var i = 0; i < this.plants.length; i++) {
            if (this.plants[i].location === location) {
                arr.push(this.plants[i]);
            }
        }

        return getStatus(arr);
    }

    this.getPlantHistory = function(name) {
        for (var i = 0; i < this.plants.length; i++) {
            if (this.plants[i].name === name) {
                return this.plants[i].history;
            }
        }
    }


}
