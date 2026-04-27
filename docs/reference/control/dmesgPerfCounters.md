## dmesgPerfCounters

``` sig 
   control.dmesgPerfCounters();
```

Print values of all runtime performance counters into the DMESG.

The counter is a number that increases every time an event occurs.

## Example
``` ts
  control.enablePerfCounter("Hello!")
  control.dmesgPerfCounters(); // prints all performance counters into the debugging buffer.
```

## See also

[DMESG](https://github.com/DeveloperTryingToCodeLikeOtherOfThem/pxt-hardware-programming-docs/blob/master/docs/dmesg.md)
