## Throw function

The **throwValue** function throws a value similar to the throw syntax. The difference is that
the throw value function is the core that implemented the throw syntax for the MakeCode environment.

Here is the shim for getting the function.

`//% shim=pxt::throwValue` 

Comments from the MakeCode Team.
``` ts
// this is equivalent to JS `throw v`; it will leave
// the current function(s), all the way until the nearest try block and
// ignore all destructors (think longjmp())
```
