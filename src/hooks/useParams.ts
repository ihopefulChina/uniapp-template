/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-01-18 17:18:45
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 13:03:19
 * @FilePath: /uniapp_template/src/hooks/useParams.ts
 * @Description: 用于拿页面的参数hooks
 *
 * Copyright (c) 2023 by huangpengfei 784667332@qq.com, All Rights Reserved.
 */
import { onLoad } from '@dcloudio/uni-app';
import { readonly, ref } from 'vue';

export function useParams() {
    const pageQuery = ref<Record<string, any> | undefined>(undefined);

    onLoad((params) => {
        const result = { ...params };
        const scene = decodeURIComponent(params?.scene || '');
        const sceneList = scene.split('$');
        for (const item of sceneList) {
            if (item.includes('#')) {
                const list = item.split('#');
                result[list[0] || ''] = list[1];
                if (list[0] === 'iId') {
                    result.inviterId = list[1];
                }
                if (list[0] === 'cId') {
                    result.channelId = list[1];
                }
            }
        }
        pageQuery.value = result;
    });

    return readonly(pageQuery);
}
