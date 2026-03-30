## Dump

Spits out raw information so you inspect it.

Dumps include memory dumping, stack dumping, variable dumping, debug dumping, 
DMESG dumping, and more.

## Example

``` ts
  let player = sprites.create(img`
    . . . . . 
    . 2 2 2 . 
    . 2 . 2 . 
    . 2 2 2 . 
    . . . . . 
`, SpriteKind.Player)

// Dump the sprite's internal data
console.log("Sprite dump:")
console.log(player)

```
