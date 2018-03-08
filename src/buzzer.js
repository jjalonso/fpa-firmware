const Gpio = require('onoff').Gpio;

class Buzzer {

    constructor() {
        this._resource = new Gpio(27, 'out');
    }

    beep(time) {
        this._resource.writeSync(0);
        setTimeout(() => this._resource.writeSync(1), time);
    }

    ring() {
        var beepTime = 500;
        this.beep(beepTime);
        setTimeout(() => this.beep(beepTime), beepTime * 2)
        setTimeout(() => this.beep(beepTime), beepTime * 3)
    }

}

exports.module = Buzzer;