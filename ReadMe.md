# yibo脚手架

## 一、用法

从远程拉去代码到目录中
安装脚手架依赖的包

```
npm i
```

将yibo命令链接到全局，可以再任意目录中使用yibo命令

```
npm link
```

创建项目(创建的项目在执行命令的目录下)

```
yibo create
```





## 二、使用的技术文档

commander：[commander - npm (npmjs.com)](https://www.npmjs.com/package/commander)





## 三、创建脚手架过程

```
mkdir my-cli
cd my-cli
```

生成package.json文件

```
npm init 
```

修改package.json文件中bin属性，指定自定义的命令及要执行的脚本路径

```
如"bin": {
    "yibo": "./bin/main.js"
  },
```

然后再main.js中编写脚本去做一些脚手架的功能

```
#! /usr/bin/env node
//声明使用node解释程序

require('./cli.js')
```

使用npm link （在package.json所在的目录中，将自定义指令链接到全局中）

```
npm link
```



