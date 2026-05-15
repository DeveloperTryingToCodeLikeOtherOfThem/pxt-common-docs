## Set Rows
Sets rows using a buffer.
``` sig
   image.create(null, null).setRows(null, null);
```

## Parameters
* **x:** the starting offset of the buffer

* **src:** the **raw data**  of image.

## Example
Fill the screen in dark blue. 
``` ts
    const buf = Buffer.create(160 * 120);
    const fillImg = image.create(160, 120);
    buf.fill(8);
    fillImg.setRows(0, buf);
    fillImg.drawImage(fillImg, 0, 0);
````
