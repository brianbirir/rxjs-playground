var Rx = require('rxjs/Rx');

Rx.fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));