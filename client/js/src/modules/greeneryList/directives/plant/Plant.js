export default function (plantService) {
    return {
        link: function ($scope) {
            $scope.getStatus = plantService.getPlantStatus;

            $scope.deletePlant = function () {
                $scope.$emit('deletePlant', {
                    greeneryId: $scope.greeneryId,
                    plantId: $scope.plant._id
                });
            };

            $scope.waterPlant = function () {
                $scope.$emit('waterPlant', {
                    greeneryId: $scope.greeneryId,
                    plantId: $scope.plant._id,
                    date: new Date
                });
            };
        },
        scope: {
            plant: '=plant',
            greeneryId: '=greenery'
        },
        templateUrl: '/js/src/modules/greeneryList/directives/plant/template.html'
    }
}