## benchmark
A test that measures how fast something runs in microseconds.

## Parameters

* f: the handler that runs the function

## Example

``` ts
control.benchmark(() => {
    let x = 0
    for (let i = 0; i < 10000; i++) {
        x += i
    }
})
```
