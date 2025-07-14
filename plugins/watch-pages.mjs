import chokidar from 'chokidar';
import { spawn } from 'child_process';
import path from 'path';

const SCRIPT_PATH = path.resolve('./plugins/getRoute.mjs'); // ← 你的脚本路径
const WATCH_FILE = path.resolve('./src/pages.json');

function runScript() {
    const proc = spawn('node', [SCRIPT_PATH], {
        stdio: 'inherit',
        shell: true,
    });

    proc.on('close', (code) => {
        if (code !== 0) {
            console.error(`❌ 脚本执行失败，退出码：${code}`);
        }
    });
}

console.log(`👀 正在监听 ${WATCH_FILE}...`);
runScript(); // 👉 启动监听前先执行一次

chokidar.watch(WATCH_FILE, { ignoreInitial: true }).on('change', () => {
    console.log(`🔄 检测到 ${WATCH_FILE} 变更，重新生成路由...`);
    runScript();
});
