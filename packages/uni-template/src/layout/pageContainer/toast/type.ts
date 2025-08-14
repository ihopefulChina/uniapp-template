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
  content?: string | string[]
  /** 主题类型 */
  icon?: 'primary' | 'success' | 'error' | 'warning' | 'default' | 'loading'
  /** 跳转的参数 */
  params?: Object
  /** 展示时间，单位ms */
  duration?: number
  /** 执行完后的回调函数 */
  complete?: Function
}
