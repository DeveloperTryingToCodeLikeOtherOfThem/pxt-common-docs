The assertion failure function is a function that checks if the condition is true.
The function is **not** exported in any PXT platform, instead you have to use a shim to access
this function.

Here is the shim path.

`//% shim=pxt::getThrownValue`

There is a `control.assert` function, but it is too high level and different compared to this function.

Here is a snippet showing it correctly.

``` ts
    //% shim=pxt::getThrownValue
    declare function assert(): void;
```
