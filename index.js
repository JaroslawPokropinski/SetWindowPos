var addon = null;

// Load the precompiled binary for windows.
if (process.platform == 'win32') {
  addon = require('./build/Release/addon');
} else {
  throw new Error('SetWindowPos requires windows os');
}

module.exports = addon;
