import { Ref, ref } from 'vue'

/** 表单服务 */
export function useFormService<T>({ initFormData }: { initFormData?: T }) {
  /** 表单参数 */
  const params = ref<T>(initFormData ? { ...initFormData } : ({} as T)) as Ref<T>

  /** 更新表单数据 */
  const updateInputValue = (data: Partial<T>) => {
    params.value = {
      ...params.value,
      ...data
    }
  }

  /** 重置表单 */
  const resetForm = () => {
    params.value = initFormData as T
  }

  return {
    /** 表单参数 */
    params,
    /** 更新表单数据 */
    updateInputValue,
    /** 重置表单 */
    resetForm
  }
}
