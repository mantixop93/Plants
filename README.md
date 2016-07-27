**To start server**

    $ npm install

    $ npm run build 

    $ npm run server


**To start DB**

    $ npm run db





**Implemented API:**

 - GET /api/user/:userId/greenery - get list of greeneries by user ID.
 
 - GET /api/user/:userId/greenery/:greeneryID - get greenery by user ID & greenery ID.
   
 - POST /api/user/:userId/greenery/ - create greenery; 
 
	 - body: {user: userId, name: greeneryName};  
	 - response: {user: userId, name: greeneryName, _id: greeneryId, plants:[]}.

  
 - DELETE /api/user/:userId/greenery/:greeneryId - delete greenery by user ID & greeneryID.
 - GET /api/user/:userId/greenery/:greeneryId/plant/:plantId - get plant by user ID, greenery ID and plant ID.
  
 - POST /api/user/:userId/greenery/:greeneryId/plant - push plant to greenery.plants array.
	 - body: {name: plantName, period: plantPeriod, history: [lastWatering]};    
	 - response: { _id: plantId, name: plantName, period: plantPeriod, history: [lastWatering]}.

  
 - DELETE /api/user/:userId/greenery/:greeneryId/plant/:plantId - delete plant by user ID, greenery ID and plant ID.
 - POST /api/user/:userId/greenery/:greeneryId/plant/:plantId/history/
	 - body: {date: newLastWateringDate};  
	 - response: {date: newLastWateringDate}.

**TODO:**

 - PUT /api/user/:userId/greenery/:greeneryId 
 - PUT /api/user/:userId/greenery/:greeneryId/plant/:plantId
