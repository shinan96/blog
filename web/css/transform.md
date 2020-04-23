## transform
> 允许你旋转，缩放，倾斜或平移给定元素。这是通过修改CSS视觉格式化模型的坐标空间来实现的。

<br />

### transform-origin属性
> 在了解transform之前，需要了解`transform-origin属性`的概念，默认情况，变形的原点在元素的中心点，或者是元素X轴和Y轴的50%处。

```css
transform-origin：x-offset  y-offset
```

<br />


### rotate()
>  定义一个旋转属性,如果为正值，则运动将为顺时针，如果为负值，则为逆时针 。
```css
transform:rotate(30deg):
```

deg: 度的概念。

### translate()
> 用于移动元素在平面上的位置。这种变换的特点是矢量的坐标定义了它在每个方向上的移动量。
```css
translate(tx, ty)
```

### scale()
> 可改变元素的大小。 它可以增大或减小元素的大小，并且缩放量由矢量定义，并且它可以使在一个方向上比另一个方向更多。

```css
scale(sx, sy)
```
### skew()
> 用于拉伸，或者说是平移，该函数会使得在每个方向上扭曲元素上的每个点以一定角度。这是通过将每个坐标增加一个与指定角度成比例的值和到原点的距离来完成的。离原点越远，拉伸的值就越大。

```css
skew(ax, ay)
``` 

### 参考
1. [transform-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function)