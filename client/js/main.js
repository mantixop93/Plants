//Creat greenery

var greenery = new Greenery("MyGreenery4");

//Check status - empty string

console.log(greenery.getStatusForAllPlants());

//Add plant
//params: name, location, period in days, lastWatering (now by default)

greenery.addPlant("Plant1", "Table", 3);

//Check status
console.log(greenery.getStatusForAllPlants());

//Add more plants
greenery.addPlant("Plant2", "Table", 2);
greenery.addPlant("Plant3", "Windowsill", 1);

//Check status
console.log(greenery.getStatusForAllPlants());

//Check status by location
console.log(greenery.getStatusByLocation("Windowsill"));

//Remove plants with name
greenery.removePlant("Plant1");
console.log(greenery.getStatusForAllPlants());

//Whatering
greenery.waterPlant("Plant2");
console.log(greenery.getStatusForAllPlants());

//History 
console.log(greenery.getPlantHistory("Plant2"));