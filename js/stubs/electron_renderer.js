module.exports = {
  contextBridge: {
    exposeInMainWorld: () => {}
  },
  ipcRenderer: {
    on: () => {},
    send: () => {},
    invoke: async () => {}
    // stub other ipcRenderer methods
  }
};
