To record all VSCode extensions and generate a shell script which will install these on a new system run the following:

```
code --list-extensions | xargs -L 1 echo code --install-extension
```

This is used to generate the VSCode_Extensions file here.

Full instructions to generate this file and to upload it into a new VSCode instance can be found at:
https://stackoverflow.com/questions/35773299/how-can-you-export-the-visual-studio-code-extension-list
