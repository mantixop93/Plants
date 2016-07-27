export default function ($http){

    let urlBase = "http://localhost:8080/api"

    var dataFactory = {};

    dataFactory.getGreeneries = function (user, callback) {
        $http.get(urlBase + '/user/' + user + '/greenery/').then(callback);
    };

    dataFactory.addGreenery = function (user, greenery, callback) {
        $http.post(urlBase + '/user/' + user + '/greenery/', {
            user: user,
            name: greenery
        }).then(callback);
    };

    dataFactory.deleteGreenery = function (user, greenery, callback) {
        $http.delete(urlBase + '/user/' + user + '/greenery/' + greenery).then(callback);
    };

    dataFactory.deletePlant = function (user, greenery, plant, callback) {
        $http.delete(urlBase + '/user/' + user + '/greenery/' + greenery + '/plant/' + plant).then(callback);
    };

    dataFactory.addPlant = function (user, greenery, plant, callback) {
        $http.post(urlBase + '/user/' + user + '/greenery/' + greenery + '/plant', plant).then(callback);
    };

    dataFactory.waterPlant = function (user, greenery, plant, date, callback) {
        $http.post(urlBase + '/user/' + user + '/greenery/' + greenery + '/plant/' + plant + '/history', {date: date}).then(callback);
    };

    return dataFactory;dd
}
