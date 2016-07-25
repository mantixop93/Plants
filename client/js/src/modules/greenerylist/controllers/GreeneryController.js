export default class {
    constructor($scope) {
        $scope.user = "defaultUser";
        $scope.greeneries = [];

        $scope.dataProvider.getGreeneries($scope.user, function (response) {
            response.data.forEach(function(current) {
                $scope.greeneries.push(current);
            });
        });


        $scope.$on("addGreenery", function (event, data) {
            $scope.dataProvider.addGreenery($scope.user, data.greenery, function(response) {
                $scope.greeneries.push(response.data);
            });
        });

        $scope.$on("deleteGreenery", function (event, data) {
            $scope.dataProvider.deleteGreenery($scope.user, data._id, function(response) {
                for (let j = 0; j < $scope.greeneries.length; j++) {
                    if ($scope.greeneries[j]._id == data._id) {
                        $scope.greeneries.splice(j, 1);
                    }
                }
            });
        });

        $scope.$on("addPlant", function (event, data) {
            $scope.dataProvider.addPlant($scope.user, data.greeneryId, data.plant, function(response) {
                for(let i = 0; i < $scope.greeneries.length; i++) {
                    if ($scope.greeneries[i]._id == response.data._id) {
                        $scope.greeneries[i] = response.data;
                    }
                }
            });
        });

        $scope.$on("deletePlant", function (event, data) {
            $scope.dataProvider.deletePlant($scope.user, data.greeneryId, data.plantId, function(response) {
                for(let i = 0; i < $scope.greeneries.length; i++) {
                    if ($scope.greeneries[i]._id == data.greeneryId) {
                        let plants = $scope.greeneries[i].plants;
                        for (let j = 0; j < plants.length; j++) {
                            if (plants[j]._id == data.plantId) {
                                plants.splice(j, 1);
                            }
                        }
                    }
                }
            });
        });


        $scope.$on("waterPlant", function(event, data) {
            $scope.dataProvider.waterPlant($scope.user, data.greeneryId, data.plantId, data.date, function(response) {
                for(let i = 0; i < $scope.greeneries.length; i++) {
                    if ($scope.greeneries[i]._id == data.greeneryId) {
                        let plants = $scope.greeneries[i].plants;
                        for (let j = 0; j < plants.length; j++) {
                            if (plants[j]._id == data.plantId) {
                                plants[j].history.push(new Date(response.data));
                            }
                        }
                    }
                }
            });
        });
    }
}