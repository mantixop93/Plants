export default function () {

    let greeneryService = {};

    let greeneries = [];

    greeneryService.addGreenery = function (greenery) {
        greeneries.push(greenery)
    };

    greeneryService.removeGreenery = function (greeneryId) {
        for (let j = 0; j < greeneries.length; j++) {
            if (greeneries[j]._id == greeneryId) {
                greeneries.splice(j, 1);
            }
        }
    };

    greeneryService.updateGreenery = function (greenery) {
        for (let i = 0; i < greeneries.length; i++) {
            if (greeneries[i]._id == greenery._id) {
                greeneries[i] = greenery;
            }
        }
    };

    greeneryService.removePlant = function (greeneryId, plantId) {
        for (let i = 0; i < greeneries.length; i++) {
            if (greeneries[i]._id == greeneryId) {
                let plants = greeneries[i].plants;
                for (let j = 0; j < plants.length; j++) {
                    if (plants[j]._id == plantId) {
                        plants.splice(j, 1);
                    }
                }
            }
        }
    };

    greeneryService.waterPlant = function (greeneryId, plantId, date) {
        for (let i = 0; i < greeneries.length; i++) {
            if (greeneries[i]._id == greeneryId) {
                let plants = greeneries[i].plants;
                for (let j = 0; j < plants.length; j++) {
                    if (plants[j]._id == plantId) {
                        plants[j].history.push(new Date(date));
                    }
                }
            }
        }
    };

    greeneryService.greeneries = greeneries;

    return greeneryService;
}