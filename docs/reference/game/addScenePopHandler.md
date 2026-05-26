## addScenePopHandler
Registers a handler that runs whenever a scene is popped onto the scene stack.

## Parameters
handler: the code that runs

## Example
Set a new background color (blue) when the scene has popped.
``` ts
    game.popScene();
    game.addScenePopHandler(() => {
        scene.setBackgroundColor(8);
    });
```
