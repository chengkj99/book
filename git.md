# git 相关

## 解决 git push 时重复输入密码的问题

将 SSH key 加到 ssh-agent 中

[Generating a new SSH key and adding it to the ssh-agent](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)

```shell
# 1. Start the ssh-agent in the background
eval "$(ssh-agent -s)"

# 2. Add the config to your ~/.ssh/config
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa

# 3. Add your SSH private key to the ssh-agent
ssh-add -K ~/.ssh/id_rsa

```
