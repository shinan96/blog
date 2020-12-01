# vue
[vue官网]: https://cn.vuejs.org/ "vue官网"

    MVVM全称是Model-View-ViewModel，vue是以数据为驱动的，一旦创建dom和数据就保持同步，每当数据发生变化时，dom也会变化。 
### 1：v-show和v-if的区别
    v-show: 通过控制css的display使其显示和隐藏
    v-if:   通过直接销毁或重建DOM达到元素的显示和隐藏


### 2：<keep-alive></keep-alive>的作用是什么?
    <keep-alive></keep-alive> 包裹动态组件时，会缓存不活动的组件实例,主要用于保留组件状态或避免重新渲染。

### 3: 组件之间的传值？

    向子组件传值
    父组件通过标签上面定义传值
    子组件通过props接受数据
    子组件父组件传值
    子组件通过$emit方法传递参数
### 4: 路由之间跳转
    声明式（标签跳转）
    函数式（js跳转）

### 5：$route和$router的区别
    $route是“路由信息对象”，包括path，params，hash，query，fullPath，matched，name等路由信息参数。
    而$router是“路由实例”对象包括了路由的跳转方法，钩子函数等。

### 6：vue.js的两个核心是什么？
    数据驱动、组件系统

### 6.vue常用的修饰符？
    .prevent: 提交事件不再重载页面；
    .stop: 阻止单击事件冒泡；
    .self: 当事件发生在该元素本身而不是子元素的时候会触发；
    .capture: 事件侦听，事件发生的时候会调用