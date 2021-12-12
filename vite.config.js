import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import pxtoviewport from 'postcss-px-to-viewport';
import { defineConfig } from 'vite';
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3001,
    },
    define: {
        global: {},
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, './src'),
            '@': path.resolve(__dirname, './src'),
            '@assets': path.join(__dirname, 'src/assets'),
        },
    },
    plugins: [
        vue(),
        styleImport({
            libs: [
                {
                    libraryName: 'vant',
                    esModule: true,
                    resolveStyle: (name) =>
                        path.resolve(
                            __dirname,
                            `./node_modules/vant/es/${name}/style/less.js`
                        ),
                },
            ],
        }),
    ],
    css: {
        preprocessorOptions: {
            //配置less主题
            less: {
                modifyVars: {
                    // 直接覆盖变量
                    // 'text-color': 'red',
                    // 'border-color': 'red',
                    // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                    // hack: `true; @import  "${path.resolve(
                    //     __dirname,
                    //     'src/theme/var.less'
                    // )}";`,
                    // hack: `true; @import "${path.resolve(
                    //     './src/theme/var.less'
                    // )}";`,
                    hack: `true;  @import "src/theme/var.less";`,
                    // hack: `true; @import "${path.join(
                    //     __dirname,
                    //     './src/theme/var.less'
                    // )}";`,
                },
                javascriptEnabled: true,
            },
        },
        //配置路vw vm适配
        postcss: {
            plugins: [
                autoprefixer(),
                pxtoviewport({
                    viewportWidth: 500,
                }),
            ],
        },
    },
});
