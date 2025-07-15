const stub = () => {
  throw new Error('STUB');
};

module.exports = {
  chmod: stub,
  rm: stub,
  createSocket: stub
};
