
# 从0 学习VueCLI
## 特点

- 开箱即用
- 便于扩展
- 不用弹出
- 图形界面
- 创建原型
- 面向未来

## 系统组件

- CLI
- CLI服务
- CLI插件
  - vue-cli-service 列出所有的插件

```sh
$ vue create --help
Usage: create [options] <app-name>

create a new project powered by vue-cli-service

Options:
  -p, --preset <presetName>       Skip prompts and use saved or remote preset
  -d, --default                   Skip prompts and use default preset
  -i, --inlinePreset <json>       Skip prompts and use inline JSON string as preset
  -m, --packageManager <command>  Use specified npm client when installing dependencies
  -r, --registry <url>            Use specified npm registry when installing dependencies (only for npm)
  -g, --git [message]             Force git initialization with initial commit message
  -n, --no-git                    Skip git initialization
  -f, --force                     Overwrite target directory if it exists
  --merge                         Merge target directory if it exists
  -c, --clone                     Use git clone when fetching remote preset
  -x, --proxy <proxyUrl>          Use specified proxy when creating project
  -b, --bare                      Scaffold project without beginner instructions
  --skipGetStarted                Skip displaying "Get started" instructions
  -h, --help                      output usage information
```

```vue
 <img src="../assets/logo.png" alt="相对路径" />
    <!-- 相对模块请求 -->
    <img src="../../public/logo.png" alt="直接拷贝" />

    <!-- 绝对路径保留 -->
    <img src="/src/assets/logo.png" alt="绝对路径" />
    <!-- 任何内容都是一个模块解析 -->
    <!-- <img src="~@/assets/logo/png" alt="" /> -->
    <!-- @ 也作为模块 -->
    <img src="@/assets/logo.png" alt="" />
```


# 配置参考

## vue.config.js 可选的配置文件

 - @vue/cli-service 自动加载
 - 包含选项的对象