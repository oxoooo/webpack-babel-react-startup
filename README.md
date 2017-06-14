一个 Webpack + Babel + React 的模板
==========

## 开发环境

- Node v7.x

## 目录约定

- `dist/` 编译产物（不纳入版本控制）
- `src/` 源码

## 命令

```sh
npm run dev
```

启动测试服务器，然后即可通过 http://localhost:3000/ 本地调试。已配好热加载。

```sh
npm run build
```

编译项目。编译结果在 `dist/` 目录下，其中：

* `index.html` 是生成好的静态首页入口
* `*.js` 和 `*.css` 是编译合并后的资源，文件名包含了唯一的 hash 以便缓存和版本区分
* `*.map` 是 JS 和 CSS 的 Source Map，文件名中的 hash 对应上述代码文件。应当存档以便线上发现 BUG 时及时定位到源文件位置；同时应当避免该文件被公开以确保源码安全

```sh
npm run clean
```

清理编译产物。

## 配置

#### CDN 地址

`webpack.prod.js`：

```js
output: {
  publicPath: '/assets/',
},
```

`publicPath` 是 `dist/` 下所有静态资源在网站里的路径。如果通过 CDN 分发静态资源，则改成 CDN 的路径。例如，若 `main-123456.js` 发布到 CDN 后的地址是 `https://some.cdn.com/the/path/of/main-123456.js`，则这里应填 `'https://some.cdn.com/the/path/of/'`。

#### 网站标题

`webpack.prod.js` 和 `webpack.dev.js`：

```js
new HtmlWebpackPlugin({
  title: 'Hello World',
}),
```

`title` 是最后生成的 `index.html` 中的标题。详见 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)。

如果需要增加其它额外的标签，可修改 `index.ejs`。
