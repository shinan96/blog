# js数组操作方法

## 1：数组的增删

### 1.1：push() pop() shift()和 unshift()
    push():     向数组末尾添加元素，返回新数组的长度
    [1,2,3,4].push(2)   // 5

    pop():      在数组末尾删除一个元素，返回删除的的值
    [1,2,3].pop()       // 3

    shift():    删除数组的第一个元素，返回第一个元素的值
    [1,2,3].shift()     // 1

    unshift():  在数组的第一个位置添加元素，并返回长度
    [1,2,3,4].unshift(7) // 5 

## 2: split()

## 3：数组扁平化（多维数组 -> 一维数组）
Array.flat(e)

e 打开数组深度，Infinity 可以将数组全部打开

## 4: Array.from()

将非数组转化为数组

let arr = Array.from(new Set([1,2,4,5,1]))

## 5：Array.prototype.reduce

reduec将对数组的每一个元素执行您提供的reduce函数，将其结果汇总到一个返回值
用途：1：将二维数组转为一维数组，2：数组算出累加器里的值；3:计算数组元素出现的次数

