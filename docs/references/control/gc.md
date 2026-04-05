## gc

Forces the garbage collector and [dump](https://github.com/DeveloperTryingToCodeLikeOtherOfThem/pxt-hardware-programming-docs/master/docs/dump.md) basic information about the heap.
``` sig
   control.gc();
```
* Garbage Collector: Automatically cleans memory

## Example
Let us say you want to collect information about the heap when `seconds` equal 100.
``` ts
   let seconds = 0;
   info.setScore(score);

    control.registerFrameHandler(20, () => {
        if (seconds == 100) {
        control.gc();
        } 
    })
```
