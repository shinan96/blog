export function countMoney(obj) {
    // let obj = {
    //     shi: 130,
    //     zhang: 10,
    //     sheng: 30
    // }
    if (Object.prototype.toString.call(obj) !== '[object Object]') {
        console.warn('类型错误')
        return false
    }
    let acc = Math.floor(Object.values(obj).reduce((acc, ele) => acc + ele, 0) / Object.keys(obj).length)
    let newObj = {
        all: Object.values(obj).reduce((acc, ele) => acc + ele, 0),
        avg: acc
    }
    for (var i = 0; i < Object.keys(obj).length; i++) {
        newObj[Object.keys(obj)[i]] = obj[Object.keys(obj)[i]] > acc ? arr : obj[Object.keys(obj)[i]] - acc
    }

    return newObj
}

export function parseUrl(url) {
    if (!url.includes('?')) { 
        console.warn('链接无参数')
        return false
    }
    let obj = {}
    let parse = url.split('?')[1].split('&')

    parse.forEach(ele => {
        obj[ele.split('=')[0]] = ele.split('=')[0]
    })

    return parse
}

/**
 * 实现一个深拷贝，利用递归，对数据进行处理
 * @param {*} param 
 */
function deepCopy(param) {
  let result
  let type = Object.prototype.toString.call(param)
  if (type == '[object Array]') {
      result = []
      result = param.map(ele => {
          return ele
      })
  } else if (type == '[object Object]') {
      result = {}
      for (var i in param) {
          result[i] = deepCopy(param[i])
      }
  } else {
      return param
  }
  return result
}

/**
 * 转义字符
 */

function escape(str) {
  str = str.replace(/&/g, '&amp;')
  str = str.replace(/</g, '&lt;')
  str = str.replace(/>/g, '&gt;')
  str = str.replace(/"/g, '&quto;')
  str = str.replace(/'/g, '&#39;')
  str = str.replace(/`/g, '&#96;')
  str = str.replace(/\//g, '&#x2F;')
  return str
}


