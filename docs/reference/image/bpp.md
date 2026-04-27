## BPP in MakeCode Arcade

A **BPP** is short for Bits Per Pixel, which tells how many possible color values are for that one pixel. For example, 
if there are 16 colors in the palette editor, there are 4 bits per pixel are required because 2⁴ = 16. That is why
MakeCode uses 4 bits per pixel. It is very useful for packing and unpacking because it is just the right value
for getting how many bits per pixel:
``` ts
   bpp() {
       return this.palette.length > 2 ? 4 : 1
   }
```
