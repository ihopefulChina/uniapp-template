/**
 * 根据枚举对象转换为optins数组
 *
 * 对象无法保证key值顺序。建议使用下面的两个转换函数
 * @export
 * @param {(Record<string | number, any>)} map
 * @param {boolean} [numeric=true]
 * @return {*}
 */
export function createEnumOptions(map: Record<string | number, any>, numeric = true) {
  return Object.keys(map).map((value) => ({ label: map[value], value: numeric ? Number(value) : value }))
}

/**
 * 将数组转换成对象
 *
 * @export
 * @param {string[][]} data
 * @return {*}
 */
export function converEnmuMap(data: any[][]) {
  return data.reduce(
    (obj, [key, value = '']) => {
      obj[key] = value
      return obj
    },
    {} as Record<string, string>
  )
}

/**
 * 将数组转换成下拉框数组
 *
 * @export
 * @param {string[][]} data
 * @return {*}
 */
export function converEnumArray(data: any[][]) {
  return data.map(([value, label]) => ({ label, value }))
}

/**
 * 将数组转换成下拉框数组
 *
 * @export
 * @param {string[][]} data
 * @return {*}
 */
export function converEnumColorArray(data: any[][]) {
  return data.map(([value, label, color]) => ({ label, value, color }))
}
