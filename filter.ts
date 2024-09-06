import {filter, of} from "rxjs";

const observer$ = of(1, 2, 3, 4, 5, 6, 7, 8).pipe(
    filter(v => v % 2 === 0)
);

observer$.subscribe({
    next: v => console.log(`Emitted value: ${v}`)
})