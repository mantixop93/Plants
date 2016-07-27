export default function () {

    let plantService = {};

    plantService.getPlantStatus = function (plant) {
        let prev = new Date();
        let date = new Date(plant.history[plant.history.length - 1]);
        let next = new Date(date.setTime(date.getTime() + plant.period * 86400000));
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
    };

    plantService.getRowClass = function (plant) {
        let status = plantService.getPlantStatus(plant);
        if (status < 0) {
            return "warning";
        } else if (status == 0) {
            return "info";
        } else {
            return "";
        }
    };

    return plantService;
}