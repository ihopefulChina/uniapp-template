/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-10-24 11:22:49
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 13:02:28
 * @FilePath: /uniapp_template/src/hooks/useCountdown.ts
 * @Description: hooks 倒计时
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */

import { onUnmounted, ref } from 'vue';

export function useCountdown(countdown: number, disabled?: boolean) {
    const count = ref<number>(countdown);
    const showCount = ref<boolean>(false);
    let cdST: any;

    const onCountdown = () => {
        showCount.value = true;
        cdST = setTimeout(() => {
            if (!disabled) {
                count.value = count.value - 1;
                if (count.value > 0) {
                    onCountdown();
                } else if (count.value === 0) {
                    onRestCountdown();
                }
            }
        }, 1000);
    };

    const onRestCountdown = () => {
        count.value = countdown;
        showCount.value = false;
        clearTimeout(cdST);
    };

    onUnmounted(() => {
        onRestCountdown();
    });

    return { count, showCount, onCountdown, onRestCountdown };
}
