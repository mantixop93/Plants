export default class {
    constructor($scope) {
        $scope.user = "defaultUser";
        $scope.greeneries = [];

        $scope.$on("addPlant", function (event, data) {
            let gr = $scope.greeneries;

            for(let i = 0; i < gr.length; i++) {
                if (gr[i].name == data.greenery) {
                    gr[i].plants.push(data.plant);
                }
            }

            $scope.dataProvider.addPlant($scope.user, data.greenery, data.plant);
        });

        $scope.$on("deletePlant", function (event, data) {
            let gr = $scope.greeneries;

            for(let i = 0; i < gr.length; i++) {
                if (gr[i].name == data.greenery) {
                    let plants = gr[i].plants;
                    for (let j = 0; j < plants.length; j++) {
                        if (plants[j].name == data.plant) {
                            plants.splice(j, 1);
                        }
                    }
                }
            }
        });

        $scope.$on("deleteGreenery", function (event, data) {

            //TODO: WTF?

            for (let j = 0; j < $scope.greeneries.length; j++) {
                if ($scope.greeneries[j].name == data.greenery) {
                    console.log($scope.greeneries[j].name)
                    $scope.greeneries.splice(j, 1);
                }
            }

        });

        $scope.$on("addGreenery", function (event, data) {
            $scope.greeneries.push({
                name: data.greenery,
                plants: []
            })
        });

        $scope.$on("waterPlant", function(event, data) {
            let gr = $scope.greeneries;

            for(let i = 0; i < gr.length; i++) {
                if (gr[i].name == data.greenery) {
                    let plants = gr[i].plants;
                    for (let j = 0; j < plants.length; j++) {
                        if (plants[j].name == data.plant) {
                            plants[j].history.push(data.date);
                        }
                    }
                }
            }
        });
    }
}