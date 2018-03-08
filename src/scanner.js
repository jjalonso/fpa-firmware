const BeaconScanner = require('node-beacon-scanner');

// const Buzzer = require('./buzzer');
const Logging = require('js-logging');



class Scanner {

    constructor() {
        this._scanner = new BeaconScanner();
        this._logger = new Logging();
        this._onSuccessCb = () => {};
        this._onFailureCb = () => {};
    }

    start() {
        this._scan();
    }
    
    _scan() {
        this._logger.info('Scan started');
        this._scanner.startScan()
            .then(() => this._onSuccessScan())
            .catch(() => this._onFailureScan());
    }

    _onSuccessScan(result) {
        this._logger.debug('Scan done');
        this._onSuccessCb();
    }

    _onFailureScan(err) {
        this._logger.critical('Scan failure');
        this._onFailureCb();
    }

    set onSuccessCb(fn) {
        this._onSuccessCb = fn
    }

    set onFailureCb(fn) {
        this._onFailureCb = fn
    }

}
// const scanner = new BeaconScanner();

// // Set an Event handler for becons
// scanner.onadvertisement = (ad) => {
//   console.log(JSON.stringify(ad, null, '  '));
// };
 
// // Start scanning
// scanner.startScan().then(() => {
//   console.log('Started to scan.')  ;
// }).catch((error) => {
//   console.error(error);
// });


module.exports = Scanner;