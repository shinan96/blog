## Vue Router

### Vue Router介绍
> Vue Router是Vue.js官方路由管理器，与Vue.js深度集成，适合构建单页应用。

* 嵌套的路由/视图表
* 模块化、基于组件的模块化配置
* 路由参数、查询、通配符
* 基于Vue.js过渡系统的视图过渡效果
* `细粒度`的导航配置
* 带有自动激活的css class的链接
* HTML5历史模式或hash模式，在IE9自动降级
* 自定义的滚动条行为


### 实现原理
> 核心是更新视图而不重新请求页面。
#### hash
Vue Router默认方式，使用hash来模拟一个完整的url,当url改变时，页面不会重新加载。hash(#)代表了页面的锚点，#改变时，只会改变页面的位置，滚动到相对应的位置。同时，改变后，浏览器历史记录里增加了一个记录，可以实现页面的前进后退。 其原理是hash模式通过渲染指定dom位置的不同数据，通过onhaschange监听hash值得变化。
``` javascript
window.addEventListener('onhashchange', function(e) {})
```

### history
history使用html5新属性实现，interface属性新增的pushState()和replceState(),在已有的back,foward,go基础上，提供了对历史记录的修改。虽然改变了url，但是不会立即向后台发送请求。不过需要服务器端的配合，如果url匹配不到任何资源，会返回index.html页面，这个页面就是app依赖的页面。

``` nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### $route和$router
$route    是获取url的基础信息
$router   可以调用实例上方法，实现页面跳转等操作


### 参考
1. [从头开始学习vue-router](https://www.jianshu.com/p/4c5c99abb864)
2. [Vue Router官网](https://router.vuejs.org/zh/)


