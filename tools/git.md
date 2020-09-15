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
	d = diff
	pl = pull
	pl = pull origin
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

## 查看本地log及远程log
```git
git log
git log [branch]
git log --oneline [branch]

git log remotes/origin[branch]
git log --oneline remotes/origin[branch]
```

### stash



```git
git stash			储存
git stash list		查看储存列表
git stash apply		恢复储存记录，历史不删除
git stash drop		删除历史记录；

git stash pop			恢复储存记录，内容也删除了

git stash apply stash@{0}			恢复指定记录
```



### cherry-pick

```
git cherry-pick <commit> 		将当前修改单个commit复制到当前分支
```



## 使用emoji让commit 图形化

`npm i -g gitmoji-cli`  

使用时，前后要加上冒号':'， :与后面的文字加入空格区分



### 缩写简称

```
A: 工作区新增的文件.
C: 文件的一个新拷贝.
D: 你本地删除的文件，服务器上还在。
M: 文件的内容或者mode被修改。
R: 文件名被修改了。
T: 文件的类型被修改了。
U: 文件没有被合并，需要完成合并才能进行提交。
X: 未知状态。
```



### Git 命令行

git diff 			查看当时修改文件

### Git放弃本地修改

1. 未使用add code
```
放弃某一个文件
git checkout -- path/filename

放弃所有文件(不会删除新加文件，因为此时对于git是未知)
git checkout .
```

2. has add, not commit
> 此步骤只是清除add操作，本地的修改并未改变，需要配合git check .

```
放弃某一个文件
git reset HEAD path/filename

放弃所有文件修改
git reset HEAD
```

3. has commit
```
退回上一次commit的状态
git reset --hard HEAD^

回退到任一版本
git reset --hard commitId
```

4. No add

   ```
   git clean -n			// 查看待删除文件
   git clean -f/df		// 删除未add的文件或文件夹
   ```

   

### 本地cmd连接远程服务器

```
ssh root@101.132.254.147
input server password
```



### 参考资料

* [emoji](https://gitmoji.carloscuesta.me/)
* [完整emoji表情](https://github.com/caiyongji/emoji-list)
* [emoji解释](https://github.com/pigcan/blog/issues/14)  
* [git放弃本地文件修改](https://www.jianshu.com/p/c0f7e4ac14c7)

	