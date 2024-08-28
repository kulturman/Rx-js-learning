import {Observable} from "rxjs";

const observable$ = new Observable<number>(subscriber => {
   for (let i = 0; i < 10; i++) {
       subscriber.next(i);
   }

   subscriber.complete();

   return () => {
       console.log('Cleaning up resources!!');
   }
});


observable$.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Done, no more values to listen for')
})
