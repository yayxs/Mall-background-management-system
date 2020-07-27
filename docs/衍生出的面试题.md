<!--

 * @Author: your name
 * @Date: 2020-07-27 21:40:05
 * @LastEditTime: 2020-07-27 21:40:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-source-code\docs\衍生出的面试题.md
-->



## 关于`Data`

### 为什么可以通过`this` 直接访问 data中的属性

#### 示例

```js
 mounted() {
    console.log(this.msg);
	console.log(this._data.msg) // 
  },
  data() {
    return {
      msg: '',
    };
  },
```

#### 源码实现

```javascript
export function proxy (target: Object, sourceKey: string, key: string) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val
  }
// 当访问的时候Vue 代理了一层
  Object.defineProperty(target, key, sharedPropertyDefinition)
}
```

## 关于挂载

### 为什么我们开发习惯用一个ID `app`的div做外层元素

#### 示例

```
<body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
```

#### 源码

```
/* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      `Do not mount Vue to <html> or <body> - mount to normal elements instead.`
    )
    return this
  }
```

### 为什么写template只能是一个根节点

#### 示例

```
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>
```

## 关于VDOM

