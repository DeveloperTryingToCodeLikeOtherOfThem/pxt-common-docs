## Methods
 
 Buffer.create(size: number)
 
 allocates a new buffer in fixed size of memory.   

 Buffer.setNumber(format: NumberFormat, offset: number, value: number)
 
 writes a number in a specified format in  buffer 

 Buffer.getNumber(format: NumberFormat, offset: number) 
 
 reads a number in a specified format in  buffer 

 Buffer.setUint8(offset: number, value: number)  
 
 writes an unsigned number in a particular location in  buffer 

 Buffer.getUint8(offset: number)  
 
 reads an unsigned number in a particular location in  buffer 

 Buffer.write(dstOffset: number, src: Buffer)  
 
 writes contents of  buffer merged into  current buffer ( buffer your using)

 Buffer.equals(or: Buffer)  
 
 checks if 2 buffers hold  same data

 Buffer.chunked(maxSize: number): Buffer[]  
 
 breaks  buffer into pieces, none exceeding  specified size. 

 Buffer.isReadOnly() 
 
 reads if the buffer cannot be modified, otherwise it returns false

 Buffer.hash(bits: int32)
 
 computes a k-bit non-cryptographic hash of  buffer using 
 FNV-1 algorithm. 

## Properties
  Buffer.length 
  
  returns the total length of buffer
