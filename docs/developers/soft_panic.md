## Soft Panic

 The soft panic is a panic, which internally triggers the high level panic (`control.panic(code: number)`).

``` cpp
    void pxtrt::panic(int code) {
     soft_panic(code);
    }
```

Here is how soft_panic is built.

Code in file pxt-common-packages/libs/core---vm/scheduler.cpp:
``` cpp
void soft_panic(int errorCode) {
    if (errorCode >= 999)
        errorCode = 999;
    if (errorCode <= 0)
        errorCode = 1;
    vm_stack_trace();
    panic_core(1000 + errorCode);
#if defined(PXT_ESP32)
    ets_log_dmesg();
    sleep_core_us(4000000);
    abort();
#else
    systemReset();
#endif
}
````

Code in file pxt-common-packages/libs/base/pxtbase.h:
``` cpp
#define soft_panic target_panic
```
