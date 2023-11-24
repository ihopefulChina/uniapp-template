/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-19 11:27:44
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-09-19 11:29:57
 *  * @FilePath: /uniapp_template/src/hooks/useSetState.ts
 * @Description: hooks - 管理 object 类型 响应式 的 Hooks，支持解构赋值，更方便维护。
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
import { ref, Ref, unref, UnwrapRef, readonly, DeepReadonly, UnwrapNestedRefs } from 'vue';
import merge from 'lodash/merge';

type UseSetStateType<S> = S | (() => S) | Ref<S> | (() => Ref<S>);

export function useSetState<S extends Record<string, any>>(
    initialState: UseSetStateType<S>
): [DeepReadonly<UnwrapNestedRefs<[S] extends [Ref<any>] ? S : Ref<UnwrapRef<S>>>>, (patch: Record<string, any>, cover?: boolean) => void] {
    const getInitialState = () => unref(initialState);

    const state = ref<S>(getInitialState() as S);

    const setMergeState = (patch: Record<string, any>, cover = false) => {
        const newState = unref(patch);
        // @ts-ignore
        if (cover) state.value = newState;
        else state.value = newState ? merge(state.value, newState) : state.value;
    };
    // @ts-ignore
    return [readonly(state), setMergeState];
}
