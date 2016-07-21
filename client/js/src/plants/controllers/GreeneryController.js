export default class {
    constructor($scope) {
        $scope.name = 'plants';
        $scope.plants = [];

        $scope.socket = io.connect();

        $scope.$watchCollection('plants', function () {
            $scope.socket.emit('save', {
                name:  $scope.name,
                plants:  $scope.plants
            });
        }, true);

        $scope.socket.emit('load', $scope.name, function(data) {
            data.plants.forEach(function(item) {
                $scope.plants.push(item);
            });
            $scope.$apply();
        });
    }
}