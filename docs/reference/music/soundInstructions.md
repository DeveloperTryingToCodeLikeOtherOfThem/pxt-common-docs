## playInstructions
 sends a buffer of encoded audio instructions to the audio engine and begins a playback immediately.
``` sig
music.playInstructions(0, null);
```
The function does **not** allow normal buffers, a special type of buffer, which the encoding is in hex (hex`` for template).

## Example
Determines when the song is playing.

``` ts
    let songPlaying: boolean;
    let buf = hex`
    01 00 64 32 10 00
    01 00 50 20 08 00
    `

    function enableSongPlaying(enable: boolean) {
      songPlaying = enable;
       if (enable) music.playInstructions(0, buf);
    }

   enableSongPlaying(true);
````
