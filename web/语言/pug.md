## Pug


> vue-cli3.0 配置
```js
cnpm i pug pug-html-loader pug-plain-loader -S

chainWebpack: config => {
    config.module.rule('pug')
    .test(/\.pug/)
    .use('pug-html-loader')
    .loader('pug-html-loader')
    .end()
}
```


[Pug 模板引擎中文文档](https://pugjs.bootcss.com/api/getting-started.html)
[vue脚手架中 pug插件配置](https://blog.csdn.net/diecuoxie4468/article/details/102360884)

