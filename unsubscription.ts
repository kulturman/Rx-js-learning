import {Observable} from "rxjs";

const observable$ = new Observable<string>(subscriber => {
    const names = ['Alice', 'Bruce', 'Carmen', 'Derek', 'Eulalie'];

    const interval = setInterval(() => {
        const index = Math.floor(Math.random() * names.length);
        console.log('Emitting another value : ' + index);
        subscriber.next(names[index]);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 3000);

    return () => {
        console.log('Cleaning up here');
        clearInterval(interval);
    }
})


const subscription = observable$.subscribe({
    next: value => console.log(`Hello ${value}`),
    complete: () =>  console.log('No more values to receive here')
});

setTimeout(() => subscription.unsubscribe(), 5000);
