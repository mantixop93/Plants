export default class {
    constructor($scope) {
        $scope.name = 'vazon';
        $scope.period = 3;
        $scope.last = new Date;
        $scope.greenery = 'default';

        this.submitHendler = function () {
            let plant = {
                name: $scope.name,
                period: $scope.period
            }

            $scope.$emit('addPlant', {
                greenery : $scope.greenery,
                plant: plant
            });
        }
    }
}