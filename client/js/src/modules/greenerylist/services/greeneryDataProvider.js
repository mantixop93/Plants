export default function ($http){

    var dataFactory = {};

    dataFactory.getPlants = function (user, greenery) {
        console.log("getPlants");
    };

    dataFactory.addPlant = function (user, greenery, plant) {
        console.log("addPlant");
        console.log(plant);
    };

    dataFactory.waterPlant = function (user, greenery, plant) {

    };

    dataFactory.deletePlant = function (user, greenery, plant) {
        console.log(plant)
    };

    dataFactory.addGreenery = function (user, greenery) {
        //return $http.delete(urlBase + '/' + id);
    };

    dataFactory.deleteGreenery = function (user, greenery) {

        //return $http.get(urlBase + '/' + id + '/orders');
    };

    return dataFactory;
}
