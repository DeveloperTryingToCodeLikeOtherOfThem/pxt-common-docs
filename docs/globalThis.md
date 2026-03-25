`globalThis` is a global property containing the global this value, which is usually similar to the global object.

MakeCode unsupports the globalThis property though. This is because the runtime's virtual table is static, 

not dynamic, which affects this and a lot of other builtin global properties, methods, etc. used in **typescript** that 

are **not** supported.

Do **not** be confused because the filter for this global property really does **not** exist,
it is the monaco editor and JavaScript doing that.

Here is an image of the conflict that happened.

<img width="501" height="113" alt="image" src="https://github.com/user-attachments/assets/2b0a3449-4935-4a6f-b275-ea92674004a1" />
