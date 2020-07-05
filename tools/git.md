# git
[git]:  "git下载"

## git命令行简化
在 [git](https://git-scm.com/downloads) 安装目录里找到路径Git\mingw64\etc中，gitconfig文件，增加 **[alias]** 属性

```
a = add
st = status
lg = log
one = log --oneline
cm = commit -m
cam = commit -am
br = branch
ck = checkout
pl = pull
d = diff
po = push origin
sn = show --name-only
dn = diff --name-only 
```

## git 对文件夹/文件名大小写修改不冲突
	git config core.ignorecase  // 查看状态
	git config core.ignorecase false
	
	false 大小写可以提交
	true  忽略大小写

## git 忽略文件 ，中途添加继续提交
`git rm -r --cached < file name > `  
然后commit 提交 ，之后就不再处理，云端也会被删除
	

## git commit 代码提交规范

格式：
	type(scope) : subject+

​	

- feat : 新功能
- add: 新功能
- fix : 修复bug
- docs : 文档改变
- style : 代码格式改变
- refactor : 某个已有功能重构
- perf : 性能优化
- test : 增加测试
- build : 改变了build工具 如 grunt换成了 npm
- revert : 撤销上一次的 commit
- chore : 构建过程或辅助工具的变动


## git 远程分支已删，本地的远程依然显示的问题
![](https://gitee.com/snhello/blog/blob/master/pic/git1.png)
git branch –a 用来查看所有的分支，包括本地和远程的。但是时间长了你会发现有些分支在远程其实早就被删除了，但是在你本地依然可以看见这些被删除的分支。  

`git remote show origin`

​	

来查看有关于origin的一些信息，包括分支是否tracking(追踪),stale(陈旧)分支也会显示出来。  

`git remote prune origin`


刷新本地仓库与远程仓库的保持这些改动的同步
![](https://gitee.com/snhello/blog/blob/master/pic/git2.png)
再输入git remote -a，被删除分支就看不到了。

## git fetch和git pull区别

` git pull = git fetch + git merge`
	
## git修改远程仓库地址
	1.修改命令
	git remote set-url origin [url]
	
	2.先删后加
	git remote rm origin
	git remote add origin [url]
	
	3.直接修改config文件


## 使用emoji让commit 图形化
`npm i -g gitmoji-cli`  

使用时，前后要加上冒号':'， :与后面的文字加入空格区分

Git 命令行

git diff 			查看当时修改文件

### 参考资料
* [emoji](https://gitmoji.carloscuesta.me/)
* [完整emoji表情](https://github.com/caiyongji/emoji-list)
* [emoji解释](https://github.com/pigcan/blog/issues/14)  

	