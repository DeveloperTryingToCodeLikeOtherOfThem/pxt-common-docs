If you did not know, there is a function in the runtime layer called **throwValue**.
This function behaves the same way as the throw syntax, it is just a other way for using the
function.

Here is the shim for getting this function.

`//% shim=pxt::throwValue` 

You could think of it as you are driving into a secret place. 🚙

Comments from the MakeCode Team.
``` ts
// this is equivalent to JS `throw v`; it will leave
// the current function(s), all the way until the nearest try block and
// ignore all destructors (think longjmp())
```
