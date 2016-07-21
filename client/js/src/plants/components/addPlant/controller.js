export default class {
    constructor($scope) {
        $scope.name = 'vazon';
        $scope.location = 'table';
        $scope.period = 3;
        $scope.last = new Date;
        $scope.error = '';

        this.submitHendler = function () {

            let valid = this.plants.find((item) => {
                if (item.name === $scope.name)
                    return true;
            })

            if (!valid) {
                let plant = {
                    name: $scope.name,
                    location: $scope.location,
                    period: $scope.period
                }

                plant.history = [new Date($scope.last)];
                $scope.error = '';
                this.plants.push(plant);
            } else {
                $scope.error = 'Name need to be unique';
            }
        }
    }
}