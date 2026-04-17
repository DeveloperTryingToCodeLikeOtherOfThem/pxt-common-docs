## Get Number

Reads a value at a specfic location (offset) in the buffer.

## Parameters
Format: How many bytes the number uses, whether it is signed or unsigned, and whether it is little endian or big endian. 

Offset: The zero-based byte position within the buffer.

## Example
``` ts 
  const buf = Buffer.create(5);
  buf.getNumber(NumberFormat.Int8LE, 0);
```

## See Also
[Buffers](https://github.com/DeveloperTryingToCodeLikeOtherOfThem/pxt-hardware-programming-docs/blob/master/docs/buffers.md)
[Set Number](https://github.com/DeveloperTryingToCodeLikeOtherOfThem/pxt-hardware-programming-docs/blob/master/docs/reference/buffer/setNumber.md)
