import { UserConfig } from 'vite';
import { resolve } from 'path';
import uni from '@dcloudio/vite-plugin-uni';
import AutoImport from 'unplugin-auto-import/vite';

const { GitRevisionPlugin } = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin();

export default (): UserConfig => {
    return {
        base: './',
        // 设置路径别名
        resolve: {
            alias: {
                '~': resolve('./src'),
                '@': resolve('./src'),
            },
            extensions: ['.js', '.json', '.ts', '.vue'], // 使用路径别名时想要省略的后缀名，可以自己 增减
        },
        // 自定义全局变量
        define: {
            'process.env': {
                BRANCH: gitRevisionPlugin?.branch(),
            },
        },
        // 构建配置
        build: {
            outDir: 'dist',
            chunkSizeWarningLimit: 1500,
            rollupOptions: {
                onLog: (__, log, ____) => {
                    if (log?.code === 'EMPTY_BUNDLE') {
                        return;
                    }
                },
                output: {
                    entryFileNames: `assets/[name].${new Date().getTime()}.js`,
                    chunkFileNames: `assets/[name].${new Date().getTime()}.js`,
                    assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
                    compact: true,
                    // manualChunks: {
                    //     vue: ['vue', 'vue-router', 'vuex'],
                    //     echarts: ['echarts'],
                    // },
                },
            },
        },
        // 插件
        plugins: [
            uni(),
            AutoImport({
                imports: ['vue', 'uni-app', 'pinia'],
                dts: 'src/auto-imports.d.ts',
                eslintrc: {
                    enabled: true,
                    globalsPropValue: true,
                },
            }),
        ],
    };
};
