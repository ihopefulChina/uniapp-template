export enum MMPosterType {
  Text,
  List,
  Image,
  Rect
}

export interface MMPosterRectData {
  type: MMPosterType.Rect
  style: {
    width: number
    height: number
    left: number
    top: number
    backgroundColor?: string
    borderRadius?: number
    borderWidth?: number
    borderColor?: string
  }
}

export interface MMPosterTextData {
  type: MMPosterType.Text
  value: string
  style: {
    width?: number
    lineHeight?: number
    left: number
    top: number
    fontSize?: number
    color?: string
    fontWeight?: 'normal' | 'bold'
    fontFamily?: string
    fontStyle?: string
    textOverflow?: 'initial' | 'ellipsis'
    lineClamp?: number
    textAlign?: 'left' | 'right' | 'center'
    baseLine?: 'top' | 'middle' | 'bottom' | 'normal'
    textVelCenter?: boolean
  }
  background?: MMPosterRectData
}

export interface MMPosterListData {
  type: MMPosterType.List
  value: MMPosterData[]
  style: {
    left: number
    top: number
    color?: string
    fontSize?: number
    fontWeight?: 'normal' | 'bold'
  }
}

export interface MMPosterImageData {
  type: MMPosterType.Image
  value: string
  crop?: {
    // 按比例裁剪， width: height  宽高比
    width: number
    height: number
  }
  style: {
    width: number
    height: number
    left: number
    top: number
    borderRadius?: number | number[]
  }
}

export type MMPosterData =
  | MMPosterTextData
  | MMPosterImageData
  | MMPosterListData
  | MMPosterRectData
export type MMPosterDataArray = MMPosterData[]

type TypeGenImageFunc = (
  src: string,
  top: number,
  left: number,
  width: number,
  height: number,
  opts?: { [key: string]: any },
  crop?: any
) => MMPosterData
// eslint-disable-next-line max-params
export const genImage: TypeGenImageFunc = (
  src,
  top,
  left,
  width,
  height,
  opts = {},
  crop?: any
) => ({
  type: MMPosterType.Image,
  value: src,
  crop,
  style: {
    top,
    left,
    width,
    height,
    ...opts
  }
})

type TypeGenRectFunc = (
  top: number,
  left: number,
  width: number,
  height: number,
  backgroundColor: string,
  opts?: { [key: string]: any }
) => MMPosterData
// eslint-disable-next-line max-params
export const genRect: TypeGenRectFunc = (top, left, width, height, backgroundColor, opts = {}) => ({
  type: MMPosterType.Rect,
  style: {
    top,
    left,
    width,
    height,
    backgroundColor,
    ...opts
  }
})

type TypeGenTextFunc = (
  value: string,
  top: number,
  left: number,
  fontSize: number,
  color: string,
  isBold?: boolean,
  opts?: { [key: string]: any }
) => MMPosterData
// eslint-disable-next-line max-params
export const genText: TypeGenTextFunc = (
  value,
  top,
  left,
  fontSize,
  color,
  isBold = false,
  opts = {}
) => ({
  type: MMPosterType.Text,
  value,
  style: {
    top,
    left,
    fontSize,
    color,
    fontWeight: isBold ? 'bold' : 'normal',
    ...opts
  }
})
