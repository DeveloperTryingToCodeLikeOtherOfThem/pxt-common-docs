## _onCodeStart

``` ts 
 control._onCodeStart(args: any): void
```
An internal function that is **not** recommended to use.
The function suppose to be a runtime hook that fires before the system sets up and runs. It is related 
to the PXT schedule, not the arcade game engine.

## See also
[_onCodeStop](https://arcade.makecode.com/---docs?md=%23%23%20_onCodeStop%0A%0A%60%60%60%20ts%0Acontrol._onCodeStop(args%3A%20any)%3A%20void%3B%0A%60%60%60%0AA%20shutdown%20hook%20used%20by%20the%20PXT%20runtime%2C%20similar%20to%20_onCodeStop.%0AIt%20fires%20after%20the%20main%20program%20fiber%20finishes%2C%20right%20before%20MakeCode%20stops%20everything.%0AThis%20function%20is%20**not**%20recommended%20to%20use.%0A%0A%23%23%20See%20also%0A%0A%5B_onCodeStart%5D(https%3A%2F%2Fgithub.com%2FDeveloperTryingToCodeLikeOtherOfThem%2Fpxt-hardware-programming-docs%2Fblob%2Fmaster%2Fdocs%2F_onCodeStart.md)%0A)
