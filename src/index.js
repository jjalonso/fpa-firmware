const Scanner = require('./scanner.js');
const Buzzer = require('./buzzer.js');

const buzzer = new Buzzer(27);
const scanner = new Scanner();
scanner.onSuccessCb(buzzer.beep);
scanner.start();