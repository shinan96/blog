## shell

### vue-cli打包sh
```
# !/bin/bash
# 获取当前分支
branch=$(git symbolic-ref --short HEAD)
set -e
# 拉取当前分支
git pull origin $branch

echo -e "\n\n project is at $branch"
read -p $'\n 请确认分支，是否继续操作？ y or n: ' isContinue

if [ "$isContinue" != 'y' ];then
  exit
fi

echo '用户已确认'

# vue打包命令
yarn build

# git命令
git add .
read -p $'\n请输入您的commit信息' info
if [[ $info ]];then
  echo $info
else
  echo "无数据+$info"
  info='默认commit'
fi


git commit -m $info
git push origin $branch


echo -e "\n\n打包上线完成"
```

### 参考
1. [10分钟入门Shell脚本编程](https://juejin.im/post/5a6378055188253dc332130a#heading-26)
2. [前端项目无独立部署环境时](https://juejin.im/post/5d107833518825328779c8b1)