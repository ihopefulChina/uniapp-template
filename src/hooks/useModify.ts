import { onShow } from '@dcloudio/uni-app';
import { nextTick } from 'vue';

/**
 * 从详情页面返回列表页面后，更新或者删除列表中的数据
 * @param key ui.getStorageSync 中能获取到的数据，值是对象将会更新对应数据，值是字符串或者数值将会删除对应数据
 * @param setList 更新列表中的数据
 */
export function useModify(key: string, setList: any) {
    onShow(async () => {
        const item = uni.getStorageSync(key);
        await setList(item);
        nextTick(() => {
            uni.removeStorageSync(key);
        });
    });
}
