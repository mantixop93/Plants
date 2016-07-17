function Greenery(name) {

    this.name = name;

    var load = function(name) {
        var storedGreenery = this.localStorage.getItem(name);
        var plants = [];

        if (storedGreenery !== null) {
            var storedPlants = JSON.parse(storedGreenery).plants;
            for (var i = 0; i < storedPlants.length; i++) {
                plants.push(new Plant(storedPlants[i]));
            }
        }

        return plants;
    }

    var save = function(context) {
        this.localStorage.setItem(name, JSON.stringify(context));
    }

    this.plants = load(name); 

    this.addPlant = function(config) {
        this.plants.push(new Plant(config));
        save(this);
    }

    this.removePlant = function(name) {
        this.plants = this.plants.filter(function(current) {
            return current.name !== name
        });
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



    this.getPlantHistory = function(name) {
        for (var i = 0; i < this.plants.length; i++) {
            if (this.plants[i].name === name) {
                return this.plants[i].history;
            }
        }
    }

}
