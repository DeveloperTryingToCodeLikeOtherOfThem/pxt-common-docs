## _getFactoryInstance
Gets an asset by name. Useful for registering templates.
``` sig
helpers._getFactoryInstance(null, null);
```

## Returns 
an asset for a given data type.

## Example
Let us make a rendered imaage template.
``` ts
  namespace helpers {
    export function getRenderImageByName (name: string): Image {
        return _getFactoryInstance("image", name);
    }
   }

//% helper=getRenderImageByName
function renderImage(lits: any, ...args: any[]): Image{
 return null // were returning null because it is meant to have nothing returned before you call the method
}
```
