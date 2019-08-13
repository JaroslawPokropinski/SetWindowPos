# SetWindowPos
[![Build Status](https://travis-ci.org/JaroslawPokropinski/SetWindowPos.svg?branch=master)](https://travis-ci.org/JaroslawPokropinski/SetWindowPos)

Node package wrapping SetWindowPos from winapi User32.dll
## Installation
```
npm i win-setwindowpos
```
## Usage
SetWindowPos is designed to be used with electron (altough it can be used without it).
```
const { SetWindowPos } = require('win-setwindowpos');
let window;

function createConfigWindow() {
  window = new BrowserWindow({});
  const nativeHandle = window.getNativeWindowHandle();
  const hwnd = nativeHandle.readBigUInt64LE();
  SetWindowPos(hwnd, 1n, 0, 0, 0, 0, 0x0013);
}

```
