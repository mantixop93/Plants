import * as angular from 'angular';
import GreeneryController from './controllers/GreeneryController';
import AddPlantComponent from './components/addPlant/AddPlant';
import PlantListComponent from './components/plantList/PlantList';


var app = angular.module('greenery', []);

app.controller('GreeneryController', GreeneryController);
app.component('addPlant', AddPlantComponent);
app.component('plantList', PlantListComponent);