## Operators Implementation
The implementation of the operators (+, -, *, /, ==, ===, !=, !==, &&, ||, !) are implemented in [decompiler](https://github.com/microsoft/pxt/blob/master/pxtcompiler/emitter/decompiler.ts).
They are implemented by using a map, which includes the type of the operator and where it belongs.
