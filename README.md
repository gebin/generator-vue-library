# vue-library-tpl

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## doc模式

### 启动doc
可以在doc运行时，调试组件的功能

```
yarn styleguide
```

### 编译doc
```
yarn styleguide:build
```


## 实现探索

1）@vue/cli支持库打包模式，默认不会打包vue，需要在package.json配置入口组件路径。

2）styleguide作为插件的方式引入。

3) styleguide.config.js配置doc的相关参数，包括检索的内容，等等。

4）尝试引入了mint-ui，也是可以的。