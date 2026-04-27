# Localize Format
LF is short for localize format, which marks the string so MakeCode's
translation system can extract it and translate into other languages.

## Implementation

The implementation behaves like this under the hood.
``` ts
    function lf(s: string, ...args: any[]): string { // @ignorelf@
        let lfmt = _localizeStrings[s] || s; // either be _localizedStrings with the index being the string input, or simply the string input itself.

        if (!sForPlural && lfmt != s && /\d:s\}/.test(lfmt)) {
            lfmt = lfmt.replace(/\{\d+:s\}/g, "")
        }

        lfmt = lfmt.replace(/^\{(id|loc):[^\}]+\}/g, '');

        return fmt_va(lfmt, args);
    }

```
