import {from, map} from "rxjs";

from([1, 2, 3, 4, 5, 6, 7, 8]).pipe(
    map(value => ({
        value,
        isEven: value % 2 === 0
    }))
).subscribe(value => console.log(value));