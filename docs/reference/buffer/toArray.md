## toArray
Read the buffer's content as an array in specificed format and with a value.

## Returns
an array of bytes in specific format and value.

## Example
Get a buffer that has 20 bytes and value.
``` ts
   const buf = Buffer.create(20);
   buf.toArray(); // 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
```
