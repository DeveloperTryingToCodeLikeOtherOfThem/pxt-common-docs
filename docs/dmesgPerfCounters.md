## dmesgPerfCounters

``` sig 
   control.dmesgPerfCounters();
```

Print values of the runtime's performance counters into the DMESG debugging buffer.

Counter: a number that increases every time an event occurs.

## Example
``` ts
  control.enablePerfCounter("Hello!")
  control.dmesgPerfCounters(); // prints all performance counters into the debugging buffer.
```
