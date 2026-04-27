## heapSnapshot

Record a heap snapshot to debug memory leaks.
The heap snap snapshot is is a complete serialized representation of the runtime’s heap at a specific moment in execution.
``` sig
   control.heapSnapshot();
```
Logged in the DevTools logging system.

## Example
Get objects in the heap every 2 seconds.
``` ts
   game.onUpdateInterval(2000, () => {
       control.heapSnapshot()
   })
```
