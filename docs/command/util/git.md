# 超细节！小白专属的git命令手册


## git config

参数选项
```bash
用法：git config [<选项>]

配置文件位置
    --global              使用全局配置文件
    --system              使用系统级配置文件
    --local               使用仓库级配置文件
    --worktree            使用工作区级别的配置文件
    -f, --file <文件>     使用指定的配置文件
    --blob <数据对象 ID>  从给定的数据对象读取配置

操作
    --get                 获取值：名称 [值模式]
    --get-all             获得所有的值：键 [值模式]
    --get-regexp          根据正则表达式获得值：名称正则 [值模式]
    --get-urlmatch        获得 URL 取值：section[.var] URL
    --replace-all         替换所有匹配的变量：名称 值 [值模式]
    --add                 添加一个新的变量：名称 值
    --unset               删除一个变量：名称 [值模式]
    --unset-all           删除所有匹配项：名称 [值模式]
    --rename-section      重命名小节：old-name new-name
    --remove-section      删除一个小节：name
    -l, --list            列出所有
    --fixed-value         在比较值与 '值模式' 时，使用字符串字面比较
    -e, --edit            打开一个编辑器
    --get-color           获得配置的颜色：配置 [默认]
    --get-colorbool       获得颜色设置：配置 [stdout-is-tty]

类型
    -t, --type <>         取值为该类型
    --bool                值是 "true" 或 "false"
    --int                 值是十进制数
    --bool-or-int         值是 --bool 或 --int
    --bool-or-str         值是 --bool 或字符串
    --path                值是一个路径（文件或目录名）
    --expiry-date         值是一个到期日期

其它
    -z, --null            终止值是 NUL 字节
    --name-only           只显示变量名
    --includes            查询时参照 include 指令递归查找
    --show-origin         显示配置的来源（文件、标准输入、数据对象，或命令行）
    --show-scope          显示配置的作用域（工作区、本地、全局、系统、命令）
    --default <取值>      使用 --get 参数，当缺少设置时使用默认值
```


举例子
```bash
# 列出Git所有的设置
$ git config --list

core.symlinks=false
core.autocrlf=true
color.diff=auto
color.status=auto
color.branch=auto
color.interactive=true
pack.packsizelimit=2g
help.format=html
http.sslcainfo=/bin/curl-ca-bundle.crt
sendemail.smtpserver=/bin/msmtp.exe
diff.astextplain.textconv=astextplain
rebase.autosquash=true
user.email=yiibai.com@gmail.com
user.name=minsu
user.author=author-maxsu
core.autocrlf=true
core.repositoryformatversion=0
core.filemode=false
core.bare=false
core.logallrefupdates=true
core.symlinks=false
core.ignorecase=true
core.hidedotfiles=dotGitOnly
gui.wmstate=normal
gui.geometry=799x475+304+80 287 214
user.name=maxsu
```
```bash
# 设置全局commit提交的用户信息
$ git config --global user.name <用户名>
$ git config --global user.email <邮箱地址>
```
```bash
# 获取系统配置项
$ git config --system --get core.autocrlf
```
```bash
# 新增仓库级配置项
$ git config --local --add hello.word 你好
```
```bash
# 删除配置项（默认为仓库级）
$ git config --unset hello.word 你好
```

## git clone
从远程仓库克隆一个版本库到本地。
```bash
# 默认在当前目录下创建和版本库名相同的文件夹并下载版本到该文件夹下
$ git clone <远程仓库的网址>

# 指定本地仓库的目录
$ git clone <远程仓库的网址> <本地目录>

# -b 指定要克隆的分支，默认是master分支
$ git clone <远程仓库的网址> -b <分支名称> <本地目录>

```

## git init
初始化项目所在目录，初始化后会在当前目录下出现一个名为 .git 的目录。
```bash
# 初始化本地仓库，在当前目录下生成 .git 文件夹
$ git init

```

## git status
查看本地仓库的状态。
```bash
# 查看本地仓库的状态
$ git status

```

## git remote
操作远程库。
```bash
# 列出已经存在的远程仓库
$ git remote

# 添加远程仓库
$ git remote add <远程仓库的别名> <远程仓库的URL地址>

# 修改远程仓库的别名
$ git remote rename <原远程仓库的别名> <新的别名>

# 删除指定名称的远程仓库
$ git remote remove <远程仓库的别名>

# 修改远程仓库的 URL 地址
$ git remote set-url <远程仓库的别名> <新的远程仓库URL地址>

```

## git branch
操作 Git 的分支命令。
```bash
# 列出本地的所有分支，当前所在分支以 "*" 标出
$ git branch

# 列出本地的所有分支并显示最后一次提交，当前所在分支以 "*" 标出
$ git branch -v

# 创建新分支，新的分支基于上一次提交建立
$ git branch <分支名>

# 删除指定的本地分支
$ git branch -d <分支名称>

# 强制删除指定的本地分支
$ git branch -D <分支名称>

# 列出远程的所有分支
$ git branch -a
```

## git checkout
检出命令，用于创建、切换分支等。
```bash
# 切换到已存在的指定分支
$ git checkout <分支名称>

# 创建并切换到指定的分支，保留所有的提交记录
# 等同于 "git branch" 和 "git checkout" 两个命令合并
$ git checkout -b <分支名称>

# 替换掉本地的改动，新增的文件和已经添加到暂存区的内容不受影响
$ git checkout <文件路径>

```

