## popScene

``` sig 
  game.popScene();
```

Removes the current scene off the scene stack and switches back to it.
The scene contains its own data representations, including sprites, backgrounds, event handlers, and more.
The stack is handled by the built-in engine, not your code.

## Example

``` ts 
    const currSc = game.currentScene();
    game.popScene(); 
```
