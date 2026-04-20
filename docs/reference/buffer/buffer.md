## Buffer
The **`Buffer`** object is used to represent a contiguous block of memory

## Description

Buffers are useful for managing memory. They are convenient
for storing data without overflowing.

## Members

* The Buffer.create(size: number) method stores bytes in a fixed size of memory.   

* The Buffer.setNumber(format: NumberFormat, offset: number, value: number) method writes a number in a specified format in the buffer 

* The Buffer.getNumber(format: NumberFormat, offset: number) method reads a number in a specified format in the buffer 

* The Buffer.setUint8(offset: number, value: number) method writes an unsigned number in a particular location in the buffer 

* The Buffer.getUint8(offset: number) method reads an unsigned number in a particular location in the buffer 

* The Buffer.write(dstOffset: number, src: Buffer) method writes contents of the buffer merged into the current buffer (the buffer your using)

*  The Buffer.equals(other: Buffer) method checks if 2 buffers hold the same data

*  The Buffer.chunked(maxSize: number): Buffer[] method breaks the buffer into pieces, none exceeding the specified size. 

* The Buffer.isReadOnly() method reads if the buffer cannot be modified, otherwise it returns false

 * The Buffer.hash(bits: int32) method computes a k-bit non-cryptographic hash of the buffer using 
  the FNV-1 algorithm. 

* The Buffer.length property returns the total area of the buffer
