# ./bin/bash
COMMIT_MSG="commit默认"
set -e

if [[ $1 ]];then
  COMMIT_MSG=$1
fi
COMMIT_MSG=$COMMIT_MSG

git a .
git commit -m $COMMIT_MSG
git push origin master

echo -e "\n发布成功"