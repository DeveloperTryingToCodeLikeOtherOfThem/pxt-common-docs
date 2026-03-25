`globalThis` is a global property containing the global this value, which is usually similar to the global object.

MakeCode unsupports the globalThis property though. This is because the runtime's virtual table is static, 

not dynamic, which affects this and a lot of other builtin global properties, methods, etc. used in **typescript** that are **not** supported.
