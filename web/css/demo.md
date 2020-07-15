## 常见样式处理

#### 图片文字居中
``` html
<div class="tip"><span>文案</span></div>
```

``` css
.tip::before {
  content: '';
  width: 40px;
  height: 40px;
  background: url('./kuijia.png') no-repeat;
  background-size: contain;
}

.tip {
  display: flex;
  align-items: center;
}
```

#### 背景图简写
``` css
background: url('./kuijia.png') center/contain no-repeat;
```
注：position和size要一起写，切顺序不能变；