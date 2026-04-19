## Assert Failure Function
The assertion failure function is a function that checks if the condition is true.
The function is **not** exposed in any PXT platform, instead use a shim to access
this function.

Here is the shim path.

`//% shim=pxt::getThrownValue`

There is a `control.assert` function, but it is different and more limited compared to this function.

## Declaration
The declaration behaves like this when writing the script.

``` ts
    //% shim=pxt::getThrownValue
    declare function assert(): void;
```
 
  
