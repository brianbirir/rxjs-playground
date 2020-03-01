import { Observable, of, from, fromEvent, concat } from "rxjs";
import "bootstrap";

import { allBooks, allReaders } from "../data/books";

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

let source1$ = of("hello", 10, true, allReaders[0].name);

// source1$.subscribe((value: any) => console.log(value));

let source2$ = from(allBooks);

// source2$.subscribe((value: any) => console.log(value));

concat(source1$, source2$).subscribe((value: any) => console.log(value));
