## Shim
A **shim** is a parser that accesses **only** C++ or the TypeScript Abstraction Layer (TSAL), **not the sandbox environment**, for functions.
For instance, these shims are **not** able to access properties or anything else in the runtime, which is how they were built. Additionally,
**only** functions that are exposed in the pxsim namespace, which are implemented in the [pxtsim](https://github.com/microsoft/pxt/tree/master/pxtsim/) folder and any PXT repository that contains the sim folder. For instance, the sim folder is in a specific libs folder in any PXT repository except the core PXT repository. 
