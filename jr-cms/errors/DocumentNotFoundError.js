class DocumentNotFoundError extends Error {
  constructor(resource, id) {
    super(`${id} not found in ${resource} collection`);
  }
}

module.exports = DocumentNotFoundError;
