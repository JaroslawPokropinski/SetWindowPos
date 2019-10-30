declare module 'win-setwindowpos' {
  // HWNDS

  /**
   * Places the window at the bottom of the Z order.
   * If the hWnd parameter identifies a topmost window, the window loses its topmost status and is placed at the bottom of all other windows.
   */
  export const HWND_BOTTOM = 1

  /**
   * Places the window above all non-topmost windows (that is, behind all topmost windows).
   * This flag has no effect if the window is already a non-topmost window.
   */
  export const HWND_NOTOPMOST = -2

  /**
   * Places the window at the top of the Z order.
   */
  export const HWND_TOP = 0

  /**
   * Places the window above all non-topmost windows.
   * The window maintains its topmost position even when it is deactivated.
   */
  export const HWND_TOPMOST = -1

  // FLAGS

  /**
   * Retains the current size (ignores the cx and cy parameters).
   */
  export const SWP_NOSIZE = 0x0001

  /**
   * Retains the current position (ignores X and Y parameters).
   */
  export const SWP_NOMOVE = 0x0002

  /**
   * Retains the current Z order (ignores the hWndInsertAfter parameter).
   */
  export const SWP_NOZORDER = 0x0004

  /**
   * Does not redraw changes.
   * If this flag is set, no repainting of any kind occurs.
   * This applies to the client area, the nonclient area (including the title bar and scroll bars), and any part of the parent window uncovered as a result of the window being moved.
   * When this flag is set, the application must explicitly invalidate or redraw any parts of the window and parent window that need redrawing.
   */
  export const SWP_NOREDRAW = 0x0008

  /**
   * Does not activate the window.
   * If this flag is not set, the window is activated and moved to the top of either the topmost or non-topmost group (depending on the setting of the hWndInsertAfter parameter).
   */
  export const SWP_NOACTIVATE = 0x0010

  /**
   * Draws a frame (defined in the window's class description) around the window.
   */
  export const SWP_DRAWFRAME = 0x0020

  /**
   * Displays the window.
   */
  export const SWP_SHOWWINDOW = 0x0040

  /**
   * Hides the window.
   */
  export const SWP_HIDEWINDOW = 0x0080

  /**
   * Discards the entire contents of the client area.
   * If this flag is not specified, the valid contents of the client area are saved and copied back into the client area after the window is sized or repositioned.
   */
  export const SWP_NOCOPYBITS = 0x0100

  /**
   * Same as the SWP_NOOWNERZORDER flag.
   * Does not change the owner window's position in the Z order.
   */
  export const SWP_NOREPOSITION = 0x0200

  /**
   * Prevents the window from receiving the WM_WINDOWPOSCHANGING message.
   */
  export const SWP_NOSENDCHANGING = 0x0400

  /**
   * Prevents generation of the WM_SYNCPAINT message.
   */
  export const SWP_DEFERERASE = 0x2000

  /**
   * If the calling thread and the thread that owns the window are attached to different input queues, the system posts the request to the thread that owns the window.
   * This prevents the calling thread from blocking its execution while other threads process the request.
   */
  export const SWP_ASYNCWINDOWPOS = 0x4000

  // FUNCTIONS

  /**
   * Changes the size, position, and Z order of a child, pop-up, or top-level window.
   * These windows are ordered according to their appearance on the screen.
   * The topmost window receives the highest rank and is the first window in the Z order.
   *
   * Note: BOOL return type (from the native API) is not currently supported in node
   * @param hWnd A handle to the window.
   * @param hWndInsertAfter A handle to the window to precede the positioned window in the Z order.
   * This parameter must be a window handle or one of the following values:
   * @see HWND_BOTTOM
   * @see HWND_NOTOPMOST
   * @see HWND_TOP
   * @see HWND_TOPMOST
   *
   * For more information about how this parameter is used, see the following Remarks section.
   * @param x The new position of the left side of the window, in client coordinates.
   * @param y The new position of the top of the window, in client coordinates.
   * @param cx The new width of the window, in pixels.
   * @param cy The new height of the window, in pixels.
   * @param uFlags The window sizing and positioning flags.
   * This parameter can be a combination of the following values:
   * @see SWP_ASYNCWINDOWPOS
   * @see SWP_DEFERERASE
   * @see SWP_DRAWFRAME
   * @see SWP_HIDEWINDOW
   * @see SWP_NOACTIVATE
   * @see SWP_NOCOPYBITS
   * @see SWP_NOMOVE
   * @see SWP_NOOWNERZORDER
   * @see SWP_NOREDRAW
   * @see SWP_NOREPOSITION
   * @see SWP_NOSENDCHANGING
   * @see SWP_NOSIZE
   * @see SWP_NOZORDER
   * @see SWP_SHOWWINDOW
   * @template THWNDRaw the type of the platform-native handle representation.
   * This exists to allow the caller to specify a type of handle that will marshal correctly (like a Buffer, in the electron case) but still enforce typing semantics.
   * @template THWND the type of this-module handle representation.
   * This exists to support the case when THWNDRaw is used (or inferred) and is a non-number type, yet we still need to support the HWND literal (number) values.
   */
  // disable linter warning, if folks want to lint library typings
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function SetWindowPos<THWNDRaw = any, THWND = THWNDRaw>(hWnd: THWNDRaw, hWndInsertAfter: THWND, x: number, y: number, cx: number, cy: number, uFlags: number): void
}
