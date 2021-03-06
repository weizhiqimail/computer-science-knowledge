# Linux的VI编辑器

### VI编辑器-概述
+ Visual Interface(可视化接口)
+ 类似于Windows的记事本
+ VI编辑器的功能非常强大
+ VI-->VIM
+ VIM支持多级撤销
+ VIM可以跨平台运行
+ VIM支持语法高亮

### VI编辑器的操作模式
+ Command Mode 命令模式
+ Insert Mode 输入模式
+ Last Line Mode 底行模式(尾行,末行)

### VI编辑器命令
+ `vim abc`编辑abc文件,如果没有abc文件,就自动创建
+ `vim + abc`打开abc文件后,光标定位到最后一行
+ `vim +3 abc`打开abc文件后,光标定位到文件的第三行,如果行数没那么多,数字超过了现有行数,那么直接就跳到最后一行
+ `vim +/hello abc`定位到abc文件里hello第一次出现的位置,按n可以跳到下一个hello出现的位置
+ `vim aa bb cc`直接打开多个文件,按n可以跳到下一个文件,按N或prev可以跳到上一个文件,:wq退出

### 底行模式
+ `:w`保存
+ `:q`退出
+ `:!`强制退出
+ `:ls`列出当前编辑器中打开的所有文件
+ `:n`切换到下一个文件
+ `:N`切换到下一个文件
+ `:10`光标快速定位到第10行
+ `/xxx`从光标位置开始向后搜索第一次出现xxx的那一行
+ `?xxx`从光标位置开始向前搜索第一次出现xxx的那一行

### 命令模式
+ `h`  光标左移
+ `j`  光标下移
+ `k`  光标上移
+ `l`  光标右移
+ `Ctrl+f`  向下翻页(front)
+ `Ctrl+b`  向上翻页(back)
+ `ctrl+d`  向下翻半页(down)
+ `Ctrl+u`  向上翻半页(up)
+ `dd` 删除光标所在行
+ `o`  在光标所在行的下方插入一行并切换到输入模式
+ `yy`  复制光标所在的行
+ `p`  在光标所在行的下方粘贴
+ `P`  在光标所在行的上方粘贴








