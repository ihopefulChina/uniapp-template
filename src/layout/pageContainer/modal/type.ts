/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-16 09:51:12
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-12-18 12:57:01
 * @FilePath: /LX001413-weiyunbao-app/src/layout/pageContainer/modal/type.ts
 * @Description:
 */

export interface ShowModalOptions {
    /**
     * 提示的标题
     */
    title?: string;
    /**
     * 提示的内容
     */
    content?: string | string[];
    /**
     * 是否显示取消按钮，默认为 true
     */
    showCancel?: boolean;
    /**
     * 取消按钮的文字，默认为"取消"
     */
    cancelText?: string;
    /**
     * 取消按钮的文字颜色，默认为"#2A2827"
     */
    cancelColor?: string;
    /**
     * 确定按钮的文字，默认为"确定"
     */
    confirmText?: string;
    /**
     * 确定按钮的文字颜色，默认为"#497cd8"
     */
    confirmColor?: string;

    /**
     * 调用成功的回调函数
     */
    success?: (res: ShowModalRes) => void;
    /**
     * contentList 间隔距离
     */
    contentGap?: number;
}

interface ShowModalRes {
    /**
     * 为 true 时，表示用户点击了确定按钮
     */
    confirm: boolean;
    /**
     * 为 true 时，表示用户点击了取消
     */
    cancel: boolean;
}
