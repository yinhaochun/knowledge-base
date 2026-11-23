# Git 常用命令速查

日常工作里最常用的 Git 命令合集，忘记的时候回来翻一翻。

## 仓库初始化与拉取

```bash
# 克隆远程仓库
git clone https://github.com/用户名/仓库名.git

# 初始化本地仓库
git init

# 查看远程仓库地址
git remote -v
```

## 日常提交

```bash
# 查看工作区状态
git status

# 添加文件到暂存区
git add .
git add 文件名

# 提交
git commit -m "提交说明"

# 推送到远程
git push origin main
```

## 分支管理

```bash
# 查看分支
git branch

# 新建并切换到分支
git checkout -b 分支名

# 切换分支
git checkout 分支名

# 合并分支到当前分支
git merge 分支名
```

## 撤销与回退

```bash
# 撤销未提交的修改
git checkout -- 文件名

# 回退到上一次提交（保留修改）
git reset --soft HEAD^

# 强制回退（慎用）
git reset --hard 提交哈希
```

::: warning 注意
`git reset --hard` 会丢弃所有未提交的修改，执行前请确认重要内容已备份。
:::
