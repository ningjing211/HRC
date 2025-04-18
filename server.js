const express = require('express');
const path = require('path');
const app = express();
const port = 3002;

// 设置MIME类型
app.use((req, res, next) => {
    if (req.url.endsWith('.css')) {
        res.type('text/css');
    } else if (req.url.endsWith('.js')) {
        res.type('application/javascript');
    } else if (req.url.endsWith('.svg')) {
        res.type('image/svg+xml');
    } else if (req.url.endsWith('.woff')) {
        res.type('font/woff');
    } else if (req.url.endsWith('.woff2')) {
        res.type('font/woff2');
    } else if (req.url.endsWith('.png')) {
        res.type('image/png');
    }
    next();
});

// 设置静态文件目录
app.use(express.static(__dirname));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/cdn-cgi', express.static(path.join(__dirname, 'cdn-cgi')));

// 路由处理
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 处理带分号的路由
app.get('/;', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 处理项目路由
app.get('/projects/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 404处理
app.use((req, res) => {
    console.log(`404: ${req.url}`);
    res.status(404).send('File not found');
});

// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
}); 