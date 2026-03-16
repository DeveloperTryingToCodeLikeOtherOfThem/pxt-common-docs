## benchmark
A test that measures how fast something runs.

## Parameters

f: the handler to run the containing code you want to measure.

## Example

``` ts
control.benchmark(() => {
    let x = 0
    for (let i = 0; i < 10000; i++) {
        x += i
    }
})
```
