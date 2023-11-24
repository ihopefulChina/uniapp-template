/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-10-10 15:09:37
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-24 09:23:37
 * @FilePath: /uniapp_template/src/layout/pageContainer/toast/type.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
/**
 * 
    message	显示的文本	String | Number	-	-
    type	主题类型	String	-	-
    params	跳转的参数	Object	-	-
    duration	展示时间，单位ms	String | Number	1000	-
    complete	执行完后的回调函数	Function	null	-

 */
export interface UToastPramsVO {
    /** 显示的文本 */
    message?: string | string[];
    /** 主题类型 */
    type?: 'primary' | 'success' | 'error' | 'warning' | 'default' | 'loading';
    /** 跳转的参数 */
    params?: Object;
    /** 展示时间，单位ms */
    duration?: number;
    /** 执行完后的回调函数 */
    complete?: Function;
}
