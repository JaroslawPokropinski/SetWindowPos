var {
  SetWindowPos,
  HWND_BOTTOM,
  SWP_NOACTIVATE,
  SWP_NOSIZE,
  SWP_NOMOVE
} = require('../index');

SetWindowPos(
  0n,
  HWND_BOTTOM,
  0,
  0,
  0,
  0,
  SWP_NOACTIVATE | SWP_NOSIZE | SWP_NOMOVE
);
