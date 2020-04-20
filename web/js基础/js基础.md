[js基础]: https://juejin.im/post/5b4de8b16fb9a04fa8672375 'js基础'
## 0.1. ：js有哪些数据类型？

    基本数据类型：string,Number,Null,Undefine,boolean,Symbol
    引用数据类型：Array, Object, Date, regExp,  Fucntion
    注：new出来的一般都是引用类型，其中引用类型还可以包括 string对象，布尔对象，数字对象等；

## 0.2. ：null与undefined的区别？==与===的区别？

    undefined是缺省值，声明后没有赋值；
    null 代表空值，代表一个空对象指针，typeof null 返回为object,被认为是一个特殊的对象值；

    === 全等，比较的时候也类型也一块比较；

## 0.3. ：如何判断某一个变量是数组？
    instanceof
    Array.isArray()
    constructor
    Object.prototype.toString.call(targe)


## 0.4. ：js发生隐式转换
    数字运算
    +：将表达式转换为string
    -: 将表达式的值转换为number

    if 判断
    == 比较

## 0.5. ：link和@import的区别
    1:link是xhtml标签，还能定义rss,定义rel连接属性，@import是能加载css
    2:页面加载时，link会同时加载，而@import的css需要等页面加载完才能夹杂
    3：使用dom控制样式时，js控制样式只能使用link标签，而@import不能用。

## 0.6. ：浏览器内核
    浏览器内核分为渲染引擎和js引擎。
    Trident(IE)
    Webkit(chrome)
    Blink(chrome, Opear)

    Blink是webkit的升级版本。
    其中，js引擎里谷歌的是v8引擎，Safari浏览器是Chakra(查克拉)

## 0.7. ：简述一下你对HTML语义化的理解
    便于开发者开发出更优雅的代码，同时可以让爬虫和机器更好的去解析；
    1：裸奔起来更好看
    2：有利于seo
    3：便于团队维护和开发
    4：用户体验

## 0.8. ：HTML5离线存储
    storage

    每个特定的域名下最多生成的cookie的个数有限制
	浏览器一般只允许存放300个cookie，每个站点最多存放20个，大小为4k，超出部分被截掉。localStorage为5M
	如果cookie被拦截，就可以获取seesion的所有数据
	cookie需要指定作用域，不可以跨域使用
	网站中需要存本地的数据（token等敏感数据）没有必要向服务发送，可以使用storage，如果需要把信息传向服务器可以使用cookie，分情况处理；

    localStorage.setItem('','')
    localStorage.getItem('')
    localStorage.removeItem('')
    localStorage.clear()

## 0.9. ：获取上一页的url
    document.referrer

## 0.10. ：浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？
    在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。离线的情况下，浏览器就直接使用离线存储的资源。

## 0.11. ：sort的使用
    sort(sortby)：按照字符编码的顺序进行排序，默认为升序排序；
    sortby：规定排序顺序，必须是函数

    若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
    若 a 等于 b，则返回 0。
    若 a 大于 b，则返回一个大于 0 的值。

    var a = [1,2,4,6,3,5]
    a.sort() // [1,2,3,4,5,6]

    var arr= [ 
    { 'sortNo': 2},
    { 'sortNo': 1},
    { 'sortNo': 5},
    { 'sortNo': 6},
    { 'sortNo': 7},
    { 'sortNo': 3},
    { 'sortNo': 9},
    { 'sortNo': 4},
    { 'sortNo': 0}
    ];
    arr.sort(function(a, b){
            return a.sortNo - b.sortNo;
    });

## 0.12. ：从输入url到页面加载完成发生了什么？
    　　1、浏览器的地址栏输入URL并按下回车。
    　　2、浏览器查找当前URL是否存在缓存，并比较缓存是否过期。
    　　3、DNS解析URL对应的IP。
    　　4、根据IP建立TCP连接（三次握手）。
    　　5、HTTP发起请求。
    　　6、服务器处理请求，浏览器接收HTTP响应。
    　　7、渲染页面，构建DOM树。
    　　8、关闭TCP连接（四次挥手）。

## 0.13. ：跨域的解决方案
    jsonp：只支持GET，不支持POST请求，不安全XSS
    postMessage：配合使用iframe，需要兼容IE6、7、8、9
    document.domain：仅限于同一域名下的子域
    cors：需要后台配合进行相关的设置
    websocket：需要后台配合修改协议，不兼容，需要使用socket.io
    proxy：使用代理去避开跨域请求，需要修改nginx、apache等的配置


## 0.14. : CommonJS,AMD, es6 模块化优缺点

### 0.14.1. CommonJS
    主要应用于服务器端，通过require方法同步加载所要依赖的其他模块，然后通过 exports 或 module.exports 来导出需要暴露的接口。
    优点：服务器模块便于重用；
    缺点：同步的模块加载方式不适合在浏览器环境中，同步意味着阻塞加载，浏览器资源是异步加载的
        不能非阻塞的并行加载多个模块

### 0.14.2. AMD
    声明模块的时候指定所有的依赖 dependencies，并且还要当做形参传到 factory 中，对于依赖的模块提前执行，依赖前置。
    优点：适合在浏览器环境中异步加载模块，可以并行加载多个模块
    缺点：依赖 SPM 打包，模块的加载逻辑偏重

### 0.14.3. ES6
    ES6 模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。
    优点：容易进行静态分析,面向未来的 ECMAScript 标准
    缺点：原生浏览器端还没有实现该标准,全新的命令字，新版的 Node.js才支持


### 0.14.4. arguments
    arguments是函数中的内置对象，包括了函数所要调的参数，可以通过arguments[0] 获取值，却不是真正的数组，属于"类似数组（array-like）对象"  例如{0:'shinan', 1: '18'}

    作用：1：检测参数个数；2：模拟函数重载

    
    注：类数组对象转为数组对象方法
    Array.prototype.slice.call ( arguments );


### 0.14.5. constructor

### 0.14.6. 函数重载
    一组相同的函数名，有不同个数的参数，在使用时调用一个函数名，传入不同参数，根据你的参数个数，来决定使用不同的函数


### 0.14.7. 移动设备时间处理

## 0.15. 盒模型

盒模型分为w3c盒模型和IE盒模型，一般常用w3c盒模型，width = content + padding + border

IE盒模型  width = content

box-sizing: 

    border-box      IE盒模型
    content-box     w3c盒模型


### 0.15.1. 对象控制台预览有东西，点开却没字段

    你打印这个对象的语句执行的时候, 对象里面的确是空的,但是当程序继续执行,下面的代码是有对这个对象赋值的语句,所以chrome控制台显示,里面有值,你可以在打印这个对象语句上设置断点,然后执行一句,此时去看控制台,就是你想要的结果




参考文件

1. [IE 盒模型和W3C盒模型](https://www.jianshu.com/p/f3403bc76e98)
2. [undefined与null的区别](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)




    