###  VScode—自定义代码片段snippets
```
prefix      :代码片段名字，即输入此名字就可以调用代码片段。
body        :这个是代码段的主体.需要编写的代码放在这里,　　　　　 
$1          :生成代码后光标的初始位置.
$2          :生成代码后光标的第二个位置,按tab键可进行快速切换,还可以有$3,$4,$5.....
${1,字符}    :生成代码后光标的初始位置(其中1表示光标开始的序号，字符表示生成代码后光标会直接选中字符。)
description :代码段描述,输入名字后编辑器显示的提示信息。
```

  换行：\r或者\n
  tab键制表符：\t


### 插件

* Auto Close Tag

* Auto Rename Tag

* Beautify

* Color Picker

* ESLint

* Git History

* GitLens

* Import Cost

* Laravel goto view

* pug

* Pug(Jade) snippets

* Vetur

* Vue 2 Snippets

* WakaTime

* vue-helper

  vue函数跳转

* CSS Navigation

  Css 跳转，组件跳转

  



### vscode 设置自定义配置
  ```
  {
    "window.zoomLevel": 1,
    "workbench.startupEditor": "newUntitledFile",
    "search.followSymlinks": false,
    "workbench.enableExperiments": false,
    "git.autofetch": true,
    // vscode默认启用了根据文件类型自动设置tabsize的选项
    "editor.detectIndentation": false,
    // 重新设定tabsize
    "editor.tabSize": 2,
    // #每次保存的时候自动格式化 
    //   "editor.formatOnSave": true,
    // #每次保存的时候将代码按eslint格式进行修复
    "eslint.autoFixOnSave": true,
    //  #去掉代码结尾的分号 
    "prettier.semi": false,
    //  #使用带引号替代双引号 
    "prettier.singleQuote": true,
    //  #让函数(名)和后面的括号之间加个空格
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    // #这个按用户自身习惯选择 
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    // #让vue中的js按编辑器自带的ts格式进行格式化 
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap_attributes": "auto"
            // #vue组件中html代码格式化样式
        },
        "prettyhtml": {
            "printWidth": 1200,
            "singleQuote": false,
            "wrapAttributes": false,
            "sortAttributes": false
        }
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "explorer.confirmDelete": false,
    "[html]": {
        "editor.defaultFormatter": "HookyQR.beautify"
    },
    "prettier.printWidth": 150,
    "prettier.tabWidth": 2,
    "git.enableSmartCommit": true,
    "explorer.confirmDragAndDrop": false,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "files.associations": {
      "*.cjson": "jsonc",
      "*.wxss": "css",
      "*.wxs": "javascript",
      "*.js": "javascript",
      "*.pug": "jade"
    },
    "emmet.includeLanguages": {
      "wxml": "html",
      "javascript": "javascriptreact"
    },
    "minapp-vscode.disableAutoConfig": true,
    "editor.accessibilitySupport": "off",
    "[javascriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[vue]": {
      "editor.defaultFormatter": "octref.vetur"
    },
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "diffEditor.ignoreTrimWhitespace": false,
    "[json]": {
      "editor.defaultFormatter": "HookyQR.beautify"
    },
    "docthis.includeAuthorTag": true,
    "docthis.authorName": "史楠",
    "docthis.includeTypes": false,
    "docthis.includeDescriptionTag": true,
    "docthis.includeMemberOfOnClassMembers": false,
    "docthis.includeMemberOfOnInterfaceMembers": false,
    "docthis.includeDateTag": true,
    "docthis.enableHungarianNotationEvaluation": true,
    "terminal.integrated.shell.windows": "cmd.exe",
    "terminal.integrated.shellArgs.windows": [
        "/k",
        "E:\\Program Files\\cmder\\\\vendor\\init.bat"
    ],
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
}
  ```