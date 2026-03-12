The `helpers._getFactoryInstance(): any` method returns a template for a given data type.
Here is an example of using the method correctly.
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

``` package
pxt-hardware-programming-docs=github:DeveloperTryingToCodeLikeOtherOfThem/pxt-hardware-programming-docs
```
