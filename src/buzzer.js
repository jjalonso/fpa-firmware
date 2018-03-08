const Gpio = require('onoff').Gpio;
const Logging = require('js-logging');

class Buzzer {

    constructor(pin) {
        this._resource = new Gpio(pin, 'out');
        this._logger = new Logging();        
    }

    beep(time) {
        this._logger.info('Beep');
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