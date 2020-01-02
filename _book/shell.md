## 复制上传文件到服务器

```shell

set -e

# 项目名称
projectName=gtp-apk-files

# 要上传的文件夹，注意不要忽略最后一个斜杠
dist=./dist/$projectName/

# 机器信息
ip=10.199.0.93
user=robot

# 第一次免密登录
ssh-copy-id $user@$ip

# nginx目录
dir=/home/robot/www/$projectName/

# 创建文件夹
ssh $user@$ip "mkdir -p $dir"

# 执行命令
scp ./gtp-pda.apk $user@$ip:$dir

echo 地址: http://$ip:8080/$projectName/

```
