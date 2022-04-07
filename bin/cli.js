const { program } = require('commander')
const { version } = require('../package.json')

// 读取版本
program.version(version)

//定义option选项
program.option('-p, --options', '这个参数是对这个选项的解释')
//还可以监听选项，选项触发的回调函数
// .on('-p', () => {
//     console.log('options')
// })



//定义子命令 
program.command('create <programname> [others...]')
    .description('创建一个项目')
    .action(() => {

    })


//解析来自process.argv上的数据，会自动帮我们添加一个-h的解析
program.parse(process.argv)


//附加：
//vue <command> [options] <app-name>
//vue是指令 <command>是子指令  [options]是选项  尖括号里面是参数
//一般情况下，指令后面可以有参数，options后面也可以有参数，带尖括号的是不能省略的
//子指令和选项是内置定好的，参数一般是用户输入的时候从外部传入进来的