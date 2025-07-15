module.exports = {
  app: {
    getPath: () => '/'
    // stub other app methods
  },
  dialog: {
    showOpenDialog: () => Promise.resolve({ canceled: true, filePaths: [] }),
    showMessageBox: () => Promise.resolve({ response: 0 })
    // stub other dialog methods
  }
};
