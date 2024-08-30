import {from} from "rxjs";

from(['Alice', 'Bob', 'Clyde', 'Dylan']).subscribe(v => console.log(v));

from(Promise.resolve('Dude')).subscribe(v => console.log(v));
