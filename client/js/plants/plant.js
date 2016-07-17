function Plant(config) {
    this.name = config.name;
    this.location = config.location;
    this.period = config.period;
    this.history = [];
    
    this.lastWatering = function() {
        return this.history[this.history.length-1];
    }
    
    this.nextWatering = function() {
        var date = new Date(this.lastWatering());
        return new Date(date.setTime(date.getTime() + this.period * 86400000 ));;
    }
    
    this.watering = function (date) {
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
        
        if (now < next) {
            return "need to be watered in " + Math.ceil((next - now) / day ) + " day(s)"; 
        } else {
            if (now - next <= day) {
                return "need to be watered today";
            } else {
                return Math.abs(Math.ceil((next - now) / day)) + " day(s) delay";
            }
        }
    }
    
    if (config.history !== undefined) {
        for (var i = 0; i < config.history.length; i++) {
            this.watering(new Date(config.history[i]));
        }
    } else {
        this.watering(config.last);
    } 
}