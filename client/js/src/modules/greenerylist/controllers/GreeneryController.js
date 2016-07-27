export default class {
    constructor($scope,dataProvider, greeneryService) {
        $scope.user = "defaultUser";
        $scope.greeneries = greeneryService.greeneries;

        dataProvider.getGreeneries($scope.user, function (response) {
            response.data.forEach(function (current) {
                greeneryService.addGreenery(current);
            });
        });

        $scope.$on("addGreenery", function (event, data) {
           dataProvider.addGreenery($scope.user, data.greenery, function (response) {
                greeneryService.addGreenery(response.data);
            });
        });

        $scope.$on("deleteGreenery", function (event, data) {
            dataProvider.deleteGreenery($scope.user, data._id, function () {
                greeneryService.removeGreenery(data._id);
            });
        });

        $scope.$on("addPlant", function (event, data) {
            dataProvider.addPlant($scope.user, data.greeneryId, data.plant, function (response) {
                greeneryService.updateGreenery(response.data);
            });
        });

        $scope.$on("deletePlant", function (event, data) {
            dataProvider.deletePlant($scope.user, data.greeneryId, data.plantId, function () {
                greeneryService.removePlant(data.greeneryId, data.plantId);
            });
        });

        $scope.$on("waterPlant", function (event, data) {
            dataProvider.waterPlant($scope.user, data.greeneryId, data.plantId, data.date, function (response) {
                greeneryService.waterPlant(data.greeneryId, data.plantId, response.data);
            });
        });
    }
}