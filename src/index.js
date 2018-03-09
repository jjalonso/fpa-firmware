const Scanner = require('./scanner.js');
const Buzzer = require('./buzzer.js');


class Main {

    constructor() {
      this._scanner = new Scanner();
      this._buzzer = new Buzzer(27);
      this._bindEvents();
    }

    start() {
        this._scanner.scan();
    }

    _bindEvents() {
        this._scanner.onSuccess = () => this._onSuccessScan;
        this._scanner.onFailure = () => this._onFailureScan;
    }

    _onSuccessScan(result) {
        console.log('TODO: SUCCESS')
        console.log(result);
    }

    _onFailureScan(err) {
        console.log('TODO: FAILURE');
        console.log(err)
    }

}

main = Main();
main.start();