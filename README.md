# SetWindowPos
[![Build Status](https://travis-ci.org/JaroslawPokropinski/SetWindowPos.svg?branch=master)](https://travis-ci.org/JaroslawPokropinski/SetWindowPos)

Node package wrapping SetWindowPos from winapi User32.dll
## Requirements
+ Windows
+ Node 10.x or newer
## Installation
```
npm i win-setwindowpos
```
## Usage
SetWindowPos is designed to be used with electron (altough it can be used without it).
```
const { 
  SetWindowPos,
  HWND_BOTTOM,
  SWP_NOACTIVATE,
  SWP_NOSIZE,
  SWP_NOMOVE
} = require('win-setwindowpos');
let window;

function createConfigWindow() {
  window = new BrowserWindow({
    // BrowserWindow parameters
  });
  // window setup
  const hwnd = window.getNativeWindowHandle();
  SetWindowPos(
    hwnd,
    HWND_BOTTOM,
    0,
    0,
    0,
    0,
    SWP_NOACTIVATE | SWP_NOSIZE | SWP_NOMOVE
  );
}

```
