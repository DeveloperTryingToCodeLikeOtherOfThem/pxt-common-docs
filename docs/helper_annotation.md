## Help Annotation
The //% helper annotation links an exported function to a runtime helper in a namespace, 
so calls to the exported function are replaced with the helper’s implementation at compile time.

## Documentation Load
1. Make sure you first write `github:`, so MakeCode knows to fetch a repository on GitHub
2. Write the repository's name **without any spaces after writing the colon**
3. Add a slash command to tell the compiler to read a specific file in the repository
4. If it is a folder in a repository, write the folder's name and then another slash command
5. Finally, add the file's name (**the file's path must be right or it will not be load**)
6. Also, make sure to **not** add .md in the end of the file path because MakeCode already reads doc files as markdown files.

Here is a snippet showing how to use the helper annotation correctly.
``` ts 
//% help=github:pxt-hardware-programming-docs/docs/_getFactoryInstance
function _getFactoryInstance() { }
_getFactoryInstance() 
```
