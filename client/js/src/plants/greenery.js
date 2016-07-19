let Plant = require('./plant.js');

module.exports = class {
    constructor(name) {
        this.name = name;
        this.plants = [];

        //TODO: How to avoid
        this.socket = io.connect();

        //TODO: How to avoid
        let context = this;

        this.socket.emit('load', name, function(date){
            for (let i = 0; i < date.plants.length; i++) {
                context.plants.push(new Plant(date.plants[i]));
            }
        });
    }

    _save() {
        this.socket.emit('save', {
            name: this.name,
            plants: this.plants
        });
    }

    addPlant(config) {
        this.plants.push(new Plant(config));
        this._save();
    }

    removePlant(name) {
        this.plants = this.plants.filter(function(current) {
            return current.name !== name
        });
        this._save();
    }

    waterPlant(name, date) {
        for (let i = 0; i < this.plants.length; i++) {
            if (this.plants[i].name === name) {
                this.plants[i].watering(date);
            }
        }
        this._save()
    }

    getPlantHistory(name) {
        for (let i = 0; i < this.plants.length; i++) {
            if (this.plants[i].name === name) {
                return this.plants[i].history;
            }
        }
    }
};
