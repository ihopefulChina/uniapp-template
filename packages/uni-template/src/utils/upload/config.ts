export interface IUplodaOptions {
  /**
   * 自定义上传文件名称
   * 上传文件列表中的每个文件都会调用此方法。可以自定义上传文件的格式名称
   * @description 有时候你需要对上传文件的名称、路径做一些额外的增强处理（添加目录路径、添加修改文件名称等）
   * @example (fileName) => `temp/admin/${fileName}-${Date.now()}`
   */
  setFileName?: (fileName: string) => string
}
