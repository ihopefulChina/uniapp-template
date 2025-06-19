import { createSSRApp } from 'vue';
import { initRequest } from '~/components/request/utils';
import { setupStore } from '~/state';
import App from './App.vue';

export function createApp() {
    const app = createSSRApp(App);

    initRequest();
    setupStore(app);

    return {
        app,
    };
}
