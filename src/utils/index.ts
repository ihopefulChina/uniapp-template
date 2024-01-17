/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-04 17:12:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-16 16:45:22
 * @FilePath: /LX001413-weiyunbao-app/src/utils/index.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
import { isArray, isObject } from './is';
import CryptoJS from 'crypto-js';
/**
 * 深度合并
 * @param src
 * @param target
 */
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
    let key: string;
    for (key in target) {
        src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
    }
    return src;
}

/**
 * 安全json解析
 */
export function JSONSafeParse<T>(value: any, defaultValue?: T): T {
    let result: any = defaultValue;
    if (value && typeof value === 'string') {
        try {
            result = JSON.parse(value);
        } catch (err) {
            console.log(err);
        }
    }
    // 对数组进行一层保护
    if (Array.isArray(defaultValue) && !Array.isArray(result)) {
        return defaultValue;
    }
    return result;
}

/**
 * 字符串转数组
 */
export function stringToArray(str: string, split = ','): string[] {
    if (!str) return [];
    return str.split(split);
}

/** 对象转数组 */
export const objecToArray = (
    data?: Record<string, any> | { value?: any; key: string }[],
    items?: Record<string, string>,
    arrrList?: { value?: any; label: string }[]
): { label?: string; value?: any; key: string }[] => {
    if (data && isArray(data)) {
        return data?.map((item) => ({
            label: items?.[item?.key] || '',
            value: item?.value,
            key: item?.key,
        }));
    }
    const list = Object.keys(data || {})?.map((key) => ({
        label: items?.[key] || '',
        value: data?.[key],
        key: key,
    }));

    /** 目的是为了修改顺序 */
    if (arrrList && arrrList?.length > 0) {
        /** 以arrrList顺序，重新排序list */
        return list?.sort((a, b) => arrrList?.findIndex((item) => item?.value === a?.key) - arrrList?.findIndex((item) => item?.value === b?.key));
    }

    return list;
};

/** 判断内容是否空 */
export const isContentEmpty = (data?: object | string): boolean => {
    if (Array.isArray(data)) {
        return data.length === 0;
    } else if (Object.prototype.toString.call(data) === '[object Object]') {
        return JSON.stringify(data) === '{}';
    } else if (typeof data === 'string') {
        return data === '' || data === null || data === undefined;
    }
    return !data;
};
/**
 * @description 数组去重
 * @param data 待处理数据
 * @param key 去重标识
 * @returns
 */
export const removeRepetition = (data: any[], key = 'value') => {
    /** 没有值返回空数组 */
    if (!data) {
        return [];
    }
    /** 非数组返回空数组 */
    if (!Array.isArray(data)) {
        return [];
    }
    /** 如果对象 key 都不存在 不处理 */
    if (
        data.every((item) => {
            if (typeof item === 'object' && !item[key]) {
                return true;
            } else {
                return false;
            }
        })
    ) {
        return data;
    }
    return data.filter((item, index, self) => {
        /** 数据为对象从对象中取唯一标识过滤 */
        if (typeof item === 'object') {
            return self.findIndex((val) => val[key] === item[key]) === index;
        }
        /** 原始值类型简单处理 */
        return self.indexOf(item) === index;
    });
};

/** 获取对象 的key 合集 */
export const getObjKeys = (obj: object, arrrList?: { value?: any; label: string }[]): string[] => {
    const keys = obj ? Object.keys(obj) : [];
    /** 目的是为了修改顺序 */
    if (arrrList && arrrList?.length > 0) {
        /** 以arrrList顺序，重新排序list */
        return keys?.sort((a, b) => arrrList?.findIndex((item) => item?.value === a) - arrrList?.findIndex((item) => item?.value === b));
    }

    return keys;
};

/** 获取字符串数组 */
export const getStrArr = (str: string | string[]) => {
    if (str) {
        return isArray(str) ? str : (str || '')?.split(',');
    }
    return [];
};
export function addZero(num: number | string): string {
    return Number(num) < 10 ? '0' + Number(num) : String(num);
}

/**
 * 循环
 * @param collection
 * @param callback
 */
export const forEachFn = (collection: any, callback: any) => {
    if (!collection || typeof callback !== 'function') return;
    if (collection instanceof Array) {
        for (let i = 0; i < collection.length; i++) {
            if (callback(collection[i], i) === false) {
                break;
            }
        }
    } else if (collection instanceof Object) {
        for (const i in collection) {
            if (callback(collection[i], i) === false) {
                break;
            }
        }
    }
};

/***
 * 获取岁数
 * @param time 时间
 * @param testDate 年份时间
 * @returns {number}
 */
