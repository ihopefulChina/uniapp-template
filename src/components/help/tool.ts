// 复制 token，正式版不可用
export const copyToken = () => {
    const token = uni.getStorageSync('token');

    uni.setClipboardData({
        data: token,
        success() {
            uni.showToast({ title: 'token 已复制，测试专用', icon: 'none' });
        },
    });
};
// 清除 token，正式版不可用
export const cleanToken = () => {
    uni.clearStorageSync();
    uni.showToast({ title: 'token 已清除', icon: 'none' });
};
