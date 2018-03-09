const Scanner = require('./scanner.js');
const Buzzer = require('./buzzer.js');


class Main {

    constructor() {
        this._running = false;
        this._scanner = new Scanner();
        this._buzzer = new Buzzer(27);
        this._bindEvents();
    }

    start() {
        this._runnning = true;
        this._scanner.scan();
    }

    _bindEvents() {
        this._scanner.onSuccess = (result) => this._onSuccessScan(result);
        this._scanner.onFailure = (err) => this._onFailureScan(err);
    }

    _onSuccessScan(result) {
        this._buzzer.beep();
        console.log('TODO: SUCCESS');
        console.log(result);
        if (this._running) { this._scanner.scan() };
    }

    _onFailureScan(err) {
        console.log('TODO: FAILURE');
        console.log(err)
    }

}

main = new Main();
main.start();