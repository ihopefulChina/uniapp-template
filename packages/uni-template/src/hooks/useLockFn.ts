import { ref } from 'vue'

type ArgsAny = any[]

type Fn = (...args: ArgsAny) => Promise<any>

export const useLockFn = (fn: Fn, delay = 600) => {
  const lock = ref(false)
  const lastDate = ref()

  return async (...args: ArgsAny) => {
    if (lock.value) return
    const nowDate = new Date()

    if (lastDate?.value && nowDate.getTime() - lastDate?.value.getTime() <= delay) {
      return
    }
    lastDate.value = nowDate

    lock.value = true
    try {
      const ret = await fn(...args)
      lock.value = false
      return ret
    } catch (error) {
      lock.value = false
      throw error
    }
  }
}
