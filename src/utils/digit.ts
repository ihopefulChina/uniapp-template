let _boundaryCheckingState = true; // 是否进行越界检查的全局开关

/**
 * 把错误的数据转正
 * @private
 * @example strip(0.09999999999999998)=0.1
 */
function strip(num: string | number, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
}

/**
 * Return digits length of a number
 * @private
 * @param {*number} num Input number
 */
function digitLength(num: number) {
    // Get digit length of e
    const eSplit = num.toString().split(/[eE]/) || [];
    if (eSplit?.length > 0) {
        const len = ((eSplit?.[0] || '').split('.')[1] || '').length - +(eSplit[1] || 0);
        return len > 0 ? len : 0;
    }
    return 0;
}

/**
 * 把小数转成整数,如果是小数则放大成整数
 * @private
 * @param {*number} num 输入数
 */
function float2Fixed(num: number) {
    if (num.toString().indexOf('e') === -1) {
        return Number(num.toString().replace('.', ''));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
}

/**
 * 检测数字是否越界，如果越界给出提示
 * @private
 * @param {*number} num 输入数
 */
function checkBoundary(num: number) {
    if (_boundaryCheckingState) {
        if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
            console.warn(`${num} 超出了精度限制，结果可能不正确`);
        }
    }
}

/**
 * 把递归操作扁平迭代化
 * @param {number[]} arr 要操作的数字数组
 * @param {function} operation 迭代操作
 * @private
 */
function iteratorOperation(arr: number[], operation: Function) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);

    others.forEach((num) => {
        res = operation(res, num);
    });

    return res;
}

/**
 * 高精度乘法
 * @export
 */
export function times(...nums: any) {
    if (nums.length > 2) {
        return iteratorOperation(nums, times);
    }

    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;

    checkBoundary(leftValue);

    return leftValue / Math.pow(10, baseNum);
}

/**
 * 高精度加法
 * @export
 */
export function plus(...nums: any) {
    if (nums.length > 2) {
        return iteratorOperation(nums, plus);
    }

    const [num1, num2] = nums;
    // 取最大的小数位
    const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
    // 把小数都转为整数然后再计算
    return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
}

/**
 * 高精度减法
 * @export
 */
export function minus(...nums: any) {
    if (nums.length > 2) {
        return iteratorOperation(nums, minus);
    }

    const [num1, num2] = nums;
    const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
    return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
}

/**
 * 高精度除法
 * @export
 */
export function divide(...nums: any) {
    if (nums.length > 2) {
        return iteratorOperation(nums, divide);
    }

    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    // 重要，这里必须用strip进行修正
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}

/**
 * 四舍五入
 * @export
 */
export function round(num: number, ratio: number) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
        result = times(result, -1);
    }
    // 位数不足则补0
    return result;
}

/**
 * 是否进行边界检查，默认开启
 * @param flag 标记开关，true 为开启，false 为关闭，默认为 true
 * @export
 */
export function enableBoundaryChecking(flag = true) {
    _boundaryCheckingState = flag;
}

/** 平均值 */
export function avg(...nums: number[]) {
    return divide(plus(...nums), nums.length);
}
/**
 * 截取指定长度的数值
 * @param value 待截取的数值
 * @param len 截取的长度
 * @param prefixZero 如果只有一位是否添加0
 * @returns 截取后的数值字符串
 */
export const formatNumber = (value: string | number, len = 2, prefixZero = true): string => {
    let number: number | string = 0;
    // 判断传入的值是什么类型
    if (typeof value === 'string') {
        // 如果为空字符串直接返回
        if (value === '') return value;
        number = Number(value);
    } else if (typeof value === 'number') {
        number = value;
    }
    if (Number.isNaN(number) || number === 0) return prefixZero ? '00' : '0';
    const maxNumber = Math.pow(10, len) - 1;
    if (number > maxNumber) return `${maxNumber}+`;
    number = String(number);
    return prefixZero ? `00${number}`.slice(Math.max(0, number.length > 2 ? 2 : number.length)) : number;
};
export default {
    times,
    plus,
    minus,
    divide,
    round,
    enableBoundaryChecking,
    avg,
};
