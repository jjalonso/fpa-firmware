const Gpio = require('onoff').Gpio;
const Logging = require('js-logging');

class Buzzer {

    constructor(pin) {
        this._resource = new Gpio(pin, 'out');
        this._logger = new Logging();        
        this._resource.writeSync(1);
    }

    beep(time=5000) {
        this._logger.info('Beep');
        this._resource.writeSync(0);
        setTimeout(() => {console.log('timeout!'); this._resource.writeSync(1)}, time);
    }

    alarm(beepTime=500) {
        this.beep(beepTime);
        setTimeout(() => this.beep(beepTime), beepTime * 2)
        setTimeout(() => this.beep(beepTime), beepTime * 3)
    }

}

module.exports = Buzzer;