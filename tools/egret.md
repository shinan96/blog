## Egret

### 锚点

每个显示对象都包含一个锚点,锚点默认位于显示对象的左上角（0，0）。

anchorOffsetX，anchorOffsetY属性修改锚点的位置；初始值为0；



### info

通过的 x 和 y 属性可访问修改显示对象的位置。

mySprite
  x              // 距离x轴 distance
  y               // 距离y轴 distance


e:egret.TouchEvent
  stageX          // 距离x轴 distance
  stateY          // 距离y轴 distance

### Func
egret.TouchEvent
  .globalToLocal(x, y)      // 将舞台坐标转化为该显示对象内部本地坐标
  .localToGlobal(x, y)      // 将本地坐标转化为该现实对象所在舞台坐标 ( 不常用 )

#### 资料

- [Egret Engine下载](https://docs.egret.com/engine/)
- [egret 示例](http://developer.egret.com/cn/example/egret2d/index.html#010-disp-coll)
- [白鹭游戏调试神器](https://docs.egret.com/inspector)
- [文档](http://developer.egret.com/cn/github/egret-docs/Engine2D/projectConfig/installation/index.html)

