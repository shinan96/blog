## Vuex

小应用的话可以考虑vue（v2.6）新增的[Observable API ](https://cn.vuejs.org/v2/api/index.html#Vue-observable)

    Vue.observable({})


### vuex基础

#### 概念
Vuex是为vue.js应用程序开发的状态管理模式，它集中的存储了应用中的所有组件和状态，并按照一定的规则改变。

Vuex可以理解为挂载到全局的变量，不过被称之为状态，且与全局变量有几点不一样

1. Vuex 的状态存储是响应式的
2. 不能直接改变 store 中的状态，通过提交（commit）mutation去修改
------

state     数据仓库

getter    获取数据(store的计算属性)

mutation  函数方法

commit    methods修改

---------------------

### dispatch和commit的区别
    前者是异步操作，后者是同步操作，所以 一般情况下，推荐直接使用commit，以防异步操作带来的延迟问题

注：
通过this.$store.state.value = ''可以直接修改值，通过构造vuex时传入strict: true，若直接修改可直接报错



参考文件
1. [7个有用的Vue开发技巧](https://juejin.im/post/5ce3b519f265da1bb31c0d5f)
