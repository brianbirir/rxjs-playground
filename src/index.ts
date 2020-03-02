import { Observable, of, from, fromEvent, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import 'bootstrap';

import { allBooks, allReaders } from '../data/books';

// let allBooksObservable$ = Observable.create((subscriber: any) => {
//   if (document.title !== "RxBookTracker") {
//     subscriber.error("Incorrect page title");
//   }
//   for (let book of allBooks) {
//     subscriber.next(book);
//   }
//   setTimeout(() => {
//     subscriber.complete();
//   }, 2000);

//   return () => console.log("Executing teardown code.");
// });

// allBooksObservable$.subscribe((book: any) => console.log(book.title));

// OF()

// let source1$ = of("hello", 10, true, allReaders[0].name);

// source1$.subscribe((value: any) => console.log(value));

// FROM()

// let source2$ = from(allBooks);

// source2$.subscribe((value: any) => console.log(value));

// CONCAT()

// concat(source1$, source2$).subscribe((value: any) => console.log(value));

// let button = document.getElementById('readersButton');

// FROMEVENT() DOM stream

// fromEvent(button, 'click').subscribe(event => {
//   console.log(event);
//   let readersDiv = document.getElementById('readers');

//   for (let reader of allReaders) {
//     readersDiv.innerHTML += reader.name + '<br>';
//   }
// });

let button = document.getElementById('readersButton');

fromEvent(button, 'click').subscribe(event => {
  ajax('/data').subscribe(ajaxResponse => {
    console.log(ajaxResponse);
    let readersDiv = document.getElementById('readers');
    for (let reader of allReaders) {
      readersDiv.innerHTML += reader.name + '<br>';
    }
  });
});
