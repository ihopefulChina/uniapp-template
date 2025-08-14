import type { Ref } from 'vue'
import useToggle from './useToggle'

export interface UseBooleanActions {
  /**
   *  Set state to `true`
   * @returns void
   */
  setTrue: () => void

  /**
   *  Set state to `false`
   * @returns void
   */
  setFalse: () => void

  /**
   * Set state
   * @param value boolean
   * @returns void
   */
  set: (value: boolean) => void

  /**
   * Toggle state
   * @returns void
   */
  toggle: () => void
}

export type UseBooleanResult = [Readonly<Ref<boolean>>, UseBooleanActions]

export function useBoolean(defaultValue = false): UseBooleanResult {
  const [state, { set, toggle }] = useToggle(defaultValue)
  const actions = {
    set: (blo: boolean) => set(!!blo),
    setTrue: () => set(true),
    setFalse: () => set(false),
    toggle
  }
  return [state, actions]
}
