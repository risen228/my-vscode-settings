{
  // window settings (must have for unix systems)
  "window.titleBarStyle": "custom",
  "window.enableMenuBarMnemonics": false,

  // font settings
  "editor.fontFamily": "'Roboto Mono', monospace",
  "editor.fontSize": 13.5,
  "editor.lineHeight": 23,

  // theme settings and colors customization
  "workbench.colorTheme": "Horizon",
  "workbench.colorCustomizations": {
    "titleBar.activeBackground": "#0a0a0e",
    "titleBar.inactiveBackground": "#0a0a0e",

    "editor.background": "#1b1e27",

    "activityBar.background": "#0a0a0e",
    "activityBar.border": "#0a0a0e",

    "sideBar.background": "#161920",
    "sideBar.border": "#161920",
    "sideBarSectionHeader.background": "#111116",

    "statusBar.background": "#0a0a0e",
    "statusBar.border": "#0a0a0e",

    "editorGroupHeader.tabsBackground": "#161920",
    "editorGroupHeader.tabsBorder": "#161920",

    "tab.activeBackground": "#0a0a0e",
    "tab.inactiveBackground": "#161920",

    "panel.background": "#161920",
    "panel.border": "#0a0a0e"
  },

  /*
   * Some common things
   */

  // Hide unnecessary stuff
  "editor.minimap.enabled": false,
  "workbench.statusBar.feedback.visible": false,
  "explorer.openEditors.visible": 0,

  // move and delete files without confirmation
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,

  /*
   * Settings below is optional and depend on your preferences
   */

  // choose what you want
  "workbench.panel.defaultLocation": "right",

  // auto update imports
  "javascript.updateImportsOnFileMove.enabled": "always",

  // prettier
  "prettier.eslintIntegration": true,

  // languages settings
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[javascript]": {
    "editor.tabSize": 2,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.tabSize": 2,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.tabSize": 2,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // fix slow intellisense issue
  "typescript.tsdk": "/usr/local/lib/node_modules/typescript/lib/"
}
