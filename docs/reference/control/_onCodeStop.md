## _onCodeStop

``` ts
control._onCodeStop(args: any): void;
```
A shutdown hook used by the PXT runtime, similar to _onCodeStop.
It fires after the main program fiber finishes, right before MakeCode stops everything.
This function is **not** recommended to use. **Note that not every PXT target supports this function,
it is just because it is together in the common packages.**

## See also

[_onCodeStart](https://github.com/DeveloperTryingToCodeLikeOtherOfThem/pxt-hardware-programming-docs/blob/master/docs/reference/control/_onCodeStart.md)
