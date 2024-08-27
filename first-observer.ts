import {Observable} from "rxjs";

const namesObservable$ = new Observable<string>(subscriber => {
    subscriber.next('Arsène');
    subscriber.next('Arnaud');
    subscriber.next('Armand');
    setTimeout(() => {
        subscriber.next('Arnold')
    }, 2000);

    setTimeout(() => {
        subscriber.next('Arnauld')
    }, 5000);
});

const observer = {
    next: (value: string) => console.log(`Hello ${value}`)
};

const subscription = namesObservable$.subscribe(observer);
setTimeout(() => subscription.unsubscribe(), 3000);
