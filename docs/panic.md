## Managing Panics
There are 2 types of panic states.
The first panic state is a soft_panic, which is a regular safe panic, whereas target_panic
is a hard crash type of panic, not a regular type
of error. 

The `control.panic` implementation is written like this in the runtime.
``` ts
   export function panic(code: number) {
            U.userError("PANIC! Code " + code) // throw a panic code to the problems pane
   }
```
