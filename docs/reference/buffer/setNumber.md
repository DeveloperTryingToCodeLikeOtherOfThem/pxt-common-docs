## Set Number

Writes a value at a specific location (offset) in the buffer.

# Parameters
Format: How many bytes the number uses, whether it is signed or unsigned, and whether it is little endian or big endian.

Offset: The zero-based byte position within the buffer.

Value: The meaning of the index.

## Example
``` ts
   const buf = Buffer.create(5);
   buf.setNumber(NumberFormat.Int8LE, 0, 5);
```

## See Also
[Buffers](https://github.com/DeveloperTryingToCodeLikeOtherOfThem/pxt-hardware-programming-docs/blob/master/docs/buffers.md)
[Get Number](https://github.com/DeveloperTryingToCodeLikeOtherOfThem/pxt-hardware-programming-docs/blob/master/reference/buffer/getNumber.md)
 
