const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    window = new BrowserWindow({
        width: 800,
        height: 600,
    });
    window.setMenu(null);
    window.loadFile('index.html');
});