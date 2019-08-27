var {
  SetWindowPos,
  HWND_BOTTOM,
  SWP_NOACTIVATE,
  SWP_NOSIZE,
  SWP_NOMOVE
} = require('../index');

SetWindowPos(
  new Buffer.from([0, 0, 0, 0, 0, 0, 0 ,0]),
  HWND_BOTTOM,
  0,
  0,
  0,
  0,
  SWP_NOACTIVATE | SWP_NOSIZE | SWP_NOMOVE
);
