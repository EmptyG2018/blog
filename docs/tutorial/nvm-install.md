# NVM 安装使用流程教程（window）

> 是一个 nodejs 的版本管理工具，为了解决 node.js 各种版本存在不兼容现象可以通过它可以安装和切换不同版本的 node.js。

## 安装 NVM

github 仓库地址： [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

![nvm下载.png](https://raw.githubusercontent.com/EmptyG2018/blog/master/docs/public/tutorial/nvm-install_screenshot1.png)

::: warning 警告
下载 nvm-setup.zip（安装版）压缩包至本地。安装过程中，选择 nvm 和 node 版本的安装路径**建议不要安装到 C 盘。**
:::

安装成功后，可通过 `nvm version` 命令检测是否安装成功。

```bash
# 查看nvm当前版本
$ nvm version
```

## 配置镜像

确认安装成功后，先找到在安装 nvm 路径下的 settings.txt 配置文件

![nvm配置.png](https://raw.githubusercontent.com/EmptyG2018/blog/master/docs/public/tutorial/nvm-install_screenshot2.png)

打开 settings.txt 配置文件，配置淘宝的 node 和 npm 下载镜像源地址。

```
....

node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

::: warning 警告
这样操作是避免在下载 node 和 npm 版本包时间过长，导致超时无法下载（因为默认镜像源是境外的，网速不稳定）
:::

## nvm命令
点击查看：[一分钟熟悉使用的常见nvm命令](/command/util/nvm.md)