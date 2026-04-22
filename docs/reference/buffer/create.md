## create
Allocates a new buffer in a fixed size of [bytes](https://github.com/DeveloperTryingToCodeLikeOtherOfThem/pxt-hardware-programming-docs/blob/master/docs/bytes.md).
``` sig
 Buffer.create(null);
```
The **buffer** is a block of contiguous memory.

Additionally, when allocating a buffer, there is no meaning to represent the bytes. 
This is because allocating the buffer is simply storing the amount of memory into the RAM (Random Access Memory).

The meaning comes from how you write or read the bytes, such as using:
* `buf[index] = value` to set a byte at a specific offset
* Buffer methods like setNumber to store structured values

## Example
Store 100 bytes.
``` ts
    const buf = Buffer.create(100);
```
