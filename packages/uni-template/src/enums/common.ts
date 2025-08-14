import { converEnmuMap, converEnumArray } from './utils'

/**   'none' | 'wifi' | '2g' | '3g' | '4g' | '5g' | 'ethernet' | 'unknown' */
export enum NetworkStatus {
  NONE = 'none',
  WIFI = 'wifi',
  Two_G = '2g',
  Three_G = '3g',
  Four_G = '4g',
  Five_G = '5g',
  Ethernet = 'ethernet',
  Unknown = 'unknown'
}

/** 性别 */
export enum Gender {
  /** 男 */
  MALE,
  /** 女 */
  FEMALE
}

const AGender = [
  [Gender.MALE, '男'],
  [Gender.FEMALE, '女']
]

export const MGender = converEnumArray(AGender)
export const OGender = converEnmuMap(AGender)
