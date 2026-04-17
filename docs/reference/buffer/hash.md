## hash
Computes a k-bit non-cryptographic hash of the buffer using the FNV-1 algorithm.
``` sig
      hash(bits: int32): uint32;
```
FNV-1 is a fast, non-cryptographic hash algorithm (suitable for checksums, not security)

## Parameters
 * **bits**: specifies the output width (1-32 bits), determining 
the result range: 0 to 2^bits-1. For example, bits=5 produces values 0-31. Use this for 
checksums, data validation, or collision detection. Not suitable for cryptographic purposes.

## Returns
a [number](https://arcade.makecode.com/types/number) of k-bit non-cryptographic hash.

## Example
Let us calculate the buffer's hash the bits as 2 when the buffer's length is 30.
``` ts
    const buf = Buffer.create(30);
    let hashValue = 0;
    if (buffer.length == 30) {
       hashValue = buffer.hash(2);
    }
```

## See also
[Buffer](https://github.com/DeveloperTryingToCodeLikeOtherOfThem/pxt-hardware-programming-docs/blob/main/docs/buffers.md)
