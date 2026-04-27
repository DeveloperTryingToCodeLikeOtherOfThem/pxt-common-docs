## pushScene

```sig
   game.pushScene();
````

Pushes a new scene into the scene stack and switches to it.
The scene contains its own data representations, including sprites, backgrounds, event handlers, and more.
The stack is handled by the built-in engine.

## Example

``` ts 
  const currScene = game.currentScene();
  game.pushScene(); // pushes a new empty screen
```
