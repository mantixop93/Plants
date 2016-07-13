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
        var answer = "Location: " + this.location + "; Name: "+ this.name + "; Status: ";
        
        if (now < next) {
            answer += "need to be watered in " + Math.ceil((next - now) / day ) + " day(s)"; 
        } else {
            if (now - next <= day) {
                answer += "need to be watered today";
            } else {
                answer += Math.ceil((next - now) / day) + " day(s) delay";
            }
        }
        
        return answer + ";\n";
    }
    
    this.watering(lastWatering);
}

Plant.revive = function(obj) {
    var restored = new Plant(obj.name, obj.location, obj.period);
    
    for (var i = 0; i < obj.history.length; i++) {
        restored.watering(new Date(obj.history[i]));
    }
    
    return restored;
}