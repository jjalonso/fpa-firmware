const BeaconScanner = require('node-beacon-scanner');

// const Buzzer = require('./buzzer');
const Logging = require('js-logging');



class Scanner {

    constructor() {
        this._scanner = new BeaconScanner();
        this._logger = new Logging();
    }

    start() {
        this._scan();
    }
    
    _scan() {
        this._logger.info('Scan started');
        this._scanner.startScan()
            .then(() => this._onSuccessScan)
            .catch(() => this._onFailureScan);
    }

    _onSuccessScan(result) {
        this._logger.debug('Scan done');
    }

    _onFailureScan(err) {
        this._logger.critical('Scan failure');

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