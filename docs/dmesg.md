## dmesg

DMESG (**short for diagnostic message is an internal debugging tool**) is a communication log channel.

## LOG vs DMESG
DMESG and LOG are totally different logging tools because DMESG is a system-level debugging tool (**refers to as I mentioned previously**), but
log is a high-level function used to print your own messages. 

## DMESG LOGGING
# In The Browser
To find the output of the DMESG debugging tool, open your browser's  
developer tool (F12 in most browsers), then click the console tab, and finally run your program in the simulator.
The function does not belong to only one PXT target, it exists in all PXT targets.
# In Hardware
To find the output of the DMESG debugging tool,view this with a serial monitor conected to the device's debug connector.

## Example 

In TypeScript:
``` ts
   control.dmesg("Hello");
```

In C++:
``` cpp
  DMESG("HELLO!")
```

## TypeScript vs C++ for logging
In both languages, both of these can sort of be like being relative, but it is more accurate by saying "directly related", which tells us
they are very similar.

## See also

[Dmesg Performance Counters](https://github.com/DeveloperTryingToCodeLikeOtherOfThem/pxt-hardware-programming-docs/blob/master/docs/reference/control/dmesgPerfCounters.md)
