### 一、`encodeURIComponent` 和 `decodeURIComponent`

> encodeURIComponent将中文字符串编码成ASCII字符序列，

encodeURIComponent转义除了以下所示的所有字符：

```
不转义的字符：
    A-Z a-z 0-9 - _ . ! ~ * ' ( )
```

```
encodeURIComponent('123shi')				=> 			"123shi"
```





#### escape和unescape

> 该特性已废弃，目前浏览器扔支持，但在未来某个节点可能会停止支持。











[字符编码笔记：ASCII，Unicode 和 UTF-8](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)

