{
  // window settings
  "window.titleBarStyle": "custom",
  "window.customMenuBarAltFocus": false,
  "window.enableMenuBarMnemonics": false,

  // font settings
  "editor.fontFamily": "'Ubuntu Mono', monospace",
  "editor.fontSize": 15,
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
  "prettier.tslintIntegration": true,

  // languages settings
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
