const multiple = 2; //几倍图
/** 整数 */
const trunc = (nu: number) => {
    return Math.trunc(nu) * multiple;
};
/**
 * 获取剪接图片后缀
 *
 * @static
 * @param {{ width: number, height: number }} { width, height }
 * @returns
 * @memberof AliYun
 */
export const getResizeUrl = ({ width, height }: { width?: number; height?: number }) => {
    let url = '?x-oss-process=image/resize,m_fill';
    if (width) {
        url += `,w_${trunc(width)}`;
    }
    if (height) {
        url += `,h_${trunc(height)}`;
    }
    return url;
};

/**
 * 组装图片链接
 *
 * @param url
 * @param width
 * @param height
 */
export const assembleResizeUrl = (url: string, width: number, height: number) => {
    return url + getResizeUrl({ width, height });
};

/**
 * 获取视频第一帧图片
 *
 * @static
 * @param {{ width: number, height: number }} { width, height }
 * @returns
 * @memberof AliYun
 */
export const getVideoSnapshotUrl = ({ width, height }: { width?: number; height?: number }) => {
    let url = '?x-oss-process=video/snapshot,t_7000,f_jpg';

    if (width) {
        url += `,w_${trunc(width)}`;
    }
    if (height) {
        url += `,h_${trunc(height)}`;
    }
    return url;
};

export const isAudio = (path: string) => {
    const pathType = path.substring(path.lastIndexOf('.') + 1).toLowerCase();
    return /(opus|flac|webm|weba|wav|ogg|m4a|mp3|oga|mid|amr|aiff|wma|au|aac)/.test(pathType);
};

export const isVideo = (path: string) => {
    const pathType = path.substring(path.lastIndexOf('.') + 1).toLowerCase();
    return /(mp4|avi|wmv|mpg|mpeg|mov|rm|ram|swf|flv)/.test(pathType);
};

export const isImage = (path: string) => {
    const pathType = path.substring(path.lastIndexOf('.') + 1).toLowerCase();
    return /(xbm|tif|pjp|svgz|jpg|jpeg|ico|tiff|gif|svg|jfif|webp|png|bmp|pjpeg|avif|JPG|JPEG|PNG)/.test(pathType);
};

export const isPdf = (path: string) => {
    const pathType = path.substring(path.lastIndexOf('.') + 1).toLowerCase();
    return /(pdf|PDF)/.test(pathType);
};

export const isWord = (path: string) => {
    const pathType = path.substring(path.lastIndexOf('.') + 1).toLowerCase();
    return /(doc|docx)/.test(pathType);
};
