用于尝试babel的一些用法
## 参考
[Debugging ES6 in VS Code](https://gist.github.com/dchowitz/83bdd807b5fa016775f98065b381ca4e)

## 插件
#### 自定义插件的使用
1. .babelrc中的插件只在node_modules中寻找，且命名必须为bable-plugin-xxx
2. babel.config.js中可以更加灵活一些，先require后直接在plugins中使用，如果是字符串则是和.babelrc一样
3. 在webpack的babel-loader中配置，同babel.config.js

- 注：运行demo见[使用说明](src/plugin/使用说明.md)