export const getAge = (time: string | number, testDate = null) => {
    const birthDay = new Date(time) as any;
    const nowDate = testDate ? new Date(testDate) : (new Date() as any);
    const date1 = Date?.parse(birthDay);
    const date2 = Date?.parse(nowDate);
    const day = Math.ceil((date2 - date1) / (60 * 60 * 1000 * 24));
    let age: string | number = '';
    const year = Math.floor(day / 365) * 1;
    const y = day % 365;
    const month = Math.floor(y / 30) * 1;
    age = Number(year) + Number((month / 12).toFixed(2));
    // console.log(age,'birthDay=====')
    return age;
};

/**
 *  数量超过999显示999+
 * @param num 当前数值
 * @param targetNum 目标数值
 */
export const setNum = (num: string | number, targetNum = 99) => {
    const newNum = num || 0;
    return Number(newNum) > Number(targetNum) ? targetNum + '+' : newNum;
};
/**
 * 生成唯一标识符
 *
 * @export
 * @returns
 */
export function guid(short = false) {
    const split = short ? '' : '-';
    return S4() + S4() + split + S4() + split + S4() + split + S4() + split + S4() + S4() + S4();
}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

/** 金额格式化 */
export function formatCurrency(amount?: number, decimalPlaces = 2): string {
    // 添加千位分隔符并保留指定小数位数
    if (!amount || amount === 0) {
        return '0';
    }
    const formattedAmount = parseFloat(`${amount || 0}`)
        ?.toFixed(decimalPlaces)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return formattedAmount;
}

/** 省市区地区文本格式化
 * @param {string}  provinceName 省
 * @param {string} cityName 市
 * @param {string} areaName 区
 * @param {string} interval 间隔符
 * @returns {string}
 */
export function formatAddress(provinceName?: string, cityName?: string, areaName?: string, interval = '-'): string {
    return provinceName ? [...new Set([provinceName, cityName && ['市辖区'].includes(cityName) ? '' : cityName, areaName].filter(Boolean))].join(interval) : '';
}

/** 金额保留2位小数 */
export function formatCurrency2(amount?: number | string): string {
    // // 添加千位分隔符并保留指定小数位数
    // .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    return parseFloat(`${amount || 0}`)?.toFixed(2);
}

/** pdf地址根据url地址截取pdf文件名称 */
export function getPdfName(url?: string): string {
    if (!url) {
        return '';
    }
    /** 获取后缀 */
    const suffix = url.substring(url.lastIndexOf('.') + 1);
    /** '-'后面 如果至少包含8个英文和数字字符 就移除后面所有字符 */
    const str = url.replace('https://yundongpinggu.oss-cn-beijing.aliyuncs.com/wmshop_temp/', '');

    const regex = /-([a-zA-Z0-9]{8,}).*$/; // 匹配含有至少8个英文和数字字符的情况

    const modifiedString = str.replace(regex, '');

    return `${modifiedString}.${suffix}`;
}

/**
 * 电话号码脱敏
 * @param tel
 * @returns
 */
export function handlePhoneSensitive(tel: string) {
    if (!tel) return tel;
    const phone = tel.replace(tel.substring(3, 7), '****');
    return phone;
}

/** 字符串数组是否包含某个值 */
export function includesValue(arr?: any[], val?: string) {
    return val && (arr ?? []).indexOf(val) > -1;
}

/**
 * @description: 加密密码
 * @param {*} ciphertext 密文
 * @return {*} 加密后的密码
 */

const key = CryptoJS.enc.Utf8.parse('sdidASE5F41S5Dm7'); // 密钥
export const encryptPassword = (password: string) => {
    const srcs = CryptoJS.enc.Utf8.parse(password);
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    }).toString();

    return encrypted;
};

/**
 * @description: 解密密码
 * @param {*} ciphertext 密文
 * @return {*}  解密后的密码
 */
export const decryptPassword = (ciphertext: string) => {
    const decrypted = CryptoJS.AES.decrypt(ciphertext, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);

    return decrypted;
};

/** 根据年份获取最后一天最后一秒  */
export function getLastDate(year: number | string) {
    const lastDay = new Date(Number(year), 11, 31, 23, 59, 59).getTime();
    return lastDay;
}

/** 解决 iphone 时间显示兼容性问题 */
export const formatReplaceDate = (date?: string): string => {
    return (date ?? '').replace(/-/g, '/');
};

/** 根据时间戳获取跟当前时间相差的时间戳 */
export const getDiffTimeStamp = (time: string): number => {
    const last = new Date(formatReplaceDate(time)).getTime();
    const diff = (last - new Date().getTime()) / 1000;
    return diff > 0 ? diff : 0;
};
