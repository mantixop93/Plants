function Plant(name, location, period, lastWatering) {
    this.name = name;
    this.location = location;
    this.period = period;
    this.history = [];
    
    this.lastWatering = function() {
        return this.history[this.history.length-1];
    }
    
    this.nextWatering = function() {
        var date = new Date(this.lastWatering());
        date.setDate(date.getDate() + period);
        return date;
    }
    
    this.watering = function(date) {
        var lastWatering = date || new Date(); 
        this.history.push(lastWatering);
    }
    
    /*
    You have 24h after (lastWatering + period) pased to water plant. 
    */
    
    this.getStatus = function(){
        var now = new Date();
        var next = this.nextWatering();
        var day = 1000 * 3600 * 24;
        var answer;
        
        if (now < next) {
            answer = "need to be watered in " + Math.ceil((next - now) / day ) + " day(s)"; 
        } else {
            if (now - next <= day) {
                answer = "need to be watered today";
            } else {
                answer = Math.ceil((next - now) / day) + " day(s) delay";
            }
        }
        
        return answer;
    }
    
    this.watering(lastWatering);
}


Plant.revive = function(obj) {
    var restored = new Plant(obj.name, obj.location, obj.period);
    
    for (var i = 0; i < obj.history.length; i++) {
        restored.watering(obj.history[i]);
    }
    
    return restored;
}

function Greenery(name) {

    this.name = name;
    
    var load = function(name) {
        var storedGreenery = this.localStorage.getItem(name);
        var plants = [];
        
        if (storedGreenery !== null) {
            var storedPlants = JSON.parse(storedGreenery).plants;
            for (var i = 0; i < storedPlants.length; i++) {
                plants.push(Plant.revive(storedPlants[i]));
            }
        }
        
        return plants;
    }
    
    this.plants= load(name);
    
    //TODO: Why var functions inside constractor has global scope?
    
    var save = function(context) {
        this.localStorage.setItem(name, JSON.stringify(context));
    }
    
    //TODO: How to avoid dublication? 
    
    this.addPlant = function(name, location, period, lastWatering) {
        this.plants.push(new Plant(name, location, period, lastWatering));
        save(this);
    }
    
    this.getStatus = function() {
        var result = "";
        
        for (var i = 0; i < this.plants.length; i++) {
            result += this.plants[i].name + " : " + this.plants[i].getStatus() + ";\n";
        }
        
        return result;
    }
}

var gr = new Greenery("Greenery");
