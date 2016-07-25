import * as angular from 'angular';
import GreeneryController from './controllers/GreeneryController';
import AddPlantComponent from './components/addPlant/AddPlant';
import AddGreeneryComponent from './components/addGreenery/AddGreenery';
import PlantListComponent from './components/plantList/PlantList';
import dataProvider from './services/greeneryDataProvider'
import GreeneryListComponent from './components/greeneryList/GreeneryList';

var app = angular.module('greenery', []);
app.factory("dataProvider", ['$http', dataProvider]);


app.controller('GreeneryController', GreeneryController);
app.component('addPlant', AddPlantComponent);
app.component('plantList', PlantListComponent);
app.component('greeneryList', GreeneryListComponent);
app.component('addGreenery', AddGreeneryComponent);

app.run(['$http','$rootScope','dataProvider', function($http, $rootScope, dataProvider) {
    $rootScope.dataProvider = dataProvider;
}])