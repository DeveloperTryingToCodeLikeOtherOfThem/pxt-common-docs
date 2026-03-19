LF is short for localize format, which marks the string so MakeCode's
translation system can extract it and translate it into other languages.

## Implementation

Here is the implementation of how it works under the hood.

``` ts
   export function lf(s: string, ...args: any[]): string { // @ignorelf@
        let lfmt = _localizeStrings[s] || s;

        if (!sForPlural && lfmt != s && /\d:s\}/.test(lfmt)) {
            lfmt = lfmt.replace(/\{\d+:s\}/g, "")
        }

        lfmt = lfmt.replace(/^\{(id|loc):[^\}]+\}/g, '');

        return fmt_va(lfmt, args);
    }

```


**Warning**, this is NOT for MakeCode's PXT TypScript editor, it is for the abstraction level TypeScript, so please do **NOT** paste this
code.
