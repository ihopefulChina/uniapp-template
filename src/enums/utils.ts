/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-08-22 15:33:32
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-08-31 14:40:27
 *  * @FilePath: /uniapp_template/enmus/utils.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */

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
    return Object.keys(map).map((value) => ({ label: map[value], value: numeric ? Number(value) : value }));
}

/**
 * 将数组转换成对象
 *
 * @export
 * @param {string[][]} data
 * @return {*}
 */
export function converEnmuMap(data: any[][]) {
    return data.reduce((obj, [key, value = '']) => {
        obj[key] = value;
        return obj;
    }, {} as Record<string, string>);
}

/**
 * 将数组转换成下拉框数组
 *
 * @export
 * @param {string[][]} data
 * @return {*}
 */
export function converEnumArray(data: any[][]) {
    return data.map(([value, label]) => ({ label, value }));
}

/**
 * 将数组转换成下拉框数组
 *
 * @export
 * @param {string[][]} data
 * @return {*}
 */
export function converEnumColorArray(data: any[][]) {
    return data.map(([value, label, color]) => ({ label, value, color }));
}
