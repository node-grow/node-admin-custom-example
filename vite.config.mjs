import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    plugins: [
        vue(),
    ],

    define: {
        'process.env': {}
    },

    build: {
        target: "modules",
        copyPublicDir: false,
        emptyOutDir: false,
        minify: true,
        // outDir: path.resolve(__dirname, './dist'),
        lib: {
            entry: path.resolve(__dirname, './src/TestComponent/index.ts'),
            name: 'TestComponent',
            fileName: 'test-component',
            formats: ['umd']
        }
    },
});
