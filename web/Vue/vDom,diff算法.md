## vdom

虚拟dom是对真实dom提炼的简单对象，因为一个简单的div就包含200多个属性，但我们只需要tagname就够了，所以过多的操作dom会影响性能。

```
{
  tag: 'div',       // 标签名
  data: {},         // 属性数据，包括class、style、event、props、attrs等
  children: [],     // 子节点数组，也是vnode结构
  text: undefined,  // 文本
  elm: undefined,   // 真实dom
  key: undefined    // 节点标识
}
```