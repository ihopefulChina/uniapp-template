import { onLoad } from '@dcloudio/uni-app'
import { onUnmounted, ref } from 'vue'
import { NetworkStatus } from '~/enums/common'

export function useNetworkStatus() {
  const networkType = ref<NetworkStatus>()
  onLoad(() => {
    uni.getNetworkType({
      success: (res) => {
        networkType.value = res.networkType as any
      }
    })
    uni.onNetworkStatusChange((res: UniNamespace.OnNetworkStatusChangeSuccess) => {
      networkType.value = res.networkType as any
    })
  })
  onUnmounted(() => {
    uni.offNetworkStatusChange(() => {})
  })

  return { networkType }
}
