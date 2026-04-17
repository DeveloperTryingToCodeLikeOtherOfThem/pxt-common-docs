## ToolBox Implementation

In the core, the implementation of the toolbox uses  a map to get all the
core namespaces and regular namespaces, which are extensions or libraries 
not outside of pxsim.
``` ts

    export const blockColors: Map<number | string> = {
        loops: '#107c10',
        logic: '#006970',
        math: '#712672',
        variables: '#A80000',
        functions: '#005a9e',
        text: '#996600',
        arrays: '#A94400',
        advanced: '#3c3c3c',
        addpackage: '#717171',
        search: '#000',
        debug: '#e03030',
        default: '#dddddd',
        topblocks: '#aa8f00',
        recipes: '#717171'
    }

    export const blockIcons: Map<number | string> = {
        loops: '\uf01e',
        logic: '\uf074',
        math: '\uf1ec',
        variables: '\uf039',
        functions: '\uf109',
        text: '\uf035',
        arrays: '\uf0cb',
        advancedcollapsed: '\uf078',
        advancedexpanded: '\uf077',
        more: '\uf141',
        addpackage: '\uf055',
        search: '\uf002',
        debug: '\uf111',
        default: '\uf12e',
        topblocks: '\uf005',
        recipes: '\uf0eb'
    }

```
