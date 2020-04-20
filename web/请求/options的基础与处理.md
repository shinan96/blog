## options的基础与处理

### 为什么会有options请求
    在MDN上解释为用于获取目的资源所支持的通信选项，就是检测服务器所支持的请求方法，支持哪些HTTP方法。

    常用于跨域时CORS的预检请求，在 CORS 中，可以使用 OPTIONS 方法发起一个预检请求，以检测实际请求是否可以被服务器所接受。

    注：cors跨域处理非简单请求会触发options；

### 预检请求和简单请求
   不是所有的cors都会发生options预检请求（preflight request），与预检请求相对应的是简单请求（simple request）。如果是简单请求，那么请求应该符合以下条件：

    1，请求类型是GET/HEAD/POST之一
    2，请求头除了用户代理（浏览器）自带的（Connection, User-Agent）和Fetch spec as a “forbidden header name之外，用户只允许设置以下请求头：

        Accept Accept-Language
        Content-Language
        Content-Type (but note the additional requirements below)
        Last-Event-IDDPRDownlinkSave-DataViewport-Width
        Width

    3，Content-Type只能是以下类型：

        application/x-www-form-urlencoded
        multipart/form-data
        text/plain
注：在许多请求框架中，请求头设置了Content-Type: application/json，那么这个请求就变成了非简单请求。（只传输json格式）

### 解决方法
    现实是，很多情况下，跨域请求很难保证是简单请求，所以只能寄希望于后端解决这个问题。
    Access-Control-Max-Age：（number） 数值可以被缓存多久，单位是秒
    Access-Control-Max-Age: 600     将预检请求的结果缓存10分钟：

    如果值为 -1，则表示禁用缓存，每一次请求都需要提供预检请求，即用OPTIONS请求进行检测。

    Access-Control-Max-Age方法对完全一样的url的缓存设置生效，多一个参数也视为不同url。也就是说，如果设置了10分钟的缓存，在10分钟内，所有请求第一次会产生options请求，第二次以及第二次以后就只发送真正的请求了。
