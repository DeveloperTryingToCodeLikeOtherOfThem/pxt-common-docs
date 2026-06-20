## getConfigValue

``` sig
    getConfigValue(null, null);
```

## Parameters
**key:** the configure's id

**defl:** the configure's value

## Example
Get the screen's width and height value.
``` ts
    const width = control.getConfigValue(DAL.CFG_ARCADE_SCREEN_WIDTH, 160);
    const height = control.getConfigValue(DAL.CFG_ARCADE_SCREEN_HEIGHT, 120);
```
