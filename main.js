'use strict';

const electron = require('electron')
const app = electron.app
const globalShortcut = electron.globalShortcut
const os = require('os')
const path = require('path')
const config = require(path.join(__dirname, 'package.json'))
const BrowserWindow = electron.BrowserWindow

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
    	title: config.productName,
        icon: __dirname + '/build/logo.ico',
        webPreferences: {
      	nodeIntegration: true,
	     defaultEncoding: 'UTF-8'
	    }
    });

	mainWindow.loadURL(`file://${__dirname}/index.html`)
    // mainWindow.setMenu(null)
    mainWindow.maximize()

    let platform = os.platform()
    if (platform === 'darwin') {
        globalShortcut.register('Command+Option+I', () => {
            mainWindow.webContents.openDevTools()
        })
    } else if (platform === 'linux' || platform === 'win32') {
        globalShortcut.register('Control+Shift+I', () => {
            mainWindow.webContents.openDevTools()
        })
    }

    mainWindow.once('ready-to-show', () => {
        // mainWindow.setMenu(null)
        mainWindow.show()
    })

    mainWindow.onbeforeunload = (e) => {
        // Prevent Command-R from unloading the window contents.
        e.returnValue = false
    }

    mainWindow.on('closed', function() {
        mainWindow = null
    })

});