export default class {

    getPlant(name) {
        for (let i = 0; i < this.plants.length; i++) {
            if (this.plants[i].name === name) {
                return this.plants[i];
            }
        }
    }

    getPlantPeriod(name){
        return this.getPlant(name).period;
    }


    removePlant(name) {
        this.plants = this.plants.filter(function (current) {
            return current.name !== name
        });
    }

    plantsLastWatering(name) {
        let plant = this.getPlant(name);
        return plant.history[plant.history.length - 1];
    }

    nextWateringForPlant(name) {
        let date = new Date(this.plantsLastWatering(name));
        return new Date(date.setTime(date.getTime() + this.getPlantPeriod(name) * 86400000));
    }

    waterPlant(name, date) {
        let plant = this.getPlant(name);
        let lastWatering = date || new Date();
        plant.history.push(lastWatering);
    }

    getPlantHistory(name) {
        return this.getPlant(name).history;
    }

    getPlantStatus(name) {
        let prev = new Date();
        let next = this.nextWateringForPlant(name);
        let day = 1000 * 3600 * 24;

        if (prev < next) {
            return Math.ceil((next - prev) / day);
        } else {
            if (prev - next <= day) {
                return 0;
            } else {
                return Math.ceil((next - prev) / day);
            }
        }
    }
}