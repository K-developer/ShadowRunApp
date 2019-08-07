var {app, BrowserWindow, webContents} = require("electron");
const path = require('path');
const url = require('url');

var mainWindow = null;

var init = function() {
  var options = {
    width: 1200,
    height: 800,
  };

  mainWindow = new BrowserWindow(options);
  mainWindow.focus();


  mainWindow.loadURL(url.format({
    pathname: 'index.html',
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
};

app.on('browser-window-created',function(e,window) {
  window.setMenu(null);
});

app.on('ready', function() {
  init();
});