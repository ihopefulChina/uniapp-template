import { ESurveyStatus } from '~/enums/EIndustrialSurvey';
import { EOnShelvesStatus } from '~/enums/EOnShelves';
import { EStatusNormal } from '~/enums/common';
import { EMaintenanceStatus } from '~/enums/EMaintenance';
import { EApprovalStatus } from '~/enums/EApproval';
import { EInStockStatus, EInventoryCheckStatus, EInventoryResultType, EStockStatus, ETransferOrderStatus } from '~/enums/EWarehouse';

/**
 *  上架工单状态颜色
 */
export const getStatusOnShelvesColor = (state: EOnShelvesStatus) => {
    switch (state) {
        case EOnShelvesStatus.IN_SURVEY:
            return '#f4a831';
        case EOnShelvesStatus.BACK:
            return '#a3b3cc';
        case EOnShelvesStatus.WAIT_UPDATE:
            return '#a3b3cc';
        case EOnShelvesStatus.IN_APPOINTMENT:
            return '#497cd8';
        case EOnShelvesStatus.IN_SIGN:
            return '#89d539';
        case EOnShelvesStatus.IN_UP:
            return '#89d539';
        case EOnShelvesStatus.IN_AUDIT:
            return '#f33c2a';
        case EOnShelvesStatus.COMPLETED:
            return '#a3b3cc';
        case EOnShelvesStatus.CLOSED:
            return '#a3b3cc';
        default:
            return '';
    }
};
/** 工勘状态颜色 */
export const getStatusSurveyColor = (state: ESurveyStatus) => {
    switch (state) {
        case ESurveyStatus.INIT:
            return '#f4a831';
        case ESurveyStatus.COMPLETED:
            return '#a3b3cc';
        case ESurveyStatus.CLOSED:
            return '#a3b3cc';

        default:
            return '';
    }
};

/** 上架状态颜色 */
export const getStatusShelfColor = (state: EStatusNormal) => {
    switch (state) {
        case EStatusNormal.NORMAL:
            return '#89D539';
        case EStatusNormal.EXCEPTION:
            return '#F33C2A';
        default:
            return '#a3b3cc';
    }
};

/** 备件维修工单状态颜色 */
export const getStatusRepairColor = (state: EMaintenanceStatus) => {
    switch (state) {
        case EMaintenanceStatus.WAIT_CLAIM:
            return '#F4A831';

        case EMaintenanceStatus.WAIT_RECEIVE:
            return '#497CD8';

        case EMaintenanceStatus.WAIT_SERVICE:
            return '#89D539';

        case EMaintenanceStatus.COMPLETED_WAIT_RETURN:
            return '#a3b3cc';

        case EMaintenanceStatus.COMPLETED_RETURNED:
            return '#a3b3cc';

        default:
            return '#a3b3cc';
    }
};

/** 请假调休状态类型 颜色 */
export const getStatusLeaveColor = (state: EApprovalStatus) => {
    switch (state) {
        case EApprovalStatus.WAIT_APPROVAL:
            return '#F4A831';
        case EApprovalStatus.APPROVAL:
            return '#35BE76';
        default:
            return '#8F909F';
    }
};

/** 出库工单状态颜色 */
export const getStatusOutStorageColor = (state: EStockStatus) => {
    switch (state) {
        case EStockStatus.WAIT_OUT:
            return '#F4A831';
        case EStockStatus.OUT:
            return '#a3b3cc';
        default:
            return '#a3b3cc';
    }
};

/** 入库工单状态颜色 */
export const getStatusInStorageColor = (state: EInStockStatus) => {
    switch (state) {
        case EInStockStatus.WAIT_IN_STOCK:
            return '#F4A831';
        case EInStockStatus.IN_STOCK:
            return '#a3b3cc';
        default:
            return '#a3b3cc';
    }
};
/** 调拨工单状态颜色 */
export const getStatusAllocationColor = (state: ETransferOrderStatus) => {
    switch (state) {
        case ETransferOrderStatus.WAIT_OUT:
            return '#F4A831';

        case ETransferOrderStatus.LOGISTICS:
            return '#497CD8';

        case ETransferOrderStatus.WAIT_IN:
            return '#89D539';

        case ETransferOrderStatus.FINISHED:
            return '#a3b3cc';

        default:
            return '#a3b3cc';
    }
};
/** 盘点工单状态颜色 */
export const inventoryCheckStatusColor = (state: EInventoryCheckStatus) => {
    switch (state) {
        case EInventoryCheckStatus.WAIT_CHECK:
            return '#F4A831';

        case EInventoryCheckStatus.CHECKED:
            return '#a3b3cc';

        default:
            return '#a3b3cc';
    }
};

/** 实盘状态颜色 */
export const realInventoryStatusColor = (state: EInventoryResultType) => {
    switch (state) {
        case EInventoryResultType.NORMAL:
            return '#333333';
        case EInventoryResultType.PROFIT:
            return '#F33C2A';
        case EInventoryResultType.LOSS:
            return '#89D539';
        default:
            return '#333333';
    }
};

/**
 * localstorage指定key
 * 知识库
 * 首页
 * 仓库
 */
export enum ELocalStoreKey {
    /** 知识库搜索词 */
    KnowledgeBaseSearchEnterHistory = 'knowledgeBaseSearchEnterHistory',
    /** 首页搜索词 */
    HomeSearchEnterHistory = 'homeSearchEnterHistory',
    /** 仓库搜索词 */
    StoreHouseSearchEnterHistory = 'storeHouseSearchEnterHistory',
}

/**
 * 存入历史搜索词
 */
export function saveHistoryWord(keyword?: string, storageKey = ELocalStoreKey.KnowledgeBaseSearchEnterHistory as ELocalStoreKey) {
    if (keyword) {
        keyword = keyword.trim();
        const storageWords: string[] = uni.getStorageSync(storageKey);
        if (Array.isArray(storageWords)) {
            const mergeWords = [keyword, ...storageWords.filter((item) => item !== keyword)].slice(0, 8);
            uni.setStorageSync(storageKey, mergeWords);
        } else {
            uni.setStorageSync(storageKey, [keyword]);
        }
    }
}
