export default function (plantService) {
    return {
        link: function ($scope) {
            $scope.plants = $scope.greenery.plants;
            $scope.getRowClass = plantService.getRowClass;

            $scope.deleteGreenery = function () {
                $scope.$emit('deleteGreenery', {
                    _id: $scope.greenery._id
                });
            };
        },
        scope: {
            greenery: '=greenery'
        },
        templateUrl: '/js/src/modules/greeneryList/directives/plantList/template.html'
    }
}