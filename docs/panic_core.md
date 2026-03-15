The implementation of how soft panic and target panic trigger the problems panel.

Here is the implementation of how it is implemented in the runtime.

``` cpp 
static void panic_core(int error_code) {
    int prevErr = errno;

    panicCode = error_code;

    drawPanic(error_code);

    DMESG("PANIC %d", error_code % 1000);
    DMESG("errno=%d %s", prevErr, strerror(prevErr));

    dmesg_flush();
}
```
