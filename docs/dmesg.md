## dmesg

DMESG (**short for diagnostic messages that is an internal debugging tool**) are communication log channels.
DMESG and LOG are totally different logging tools because DMESG is a system-level debugging tool (**refers to as I mentioned previously**), but
log is a high-level function used to print your own messages. To find the output of the DMESG debugging tool, open your browser's 
developer tool (F12 in most browsers), then click the console tab, and finally run your program in the simulator.
The function does not belong to only one PXT target, it exists in all PXT targets.

## Example 

``` ts
   control.dmesg("Hello");
```

``` cpp
  DMESG()
```

~~## Things that are unfinished for this content~~
~~Things that are pending: Please be patient for waiting where the dmesg logger is logged because I am still researching information about that, so be patient.~~
