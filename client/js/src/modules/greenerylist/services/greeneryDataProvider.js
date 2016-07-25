export default function ($http){

    var dataFactory = {};

    dataFactory.getPlants = function (user, greenery) {
        console.log("getPlants");

    };

    dataFactory.addPlant = function (user, greenery, plant) {
        console.log("addPlant");
        console.log(plant);
    };

    dataFactory.insertCustomer = function (cust) {
        return $http.post(urlBase, cust);
    };

    dataFactory.updateCustomer = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    dataFactory.deleteCustomer = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    dataFactory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };

    return dataFactory;
}
