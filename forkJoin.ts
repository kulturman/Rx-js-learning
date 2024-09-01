import {forkJoin, of, timer} from 'rxjs';

forkJoin([
    of([1, 2, 3]),
    timer(3000)
]).subscribe({
    next: ([value1, value2]) => console.log(
        `Value 1: ${value1}, Value 2: ${value2}`
    ),
});