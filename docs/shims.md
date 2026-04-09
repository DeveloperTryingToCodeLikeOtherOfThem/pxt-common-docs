A **shim** is a parser that accesses **only** C++ or the TypeScript Abstraction Layer (TSAL), **not the sandbox environment**, for functions.
For instance, these shims are **not** able to access properties or anything else in the runtime, which is how these were built.
