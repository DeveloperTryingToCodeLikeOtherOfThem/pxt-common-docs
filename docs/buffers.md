# Buffers in MakeCode Arcade
 
 In Microsoft MakeCode Arcade, the Buffer namespace is a core namespace designed for storing data precisely.  

 A **Buffer** is a **fixed size array of bytes (8 bits)** which allocates a new buffer. It is also stored in **contiguous memory**. The difference between arrays and buffers come down to a fact of **precision**. Use **Buffers** for a fixed size array of bytes, but use **Arrays** for dynamic data types (numbers, strings, booleans, etc.) Arrays are **dynamic** (of a process or system)
 
 In **JavaScript** and **TypeScript**, arrays automatically dynamic by default. Some languages do autotmatically have fixed size arrays by default, and while others  don't support it because they don't support resizing. A buffer is never dynamic, it always makes sure all the bytes are **fixed**. 

 A **bit** is a binary digit which uses base 2. For example, 8 bits stand for 8 binary digits. In base 2, we have only zeroes and ones because we have only 2 digits.

 The reason why buffers read by bytes instead of simple values because the computer understands bits (0, 1), which represents on and off in the computer architecture. 
* 0 = off
* 1 = on

Here is an example showing how they are connected to each other.

[Battery +] -----( SWITCH )-----[Light]-----[Battery -]

Binary math came to use electricity because engineers realized electrical switches naturally implement Boolean logic.

The person who created the boolean system is [Gottfried Wilhelm Leibniz](https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz).
The other person who created boolean alegebra is [Georg Boole](https://en.wikipedia.org/wiki/George_Boole).

## Little Endian (LE) and Big Endian (BE)
Little Endian groups bytes by the least significant byte at the lowest address.
Big Endian stores the most significant byte at the lowest address, it is meant for human readability.
 
## Methods
    
 

* The Buffer.create(size: number) method is designed to store bytes in a fixed size.   

* The Buffer.setNumber(format: NumberFormat, offset: number, value: number) method is designed to write a number in a specified format in the buffer 

* The Buffer.getNumber(format: NumberFormat, offset: number) method is designed to read a number in a specified format in the buffer 

* The Buffer.setUint8(offset: number, value: number) method is designed to write an unsigned number in a particular location in the buffer 

* The Buffer.getUint8(offset: number) method is designed to read an unsigned number in a particular location in the buffer 

* The Buffer.write(dstOffset: number, src: Buffer) method is designed to write contents of the buffer merged into the current buffer (the buffer your using)

*  The Buffer.equals(other: Buffer) method checks if 2 buffers hold the same data

*  The Buffer.chunk(maxSize: number): Buffer[] breaks the buffer into pieces, none exceeding the specified size. 

* The Buffer.isReadOnly() method is designed to read if the buffer cannot be modified, otherwise it returns false

* The Buffer.length method is designed to return the total area of the buffer
