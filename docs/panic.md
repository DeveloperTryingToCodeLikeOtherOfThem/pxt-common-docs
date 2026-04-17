## Managing Panics
There are 2 types of states where panics come.
For example, the soft_panic, is the normal and
safer version of the panic, whereas target_panic
is a hard crash type of panic, not a regular type
of error. 

The `control.panic` implementation is written like this in the runtime.
``` ts
   export function panic(code: number) {
            U.userError("PANIC! Code " + code) // throw a panic code to the problems pane
   }
```
