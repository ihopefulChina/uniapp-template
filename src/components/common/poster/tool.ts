// 保存 img 标签，会有内存泄漏的问题，不过海报没多少图片，不影响，图片很多的时候不推荐
const imgCache: { [key: string]: any } = {};
const multiple = 2;

export const getImageInfo = (url: string, canvas: any) =>
    new Promise<any>((resolve) => {
        const cache = imgCache[url];
        if (cache) {
            resolve(cache);
        } else if (/^http/g.test(url)) {
            uni.getImageInfo({
                src: url,
                success(res) {
                    const img = canvas.createImage();
                    img.src = res.path;
                    img.onload = () => {
                        const imgData = { ...res, img };
                        imgCache[url] = imgData;
                        resolve(imgData);
                    };
                },
                fail(err) {
                    // eslint-disable-next-line no-console
                    console.warn(`poster组件获取图片${url}失败`, err);
                },
            });
        } else {
            const img = canvas.createImage();
            img.src = url;
            img.onload = () => {
                const imgData = { img };
                imgCache[url] = imgData;
                resolve(imgData);
            };
        }
    });

export const getStyle = (() => {
    const multipleSize = (size?: number) => (size ? size * multiple : size);

    return (style: any) => ({
        ...style,
        width: multipleSize(style.width),
        height: multipleSize(style.height),
        left: multipleSize(style.left),
        top: multipleSize(style.top),
        fontSize: multipleSize(style.fontSize),
        lineHeight: multipleSize(style.lineHeight),
        borderRadius: Array.isArray(style.borderRadius) ? style.borderRadius.map((it: any) => multipleSize(it)) : multipleSize(style.borderRadius),
    });
})();

export const drawImage = (data: any, ctx: any, canvas: any) => {
    const { style, crop } = data;
    const { left, top } = style;
    let width = style.width;
    let height = style.height;
    const imgData = imgCache[data.value];

    const img = imgData.img;
    ctx.save();
    if (style.borderRadius) {
        const bdrs = style.borderRadius;
        const borderRadius = typeof bdrs === 'number' ? [bdrs, bdrs, bdrs, bdrs] : bdrs;
        ctx.beginPath();
        ctx.moveTo(left + borderRadius[0], top);
        ctx.arcTo(left + width, top, left + width, top + height, borderRadius[1]);
        ctx.arcTo(left + width, top + height, left, top + height, borderRadius[2]);
        ctx.arcTo(left, top + height, left, top, borderRadius[3]);
        ctx.arcTo(left, top, left + borderRadius[0], top, borderRadius[0]);
        ctx.clip();
    }

    if (crop) {
        if (imgData) {
            width = imgData.width || img?.naturalWidth || width;
            height = imgData.height || img?.naturalHeight || height;
        }
        const { width: w, height: h } = crop;
        const rateWidth = (w * height) / h; // 按比例算出来的宽度
        if (rateWidth >= width) {
            // 高度要切
            ctx.drawImage(img, 0, (height - (width * h) / w) / 2, width, (width * h) / w, style.left, style.top, style.width, style.height);
        } else {
            // 切宽度
            ctx.drawImage(img, (width - rateWidth) / 2, 0, rateWidth, height, style.left, style.top, style.width, style.height);
        }
    } else {
        ctx.drawImage(img, style.left, style.top, style.width, style.height);
    }

    ctx.restore();
};

export const drawRect = async (data: any, ctx: any, canvas: any) => {
    const { style } = data;
    const { left, top, width, height, backgroundColor, borderWidth, borderColor } = style;
    const bdrs = style.borderRadius;
    const borderRadius = typeof bdrs === 'number' ? [bdrs, bdrs, bdrs, bdrs] : bdrs;
    ctx.save();
    ctx.beginPath();

    if (backgroundColor) {
        ctx.fillStyle = backgroundColor;
    }

    if (borderRadius) {
        ctx.moveTo(left + borderRadius[0], top);
        ctx.arcTo(left + width, top, left + width, top + height, borderRadius[1]);
        ctx.arcTo(left + width, top + height, left, top + height, borderRadius[2]);
        ctx.arcTo(left, top + height, left, top, borderRadius[3]);
        ctx.arcTo(left, top, left + borderRadius[0], top, borderRadius[0]);
    } else {
        ctx.fillRect(left, top, width, height);
    }
    ctx.fill();

    if (borderWidth) {
        ctx.lineWidth = borderWidth;
        ctx.strokeStyle = borderColor || '#000000';
        ctx.stroke();
    }
    ctx.restore();
};
export const drawText = async (data: any, ctx: any, canvas: any) => {
    const { style, background } = data;

    ctx.font = `${style.fontWeight || 'normal'} ${style.fontSize || 12}px ${style.fontFamily || 'sans-serif'}`;
    const width = style.width || ctx.measureText(data.value !== undefined ? data.value.toString() : '').width;

    if (background) {
        const newBackground = { ...background };
        newBackground.style = { ...newBackground.style };
        newBackground.style.width += width;
        newBackground.style.left += style.left;
        newBackground.style.top += style.top;

        drawRect(newBackground, ctx, canvas);
    }

    ctx.textBaseline = style.baseLine || 'top';
    ctx.fillStyle = style.color || '#000000';
    ctx.textAlign = style.textAlign || 'left';

    if (style.width) {
        const result: any = breakLinesForCanvas(data.value, style.width, ctx);
        const lineHeight = style.lineHeight || (style.fontSize || 12) * 1.5;
        let top = style.top;
        if (style.textVelCenter && result.length) {
            top -= (result.length * lineHeight) / 2;
        }

        if (style.textOverflow === 'ellipsis' && result.length > 1) {
            // 文字太多，用一行显示
            const firstLine = result[0].replace(/.$/g, '...');
            ctx.fillText(firstLine, style.left, top);
        } else if (style.lineClamp && result.length > style.lineClamp) {
            // 多行剪切
            const res = result.slice(0, style.lineClamp);
            res[res.length - 1] = res[res.length - 1].replace(/.$/g, '...');
            res.forEach((line: any, index: number) => {
                ctx.fillText(line, style.left, top + lineHeight * index);
            });
        } else {
            result.forEach((line: any, index: number) => {
                ctx.fillText(line, style.left, top + lineHeight * index);
            });
        }
    } else {
        ctx.fillText(data.value === undefined ? '' : data.value, style.left, style.top);
    }
};

// 用二分法找出一行能够容纳的文字数
export const findBreakPoint = (text: string, width: number, ctx: any) => {
    let min = 0;
    let max = text.length - 1;

    while (min <= max) {
        const middle = Math.floor((min + max) / 2);
        const middleWidth = ctx.measureText(text.substr(0, middle)).width;
        const oneCharWiderThanMiddleWidth = ctx.measureText(text.substr(0, middle + 1)).width;
        if (middleWidth <= width && oneCharWiderThanMiddleWidth > width) {
            return middle;
        }
        if (middleWidth < width) {
            min = middle + 1;
        } else {
            max = middle - 1;
        }
    }

    return -1;
};

// 文本换行
export const breakLinesForCanvas = (value: string, width: number, ctx: any) => {
    const result: string[] = [];
    let text = value;
    let breakPoint = 0;

    while ((breakPoint = findBreakPoint(text, width, ctx)) !== -1) {
        result.push(text.substr(0, breakPoint));
        text = text.substr(breakPoint);
    }

    if (text) {
        result.push(text);
    }

    return result;
};
