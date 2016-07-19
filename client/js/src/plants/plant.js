module.exports = class {
    constructor(config) {
        this.name = config.name;
        this.location = config.location;
        this.period = config.period;
        this.history = [];
        if (config.history === undefined) {
           this.history.push(config.last)
        } else {
            this.history = config.history;
        }
    }

    lastWatering() {
        return this.history[this.history.length-1];
    }

    nextWatering() {
        let date = new Date(this.lastWatering());
        return new Date(date.setTime(date.getTime() + this.period * 86400000));
    }

    watering(date) {
        let lastWatering = date || new Date();
        this.history.push(lastWatering);
    }

    getStatus() {
        let prev = new Date();
        let next = this.nextWatering();
        let day = 1000 * 3600 * 24;

        if (prev < next) {
            return Math.ceil((next - prev) / day);
        } else {
            if (prev - next <= day) {
                return 0;
            } else {
                return Math.ceil((next - prev) / day);
            }
        }
    }
};