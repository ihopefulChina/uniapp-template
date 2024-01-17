import { computed, onMounted, ref } from 'vue';
import { useLockFn } from '~/hooks';
import { removeRepetition } from '~/utils';

export enum MMPullToRefreshState {
    /**
     * 普通状态
     */
    none,
    /**
     * 刷新中
     */
    refreshing,
    /**
     * 添加中
     */
    pushing,
}

export interface IMMPullRefreshHookRefreshParams {
    /**
     * 刷新时是否清空旧数组
     *
     * @default false
     */
    clearList?: boolean;
}

interface IUseMMPullToRefreshOption<T> {
    /** 默认数据 */
    defaultData?: T[];
    /** 默认初始插入数据 */
    defaultInsertData?: T[];
    dataKey?: string;
    /** 初始是否发出请求 */
    initRequest?: boolean;

    /** 获取数据 */
    getData: (data: Record<string, any> & { pageNum: number }) => Promise<{ data?: { list?: T[]; isLastPage?: boolean; total?: number } }>;

    /** 数据格式化 */
    dataFormat?(data: T[]): any[];

    /** 获取数据完成回调，返回本次数据 */
    onAfterLoad?(data: T[], currentParams: Record<string, any> & { pageNum: number }, total: number, isLastPage: boolean): void;
    /** 获取数据完成回调，返回当前list、currentParams */
    customSpliceList?(list: T[], currentParams: Record<string, any> & { pageNum: number }): void;
}

export default function useMMPullToRefresh<T>(config: IUseMMPullToRefreshOption<T>) {
    const { defaultData = [], dataKey = 'id' } = config;
    const list = ref<any[]>(defaultData);
    const total = ref<number>(0);
    const noMore = ref<boolean>(false);

    const pullToRefreshState = ref<MMPullToRefreshState>(MMPullToRefreshState.refreshing);
    const requestId = ref<number>(0);
    const pageNum = ref<number>(0);

    const getListData = useLockFn(async (num?: number) => {
        if (num !== undefined) {
            pageNum.value = num;
        } else {
            pageNum.value++;
        }

        if (pageNum.value === 1) {
            pullToRefreshState.value = MMPullToRefreshState.refreshing;
            // setData([]);
        } else {
            pullToRefreshState.value = MMPullToRefreshState.pushing;
        }

        try {
            const currentRequestId = ++requestId.value;
            const currentParams = { pageNum: pageNum.value, pageSize: 10 };

            const { data = {} } = await config.getData(currentParams);
            if (currentRequestId !== requestId.value) {
                return;
            }
            // eslint-disable-next-line prefer-const
            let { list: dataList = [], isLastPage } = data;

            dataList = config.dataFormat ? config.dataFormat(dataList) : dataList;

            if (config.onAfterLoad) {
                config.onAfterLoad(dataList, currentParams, data?.total || -1, !!isLastPage);
            }

            if (pageNum.value === 1) {
                list.value = (config.defaultInsertData ? [...config.defaultInsertData, ...dataList] : dataList) || [];
            } else {
                dataList = removeRepetition((list.value || [])?.concat(dataList), dataKey);
                list.value = dataList;
            }

            if (config.customSpliceList) {
                config.customSpliceList(dataList, currentParams);
            }
            total.value = data?.total || -1;
            noMore.value = isLastPage !== undefined ? !!isLastPage : data?.total !== -1 ? dataList?.length >= (data?.total || -1) : true;
        } catch (error) {
            if (pageNum.value === 1) {
                list.value = [];
            }
        }
        pullToRefreshState.value = MMPullToRefreshState.none;
    });

    /**
     * 更新某条数据的值
     *
     * @param updatedata
     */
    function updateById(updatedata: T, key = 'id') {
        const newList = [...list.value]?.map((value) => {
            if ((value as any)[key] === (updatedata as any)[key]) {
                /** 改成替换更新 */
                return { ...updatedata };
            }
            return { ...value };
        });

        list.value = [...newList];
    }

    /**
     * 删除某条数据的值
     *
     * @param id
     */
    function deleteById(id: number | string, key = 'id') {
        list.value = list.value?.filter((item) => `${item[key]}` !== `${id}`);
    }

    /**
     * 更新列表中的数据
     *
     * @param {T} data 需要更新的数据
     * @param {(string | ((item: T, index: number) => boolean))} compare 比对逻辑
     */
    function updateLisItem(data: T, compare: string | ((item: T, index: number) => boolean)) {
        const isString = typeof compare === 'string';
        list.value = list.value?.map((value, index) => {
            if (isString) {
                return (value as any)[compare] === (data as any)[compare] ? { ...value, ...data } : value;
            }
            return compare(value, index) ? { ...value, ...data } : value;
        });
    }

    onMounted(() => {
        if (config?.initRequest !== false) {
            getListData();
        }
    });

    function onRefresh(refreshParams?: IMMPullRefreshHookRefreshParams) {
        if (refreshParams?.clearList) {
            list.value = [];
        }
        getListData(1);
    }

    const isEmpty = computed(() => list?.value.length === 0 && pullToRefreshState?.value === MMPullToRefreshState.none);

    return {
        list,
        setList: list.value,
        total,
        updateById,
        pageNum,
        updateLisItem,
        deleteByIndex: (index: number) => (list.value = list.value?.filter((__, idx) => idx !== index)),
        /** 根据传入的标识删除对应的数据，传入标识值和标识字段，默认id */
        deleteById,
        state: pullToRefreshState,
        noMore,
        onRefresh,
        isEmpty,
        onReachBottom: () => getListData(),
    };
}
