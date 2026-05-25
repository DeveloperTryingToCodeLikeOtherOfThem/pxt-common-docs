## Set Palette
Sets the screen's palette.

``` sig
    image.setPalette(null);
```

A color is formed by 3 indices of a buffer.

The buffer's size requires to be 48 because
of the engine's 16 color palette. While the size
is 48, the color's value automatically is transparent
if the color has not been setted.

## Example
Replace the screen palette's first color.

``` ts
    const buf = Buffer.create(48); 
    // color 0
    buf[0] = 11; // 0
    buf[1] = 90; // 0 
    buf[2] = 100; // 0
```
