/**
 * 数组去重
 */

var arr = [1, 2, 3, 4, 4, 2, 2, 6, 9, 1, 0]

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
  value.forEach(ele => {
    console.log(ele);
    if(!newArr.includes(ele)) {
      newArr.push(ele)
    }
  })
  return newArr
}


/**
 * 统计字符串里出现出现频率最多的字符
 */
// 方法1
let str = 'abcdefffdddddd';
function countNum(value) {
  value = Array.from(value)
  
  let count = value.reduce((acc, ele) => {
    if(acc[ele]) {
      acc[ele]++
    } else {
      acc[ele] = 1
    }
    return acc
  }, {})
  let max = 0
  for(key in count) {
    if(max < count[key]) {
      max = count[key]
    } else {
      max = max
    }
  }
  console.log(max);

  
}

console.log(countNum(str));

