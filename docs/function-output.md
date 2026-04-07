When you log a function in MakeCode using `console.log(f)`, you might expect to see something simple like:

```ts
function f() { return 123 }
```


Instead, the MakeCode simulator prints something like this:

```js
function f__P19063(s) {
    let r0 = s.r0, step = s.pc;
    s.pc = -1;
    while (true) {
        if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
        switch (step) {
        case 0:
            r0 = 123;
            return leave(s, r0)
        default: oops()
        }
    }
}
```

This looks strange if you’re expecting normal JavaScript. But this output is actually a window into how the PXT compiler and MakeCode virtual machine work under the hood.
You should **never** play around this code, it is how MakeCode compiler reads your TypeScript, and runs it.
