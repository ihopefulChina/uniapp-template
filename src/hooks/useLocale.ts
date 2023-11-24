/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-21 11:16:10
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-24 09:12:27
 * @FilePath: /uniapp_template/src/hooks/useLocale.ts
 * @Description: hooks - 简单的国际化
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
import { onLoad } from '@dcloudio/uni-app';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export function useLocale() {
    const { t, locale } = useI18n();

    /** 是否是中文 */
    const isZhCN = computed(() => locale.value === 'zh-Hans');
    /** 是否是英文 */
    const isEnUS = computed(() => locale.value === 'en');

    /** 切换语言 */
    const switchLocale = (lang: string) => {
        uni.setLocale(lang);
        uni.setStorageSync('language', lang);
        locale.value = lang;
    };

    onLoad(() => {
        uni.onLocaleChange((event) => {
            locale.value = event.locale ?? 'en';
        });
    });
    return {
        t,
        language: locale,
        isZhCN,
        isEnUS,
        switchLocale,
    };
}
