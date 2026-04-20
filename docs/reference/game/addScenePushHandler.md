## addScenePushHandler
Registers a handler that runs whenever a scene is pushed onto the scene stack.

## Example
Add a new sprite when the handler is registered.
``` ts
   game.addScenePushHandler(() => {
        let mySprite = sprites.create(img`509509505950950`, SpriteKind.Player);
   })

   game.pushScene(); // push the scene to register it
```
