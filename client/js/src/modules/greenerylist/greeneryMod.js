import * as angular from 'angular';

import GreeneryController from './controllers/GreeneryController';

import AddPlantComponent from './components/addPlant/AddPlant';
import AddGreeneryComponent from './components/addGreenery/AddGreenery'
import GreeneryListComponent from './components/greeneryList/GreeneryList';

import PlantListDirective from './directives/plantList/PlantList';
import PlantDirective from './directives/plant/Plant';

import dataProvider from './services/greeneryDataProvider'
import plantService from './services/plant'


var app = angular.module('greenery', []);
app.factory("dataProvider", ['$http', dataProvider]);
app.factory("plantService",  plantService);

app.controller('GreeneryController', GreeneryController);
app.component('addPlant', AddPlantComponent);
app.component('greeneryList', GreeneryListComponent);
app.component('addGreenery', AddGreeneryComponent);
app.directive('plantList', PlantListDirective);
app.directive('plantView', ['plantService', PlantDirective]);

app.run(['$http','$rootScope','dataProvider', function($http, $rootScope, dataProvider) {
    $rootScope.dataProvider = dataProvider;
}])