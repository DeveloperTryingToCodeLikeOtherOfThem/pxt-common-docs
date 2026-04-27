## Managing Panics
There are 2 types of panic states.
The first panic state is a soft_panic, which is a regular safe panic, whereas target_panic
is a hard crash type of panic, not a regular type
of error. 

The `control.panic` implementation is written like this in the runtime.
TypeScript: 
``` ts
   export function panic(code: number) {
            U.userError("PANIC! Code " + code) // throw a panic code to the problems pane
   }
```

C++:
``` cpp  
   void pxtrt::panic(int code) {
     soft_panic(code); // because this is a high level panic function, it calls the safe normal panic, not a hard crash panic
   }
``` 
