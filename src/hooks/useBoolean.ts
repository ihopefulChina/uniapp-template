/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-21 11:16:10
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-20 11:13:21
 * @FilePath: /uniapp_template/src/hooks/useBoolean.ts
 * @Description: hooks - boolean 切换
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
import type { Ref } from 'vue';
import useToggle from './useToggle';

export interface UseBooleanActions {
    /**
     *  Set state to `true`
     * @returns void
     */
    setTrue: () => void;

    /**
     *  Set state to `false`
     * @returns void
     */
    setFalse: () => void;

    /**
     * Set state
     * @param value boolean
     * @returns void
     */
    set: (value: boolean) => void;

    /**
     * Toggle state
     * @returns void
     */
    toggle: () => void;
}

export type UseBooleanResult = [Readonly<Ref<boolean>>, UseBooleanActions];

export function useBoolean(defaultValue = false): UseBooleanResult {
    const [state, { set, toggle }] = useToggle(defaultValue);
    const actions = {
        set: (v: boolean) => set(!!v),
        setTrue: () => set(true),
        setFalse: () => set(false),
        toggle,
    };
    return [state, actions];
}
