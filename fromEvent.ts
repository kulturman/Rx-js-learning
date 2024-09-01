import {fromEvent} from "rxjs";

const button = document.querySelector('button') as EventTarget;

if (button != null) {
    const observable$ = fromEvent<MouseEvent>(button, 'click');

    observable$.subscribe(event => {
        console.log(`Clicked at (${event.x}, ${event.y})`);
        const text = document.querySelector('p') as HTMLElement;
        text.innerText = `(${event.x}, ${event.y})`
    })
}
