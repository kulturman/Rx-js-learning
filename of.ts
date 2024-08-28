import {Observable, of} from "rxjs";

of('Arnaud', 'Bob', 'Cody').subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed')
});


function myOwnOf(...elements: string[]) {
    return new Observable<string>(subscriber => {
        for (const element of elements) {
            subscriber.next(element);
        }
    });
}

myOwnOf('Hello', 'Dude', 'How', 'Are', 'You').subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed')
})
