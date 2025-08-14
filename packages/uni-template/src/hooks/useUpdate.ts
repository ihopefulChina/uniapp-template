import { readonly, ref } from 'vue'

export default function useUpdate() {
  const update = ref({})
  const setUpdate = () => {
    update.value = { ...update.value }
  }
  return {
    update: readonly(update),
    setUpdate
  }
}
