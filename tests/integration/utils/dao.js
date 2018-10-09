function getAssets(ids, { language }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(ids.map(id => ({ id, language }))), (ids.length > 1) ? 130 : 100);
  });
}

function getEmptyGroup(ids, { language }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([]), 10);
  });
}

function getPartialGroup(ids, { language }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([{ id: ids[0], language }]), 5);
  });
}

function getErroredRequest(ids, { language }) {
  return new Promise((resolve, reject) => {
    throw new Error('Something went wrong');
  });
}

function getFailedRequest(ids, { language }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({ error: 'Something went wrong' }), 10);
  });
}

function getSlowRequest(ids, { language }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(ids.map(id => ({ id, language }))), 1000);
  });
}

module.exports = {
  getAssets,
  getEmptyGroup,
  getPartialGroup,
  getErroredRequest,
  getFailedRequest,
  getSlowRequest,
};
