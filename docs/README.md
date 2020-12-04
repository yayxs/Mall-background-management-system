## 目录结构

```
├─.circleci
├─.github
├─dist                           # 构建后的文件
├─flow                           # 类型声明文件
├─packages                       # vue-server-renderer和vue-template-compiler，它们作为单独的NPM包发布                             
│  ├─vue-server-renderer
│  ├─vue-template-compiler
│  ├─weex-template-compiler
│  └─weex-vue-framework
├─scripts                        # 与构建相关的脚本和配置文件
├─src
│  ├─compiler                    # 与模板编译相关的代码
│  │  ├─codegen
│  │  ├─directives
│  │  └─parser
│  ├─core                        # 通用的、与平台无关的运行时代码
│  │  ├─components               # 通用的抽象组件
│  │  ├─global-api               # 全局API的代码
│  │  ├─instance                 # Vue.js实例的构造函数和原型方法
│  │  │  └─render-helpers
│  │  ├─observer                 # 实现变化侦测的代码
│  │  ├─util
│  │  └─vdom                     # 实现虚拟DOM的代码
│  │      ├─helpers
│  │      └─modules
│  ├─platforms                   # 特定平台代码
│  ├─server                      # 与服务端渲染相关的代码

│  ├─sfc                         # 单文件组件（* .vue文件）解析逻辑
│  └─shared                      # 整个项目的公用工具代码
├─test                           # 所有的测试代码
└─types                          # TypeScript类型定义
    └─test
```
