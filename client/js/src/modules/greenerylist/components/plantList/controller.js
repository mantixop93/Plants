export default class {
    constructor($scope) {
        $scope.name = this.greenery.name;
        $scope.greenery = this.greenery;
        $scope.plants = this.greenery.plants;

        $scope.deletePlant = function (plantName) {
            $scope.$emit('deletePlant', {
                greenery: $scope.name,
                plant: plantName
            });
        }

        $scope.waterPlant = function (plantName) {
            $scope.$emit('waterPlant', {
                greenery: $scope.name,
                plant: plantName,
                date: new Date
            });
        }

        $scope.getPlantStatus = function (plant) {
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
        }

        $scope.getPanelClass = function(plant) {
            let status = $scope.getPlantStatus(plant);
            if (status < 0) {
                return "panel-danger";
            } else if (status == 0) {
                return "panel-warning";
            } else {
                return "panel-success"
            }
        }

        $scope.deleteGreenery = function() {
            $scope.$emit('deleteGreenery', {
                greenery: $scope.name,
            });
        }
    }
}