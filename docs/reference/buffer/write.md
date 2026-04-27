## write
Copy contents of the source buffer into the destination buffer at the specified byte offset (dstOffset). 

``` sig
    Buffer.create(null).write(null, null);
```

## Parameters
**dstOffset:** The byte offset in the destination buffer where the contents of the source buffer will be written.
**src:** The source buffer that contain contents will be copied into the destination buffer.

## Example

Create a new buffer that copies 2 offsets of the original buffer.
``` ts
    const buf = Buffer.create(30);
    const newBuf = Buffer.create(2);
    newBuf.write(0, newBuf);
    newBuf.write(1, newBuf);
```
