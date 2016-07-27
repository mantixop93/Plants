export default class {
    constructor($scope) {
        $scope.name = 'vazon';
        $scope.period = 3;
        $scope.last = new Date;
        $scope.greeneries = this.greeneries;

        this.submitHendler = function () {
            if ($scope.greenery != undefined) {
                let plant = {
                    name: $scope.name,
                    period: $scope.period,
                    history: [$scope.last]
                };

                $scope.error = "";

                $scope.$emit('addPlant', {
                    greeneryId: $scope.greenery,
                    plant: plant
                });
            } else {
                $scope.error = "Select greenery"
            }
        }
    }
}