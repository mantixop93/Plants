To start server

$ npm install

$ npm run build 

$ npm run server


To start DB

$ npm run db





API:

GET /api/user/:userId/greenery - get list of greeneries by user ID.


GET /api/user/:userId/greenery/:greeneryID - get greenery by userId & greeneryId.


POST /api/user/:userId/greenery/ - create greenery;

body: {user: userId, name: greeneryName};

response: {user: userId, name: greeneryName, _id: greeneryId, plants: []}.


DELETE /api/user/:userId/greenery/:greeneryId - delete greenery by userId & greeneryId.


GET /api/user/:userId/greenery/:greeneryId/plant/:plantId - get plant by userId, greeneryId and plantId.


POST /api/user/:userId/greenery/:greeneryId/plant - push plant to greenery.plants array.

body: plant;

response: plant with _id.


DELETE /api/user/:userId/greenery/:greeneryId/plant/:plantId - delete plant by userId, greeneryId and plantId.


POST /api/user/:userId/greenery/:greeneryId/plant/:plantId/history/ - add watering time to plant.history;

body: {date: newLastWateringDate};

response: {date: newLastWateringDate}.