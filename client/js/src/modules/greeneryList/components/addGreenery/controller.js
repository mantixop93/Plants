export default class {
    constructor($scope) {
        $scope.name = 'plants';

        $scope.submitHendler = function () {
            $scope.$emit('addGreenery', {
                greenery : $scope.name,
            });
        }
    }
}