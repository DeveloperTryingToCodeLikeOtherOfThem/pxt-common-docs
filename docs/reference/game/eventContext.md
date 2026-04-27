##  eventContext
Gets the scene's eventContext.
``` sig
game.eventContext();
```

## Returns
the EventContext object for the active scene.

## Example
Manage the frame handlers for the scene and log the double the millisecond every 20 FPS.
``` ts
   const millis = control.millis();
   // runs every frame at priority 20
   game.eventContext().registerFrameHandler(20, () => {
       const doubledMillis = millis * 2;
       console.log(doubledMillis);
   })
```
