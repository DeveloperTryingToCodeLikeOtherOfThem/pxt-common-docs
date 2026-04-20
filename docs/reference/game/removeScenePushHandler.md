## removeScenePushHandler
Removes a scene push handler.

## Parameters
**handler**: the code that runs

## Example
Remove a new sprite when the handler is removed.
``` ts
 let mySprite = sprites.create(img`509509505950950`, SpriteKind.Player);
   game.removeScenePushHandler(() => 
     sprites.destroy(mySprite);
   })

   game.pushScene(); // push the scene to register it
```
