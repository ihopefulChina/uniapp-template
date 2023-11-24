/**
 * @description 数组去重
 * @param data 待处理数据
 * @param key 去重标识
 * @returns
 */
export const removeRepetition = (data: any[], key = 'id') => {
    /** 没有值返回空数组 */
    if (!data) {
        return [];
    }
    /** 非数组返回空数组 */
    if (!Array.isArray(data)) {
        return [];
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
