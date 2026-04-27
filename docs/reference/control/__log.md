## __log
logs text with priority levels.
``` sig
   control.__log(1, "");
```
There are 5 console priorities in total, which include Debug (0), Log (1), Warning (2), Error (3), and Silent (4).
The priorities are executed on DevTools, while the serial port simply has 1 priority, log.

## Example
Log a string that displays the word "Hello" with a priority level of 1. 
``` ts
    control.___log(1, "Hello")
```
