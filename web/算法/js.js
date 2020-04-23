/**
 * 数组去重
 */

// var arr = [1, 2, 3, 4, 4, 2, 2, 6, 9, 1, 0]

// 1
function wipeOut1(value) {
  return value.reduce((acc, ele) => {
    if (acc.includes(ele)) {
      return acc
    } else {
      acc.push(ele)
    }
    return acc
  }, [])
}

// 方法2

function wipeOut2(value) {
  return Array.from(new Set(value))
}

// 方法3

function wipeOut3(value) {
  let newArr = []
  value.forEach((ele) => {
    console.log(ele)
    if (!newArr.includes(ele)) {
      newArr.push(ele)
    }
  })
  return newArr
}

/**
 * 统计字符串里出现出现频率最多的字符
 */
// 方法1
let str = 'abcdefffdddddd'
function countNum(value) {
  value = Array.from(value)

  let count = value.reduce((acc, ele) => {
    if (acc[ele]) {
      acc[ele]++
    } else {
      acc[ele] = 1
    }
    return acc
  }, {})
  let max = 0
  for (key in count) {
    if (max < count[key]) {
      max = count[key]
    } else {
      max = max
    }
  }
}

/**
 *  如何判断一个对象是否为数组
 *  3种方法
 */
let temp = [1, 2, 4]
function isArray(value) {
  let is
  // is = temp instanceof Array
  // is = Object.prototype.toString.call(value) == '[object Array]'
  is = Array.isArray(value)

  return is
}

/**
 * 冒泡排序
 */
let arr = [1, 9, 3, 5, 7, 10, 4, 33, 4]
function bubbleSort() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
// console.log(bubbleSort(arr));

/**
 * 获取url参数
 */
// let url = 'http://a.shandjj.com/Active2020/Mar/Man/index.html?userId=10&uuid=web&token=123'
function parseUrl() {
  let obj = {}
  let parse = location.search.replace('?', '').split('&')
  for (let index = 0; index < parse.length; index++) {
    const element = parse[index]
    let data = element.split('=')
    let a = data[0]
    obj[a] = data[1]
  }
  return obj
}

/**
 * 请求字符串前后空格
 */

function clearBlank(val) {
  let reg = /\s/g
  val = val.replace(reg, '')
  return val
}

/**
 * 数组扁平化处理
 */
let arr2 = [1, [2, [3, 4]]]
function flatArr(val) {
  // return val.flat(3)
  return val.reduce((prev, item) => {
    return prev.concat(Array.isArray(item)?flatArr(item):item);
  }, [])
}
console.log(flatArr(arr2));
