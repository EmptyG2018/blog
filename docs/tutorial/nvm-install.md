# NVM安装使用流程教程（window）

github仓库地址： [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)
![微信截图_20220401192536.png](https://cdn.nlark.com/yuque/0/2022/png/2186592/1648815084287-1c0a6d2f-2fda-4f0f-a7e5-1064d83aa31b.png#clientId=ucbe089a0-a71c-4&from=ui&id=u30864fa7&name=%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20220401192536.png&originHeight=1035&originWidth=2174&originalType=binary&ratio=1&rotation=0&showTitle=false&size=101438&status=done&style=none&taskId=u2b94df94-7f1f-4dee-8f85-77949d4fcf5&title=)
下载nvm-setup.zip（安装版）压缩包至本地。安装过程中，选择nvm和node版本的安装路径**建议不要安装到C盘。**

安装成功后，可通过 `nvm version` 命令检测是否安装成功。
```bash
# 查看nvm当前版本
$ nvm version
```

确认安装成功后，先找到在安装nvm路径下的 settings.txt 配置文件
![微信截图_20220401193646.png](https://cdn.nlark.com/yuque/0/2022/png/2186592/1648815707259-d0fc0b40-0ce8-40be-920a-c213e8d513ff.png#clientId=ucbe089a0-a71c-4&from=ui&id=u4f154492&name=%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20220401193646.png&originHeight=1035&originWidth=2174&originalType=binary&ratio=1&rotation=0&showTitle=false&size=125224&status=done&style=none&taskId=u6328d160-b97e-4daf-8e0c-b40d4109c7c&title=)

打开 settings.txt 配置文件，配置淘宝的 node 和 npm 下载镜像源地址。
```
....

node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```
这样操作是避免在下载node和npm版本包时间过长，导致超时无法下载（因为默认镜像源是境外的，网速不稳定）

## 常用命令
```bash
# 查看全部已安装的node版本
$ nvm list
```
```bash
# 安装指定node版本
$ nvm install <node版本号>

# 例如：nvm install 14.16.3
```
```bash
# 卸载指定node版本
$ nvm uninstall <node版本号>
```
