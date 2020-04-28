## mockjs

### Mock.mock()

> Mock.mock( rurl, function( options ) )  

记录用于生成响应数据的函数。当拦截到匹配 rurl 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。
### Mock.setup()
> 配置拦截 Ajax 请求时的行为。支持的配置项有：timeout。

默认 10-100
```js
Mock.setup({
  timeout: '200-600'
})
```

### Mock.Random
> Mock.Random 的方法在数据模板中称为『占位符』，书写格式为 @占位符(参数 [, 参数]) 。
```js
var Random = Mock.Random
Random.email()
// => "n.clark@miller.io"
Mock.mock('@email')
// => "y.lee@lewis.org"
Mock.mock( { email: '@email' } )
// => { email: "v.lewis@hall.gov" }
```

### 扩展
> Random.extend({})


### Mock.toJSONSchema( template )
> 把 Mock.js 风格的数据模板 template 转换成 JSON Schema。


### 参考
1. [mockjs使用笔记](https://my.oschina.net/tongjh/blog/2999834)
2. [mock官网](https://github.com/nuysoft/Mock/wiki)