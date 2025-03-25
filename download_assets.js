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
    // SVG文件（已下载）
    // {
    //     url: 'https://big.dk/assets/svg/cursor/arrow_left_small.svg',
    //     dest: 'public/images/arrow_left_small.svg'
    // },
    // ... 其他SVG文件 ...

    // CSS文件
    {
        url: 'https://big.dk/build/css/bundle.css',
        dest: 'build/css/bundle.css'
    },

    // JavaScript文件
    {
        url: 'https://big.dk/js/main.js',
        dest: 'public/js/main.js'
    },
    {
        url: 'https://big.dk/js/script.js',
        dest: 'public/js/script.js'
    },
    {
        url: 'https://big.dk/js/content.js',
        dest: 'public/js/content.js'
    },
    {
        url: 'https://big.dk/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',
        dest: 'cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js'
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