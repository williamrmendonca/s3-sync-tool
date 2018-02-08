const electron = require('electron');  
const app = electron.app;  
const BrowserWindow = electron.BrowserWindow;
const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
});

// Keep reference of main window because of GC
var mainWindow = null;

// Quit when all windows are closed
app.on('window-all-closed', function() {  
    app.quit();
});

// When application is ready, create application window
app.on('ready', function() {

    // Create main window
    // Other options available at:
    // http://electron.atom.io/docs/latest/api/browser-window/#new-browserwindow-options
    mainWindow = new BrowserWindow({
        name: "S3 Sync Tool",
        width: 800,
        height: 600,
        toolbar: false
    });

    // Target HTML file which will be opened in window
    mainWindow.loadURL(startUrl);

    // Uncomment to use Chrome developer tools
    // mainWindow.webContents.openDevTools({detach:true});

    // Cleanup when window is closed
    mainWindow.on('closed', function() {
        mainWindow = null;
		});

});