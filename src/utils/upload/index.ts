import { api } from '~/request';
import AliYunUni from './upload';

const { upload, uploadFile } = new AliYunUni({
    getOssToken: () => api['/wechat/api/oss/info_GET'](),
});

export { upload, uploadFile };
