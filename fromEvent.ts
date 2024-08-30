import {fromEvent} from "rxjs";

const button = document.querySelector('button') as EventTarget;

const observable$ = fromEvent<MouseEvent>(button, 'click');

observable$.subscribe(event => {
    console.log(`Clicked at (${event.x}, ${event.y})`);
})
