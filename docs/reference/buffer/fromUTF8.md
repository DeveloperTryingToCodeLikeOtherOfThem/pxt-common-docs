## fromUTF8
Create a new buffer from an UTF8 encoded string.
``` sig
   Buffer.fromUTF8(null);
```
## Parameters
**str:** the string getting stored into the buffer.

## Example
Store the word 'hello.'
``` ts
   const buf = Buffer.fromUTF8("hello");
```
