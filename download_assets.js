const https = require('https');
const fs = require('fs');
const path = require('path');

const downloadFile = (url, destination) => {
    return new Promise((resolve, reject) => {
        // 确保目标目录存在
        const dir = path.dirname(destination);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const file = fs.createWriteStream(destination);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`下载完成: ${destination}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(destination, () => {});
            reject(err);
        });
    });
};

// 需要下载的资源列表
const resources = [
    // SVG文件
    {
        url: 'https://big.dk/assets/svg/cursor/arrow_left_small.svg',
        dest: 'assets/svg/cursor/arrow_left_small.svg'
    },
    {
        url: 'https://big.dk/assets/svg/cursor/arrow_right_small.svg',
        dest: 'assets/svg/cursor/arrow_right_small.svg'
    },
    {
        url: 'https://big.dk/assets/svg/cursor/arrow_left_white.svg',
        dest: 'assets/svg/cursor/arrow_left_white.svg'
    },
    {
        url: 'https://big.dk/assets/svg/cursor/arrow_right_white.svg',
        dest: 'assets/svg/cursor/arrow_right_white.svg'
    },
    {
        url: 'https://big.dk/assets/svg/cursor/pause.svg',
        dest: 'assets/svg/cursor/pause.svg'
    },
    {
        url: 'https://big.dk/assets/svg/cursor/play.svg',
        dest: 'assets/svg/cursor/play.svg'
    },

    // CSS文件
    {
        url: 'https://big.dk/build/css/bundle.css',
        dest: 'build/css/bundle.css'
    },

    // JavaScript文件
    {
        url: 'https://big.dk/build/js/main.js',
        dest: 'build/js/main.js'
    },

    // 字体文件
    {
        url: 'https://big.dk/assets/fonts/everett-regular-webfont.woff2',
        dest: 'assets/fonts/everett-regular-webfont.woff2'
    },
    {
        url: 'https://big.dk/assets/fonts/everett-regular-webfont.woff',
        dest: 'assets/fonts/everett-regular-webfont.woff'
    },

    // Favicon
    {
        url: 'https://big.dk/favicon.ico',
        dest: 'favicon.ico'
    }
];

// 下载所有资源
async function downloadAll() {
    for (const resource of resources) {
        try {
            await downloadFile(resource.url, resource.dest);
        } catch (error) {
            console.error(`下载失败 ${resource.url}:`, error);
        }
    }
}

downloadAll(); 