## js变量问题

1.  let与var的区别

变量声明阶段，会在作用域里执行，创建，初始化，赋值的阶段

而let所谓变量没有提升，存在暂时性死区，指只进行创建阶段，与var的区别在于，var创建，初始化一同执行

### let

    function f() {
      console.log(a);   // a,进行创建，没有给初始值undefined,  显示  ReferenceError: a is not defined

      let a = 2;
    }
    f(); // ReferenceError: a is not defined

注： Cannot access 'a' before initialization，目前谷歌浏览器给出的报错

### var
    function f() {
      console.log(a);   // undefined, 执行创建与给初始值undefined
      var a = 2;
    }
    f(); 





参考文档

1. [我用了两个月的时间才理解 let](https://zhuanlan.zhihu.com/p/28140450)