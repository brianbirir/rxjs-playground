import { Observable } from 'rxjs';

var observable = Observable.create((observer: any) => {
    observer.next('Hello World!');
    observer.next('Hello Again!');
    observer.complete();
    observer.next('Bye');

})

observable.subscribe(
    (x :any) => logItem(x),
    (error: any) => logItem("Error: " + error),
    () => logItem('Completed'),
)

function logItem(val: any) {
    var node = document.createElement("li");
    node.classList.add("list-group-item");
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("list").appendChild(node);
}