import {Observable} from "rxjs";

const namesObservable$ = new Observable<string>(subscriber => {
    subscriber.next('Arsène');
    subscriber.next('Arnaud');
    subscriber.next('Armand');
});

const observer = {
    next: (value: string) => console.log(`Hello ${value}`)
};

const subscription = namesObservable$.subscribe(observer);
subscription.unsubscribe();
