var addon = null;

// Load the precompiled binary for windows.
if (process.platform == 'win32') {
  addon = require('./build/Release/addon');
} else {
  throw new Error('SetWindowPos requires windows os');
}

addon.HWND_BOTTOM = 1n;
addon.HWND_NOTOPMOST = -2n;
addon.HWND_TOP = 0n;
addon.HWND_TOPMOST = -1n;

addon.SWP_NOSIZE = 0x0001;
addon.SWP_NOMOVE = 0x0002;
addon.SWP_NOZORDER = 0x0004;
addon.SWP_NOREDRAW = 0x0008;
addon.SWP_NOACTIVATE = 0x0010;
addon.SWP_DRAWFRAME = 0x0020;
addon.SWP_SHOWWINDOW = 0x0040;
addon.SWP_HIDEWINDOW = 0x0080;
addon.SWP_NOCOPYBITS = 0x0100;
addon.SWP_NOREPOSITION = 0x0200;
addon.SWP_NOSENDCHANGING = 0x0400;
addon.SWP_DEFERERASE = 0x2000;
addon.SWP_ASYNCWINDOWPOS = 0x4000;

module.exports = addon;
