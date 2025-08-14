import { api } from '~/request'
import AliYunUni from './upload'

const { upload, uploadFile } = new AliYunUni({
  getOssToken: () => api.get['/api/oss/info']()
})

export { upload, uploadFile }