## git add
把要提交的文件的信息添加到暂存区中。当使用 git commit 时，将依据暂存区中的内容来进行文件的提交。
```bash
# 把全部修改的文件添加到暂存区中
$ git add .

# 把指定的文件添加到暂存区中
$ git add <文件路径>

```

## git commit
将暂存区中的文件提交到本地仓库中。
```bash
# 把暂存区中的文件提交到本地仓库，调用文本编辑器输入该次提交的描述信息
$ git commit

# 把暂存区中的文件提交到本地仓库中并添加描述信息
$ git commit -m "<提交的描述信息>"

# 修改上次提交的描述信息
$ git commit --amend

```

## git merge
合并分支。
```bash
# 把指定的分支合并到当前所在的分支下
$ git merge <分支名称>

```

## git pull
从远程仓库获取最新版本并合并到本地。

```bash
# 从远程仓库获取最新版本。
$ git pull

```

## git push
把本地仓库的提交推送到远程仓库。
```bash
# 把本地仓库的分支推送到远程仓库的指定分支
$ git push <远程仓库的别名> <本地分支名>:<远程分支名>

# 把本地仓库的分支推送到远程仓库的指定分支（简写）
$ git push <远程仓库的别名> <本地分支名>

# 删除指定的远程仓库的分支
$ git push <远程仓库的别名> --delete <远程分支名>

```

## git tag
操作标签的命令。
```bash
# 打印所有的标签
$ git tag

# 切换到指定的标签
$ git checkout <标签名称>

# 查看标签的信息
$ git show <标签名称>

# 删除指定的标签
$ git tag -d <标签名称>

# 将指定的标签提交到远程仓库
$ git push <远程仓库的别名> <标签名称>

```


# Git场景操作

## 最基本操作流程
1、将远程仓库地址为[http://192.168.31.222/front/college.git](http://192.168.31.222/front/college.git)的代码克隆到本地
```bash
# 将远程仓库地址为http://192.168.31.222/front/college.git的代码克隆到本地
$ git clone http://192.168.31.222/front/college.git

```

2、将本地仓库以master分支的基础上创建“F-v1.0.0-20220330”的分支（假设当前处于：master分支）
```bash
# 假设当前处于master分支

# 从以下命令创建名为“F-v1.0.0-20220330”的新分支，并且切换到新的分支
$ git checkout -b F-v1.0.0-20220330

```

3、当在名为“F-v1.0.0-20220330”的分支已完成开发，提交到本地仓库中
```bash
# 将全部修改的代码添加到暂存区
$ git add .

# 将暂存区提交到本地仓库中（并不是指定分支）
$ git commit -m "项目第一版"

```

4、将代码同步到远程仓库
```bash
# 远程仓库信息
# 【远程地址】origin：http://192.168.31.222/front/college.git
# 【远程分支】master

# 将代码同步到远程地址为http://192.168.31.222/front/college.git的仓库中的名为“F-v1.0.0-20220330”的分支（如远程会新增，否则会修改）
$ git push origin F-v1.0.0-20220330

```

## 分支流程合并操作
如何将开发完成的功能分支一步一步地合并并推送到线上master 分支呢？
假设需要**（开发分支F）->（功能分支R） ->（测试分支R-Test）->（预生产分支R-Prd）->（线上master）->（版本Tag）**这些流程

1、首先将开发完成的功能分支首先推送到线上同名的分支下，以下操作
```bash
# 假设当前分支：F-v1.1.0-20220331

# 将全部修改的代码添加到暂存区( . 代表全部修改的文件)
$ git add .
# 或者
# 如果只提交部分的文件添加到暂存区
$ git add <修改的文件> <修改的文件> ...

# 把暂存区的代码提交到本地仓库中
$ git commit -m "<提交的描述信息>"

# 把本地仓库同步到线上F-v1.1.0-20220331分支上（建议线上分支与本地分支命名一致）
$ git push origin F-v1.1.0-20220331

```

2、将开发分支合并到功能分支上，并将同步功能分支到线上
```bash
# 在创建R-v1.1.0-20220331（功能分支）时，需要先切换到master分支
# 为什么要切换master分支呢？
# 是因为在我们开发过程中，很有可能有其他同事将他们功能到master分支上，此时我们本地的master已经不是很新的啦
$ git checkout master

# 拉取最新master分支代码
$ git pull

# 创建R-v1.1.0-20220331，并切换到新分支中。
# 为什么要在master分支上，创建新分支呢？
# 因为此时创建的新分支是最新的，并且与master分支的代码是一致的（你可以理解为在master分支代码里复制了一份）
$ git checkout -b R-v1.1.0-20220331

# 当前所在分支：R-v1.1.0-20220331
# 将F-v1.1.0-20220331（开发分支）合并到R-v1.1.0-20220331（功能分支）
$ git merge F-v1.1.0-20220331

# 同步到线上分支上
$ git push origin R-v1.1.0-20220331
```

3、同步到测试分支、预生产分支、线上master分支步骤，与步骤2雷同。
如果创建新分支与拉取master分支的时间不是很长，可以忽略**git pull **操作。
这里需要注意点是  分支合并建议按照**F->R->R-Test->R-Prd->Master**分支顺序执行。


4、创建项目版本（打tag）
```bash
# 当前所在分支：master
# 这里注意是 创建项目版本的源码是取决于 当前所在分支

# 创建名为“v1.1.0-alpha.001”的项目版本
$ git tag v1.1.0-alpha.001

# 将本地tag同步到线上
$ git push origin v1.1.0-alpha.001
```

