const BeaconScanner = require('node-beacon-scanner');

// const Buzzer = require('./buzzer');
const Logging = require('js-logging');



class Scanner {

    constructor() {
        this._scanner = new BeaconScanner();
        this._logger = new Logging();
    }
    
    scan() {
        this._logger.info('Scan started');
        this._scanner.startScan()
            .then(() => this._onSuccessScan())
            .catch(() => this._onFailureScan());
    }

    _onSuccessScan(result) {
        this._logger.debug('Scan done', result);
        console.log(this._onSuccessCb);
        this._onSuccessCb != null && this._onSuccessCb(result);
    }

    _onFailureScan(err) {
        this._logger.critical('Scan failure', err);
        this._onFailureCb != null && this._onFailureCb(err);
    }

    set onSuccess(fn) {
        this._onSuccessCb = fn
    }

    set onFailure(fn) {
        this._onFailureCb = fn
    }

}


module.exports = Scanner;