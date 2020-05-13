## sass css预处理器

> sass运行在服务器端， `sass`基于`Ruby`语言开发而成，因此安装`sass`前需要[安装Ruby](http://rubyinstaller.org/downloads)。（注:mac下自带Ruby无需在安装Ruby!） 

### 一、sass与scss的区别

scss是cass的升级版本，兼容sass之前的功能，主要区别在于sass靠缩进表示嵌套关系，scss是花括号

```scss
//sass 太费眼了
.father
    width:100px;
    .son
        width:50px;
//scss 适合我这种眼瘸手残患者
.father{
    width:100px;
    .son{
        width:50px;
    }
} 

```

### 二、规则

1. 变量
2. 嵌套
3. 引入
4. 静默注释
5. 混入





### 参考

- [Sass中文网](https://www.sass.hk/)