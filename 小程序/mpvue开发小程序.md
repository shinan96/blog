# mpvue+MP-WeUI开发拼团小程序
[MP-WeUI]: https://youngluo.github.io/mp-weui/ "MP-WeUI"
[mpvue官网]: http://mpvue.com "mpvue"
[Vue.js]: https://cn.vuejs.org/ "Vue.js"

### 介绍

[mpvue官网]是一个使用 Vue.js 开发小程序的前端框架。框架基于 [Vue.js] 核心，mpvue 修改了 [Vue.js] 的 runtime 和 compiler 实现，使其可以运行在小程序环境中，从而为小程序开发引入了整套 [Vue.js] 开发体验。

> 除特殊情况外，不建议使用小程序的生命周期钩子。

这是官网上的描述，但是实际开发中遇到了各种坑,项目中每个页面我都会用到onShow，onLoad，vue我也只是用到了methods，把方法写在这里面

当时遇到的坑有
* 项目中不能加载图片
* 预览超过2m的包（最后发现自己很多图片没有压缩）
* 版本升级后没有app.json

当时上线的v1之后，因为mpvue更新的框架，所以v1的代码有bug也没有修，强忍着撑到了v1.2,之后就顺利了。

### 图片不能加载

原生小程序里背景图不能使用本地图片，官方的建议只支持线上图片和base图片，个人认为是出于对包的大小限制，项目中图片最占内存。
