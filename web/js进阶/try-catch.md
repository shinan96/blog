

#### try catch同步执行

```javascript
try {
			setTimeout(function() {
				throw new Error("error")
			}, 1000)
} catch(e) {
  	console.log(e)
}
```

try捕获不到setTimeout里报错，因为try catch是同步的

