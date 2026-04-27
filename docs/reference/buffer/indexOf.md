## Index Of

A sequence of raw bytes that searches through those bytes.

## Returns
*  a number which is the postion in the buffer where the element is found. This number
   is -1 if a matching element is not found anywhere in the array. 

## Example
``` ts 
    const buffer = Buffer.create(5);
    const otherBuf = Buffer.create(20)
    buffer.indexOf(otherBuf)
```
