## heapSnapshot
<img width="735" height="64" alt="Screenshot 2026-04-20 8 11 43 PM" src="https://github.com/user-attachments/assets/8c2c1839-b218-48cb-bc91-f9db9e8ce768" />

Record a heap snapshot to debug memory leaks.
The heap snap snapshot is is a complete serialized representation of the runtime’s heap at a specific moment in execution.

## Example
Get objects in the heap every 2 seconds.
``` ts
   game.onUpdateInterval(2000, () => {
       control.heapSnapshot()
   })
```
