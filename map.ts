import {from, map, tap} from "rxjs";

from([1, 2, 3, 4, 5, 6, 7, 8]).pipe(
    tap(value => console.log(value)),

    map(value => ({
        value,
        isEven: value % 2 === 0
    })),
).subscribe(value => console.log(value));