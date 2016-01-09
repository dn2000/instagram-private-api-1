import Http from './app/services/http';

const auth = (username, password) => {
  return (new Http)
    .grabTokens()
    .then((res) => new Http(res).auth(username, password))
    .catch(() => false);
};

const setLike = (headers, mediaId) => {
  return (new Http(headers))
    .setLike(mediaId)
    .catch(() => false);
};

const setComment = (headers, mediaId, text) => {
  return (new Http(headers))
    .setComment(mediaId, text)
    .catch(() => false);
};

const setFollow = (headers, userId) => {
  return (new Http(headers))
    .setFollow(userId)
    .catch(() => false);
};

const unsetFollow = (headers, userId) => {
  return (new Http(headers))
    .unsetFollow(userId)
    .catch(() => false);
};

const getMedia = (headers, startCursor, count = 12) => {
  return (new Http(headers))
    .getMedia(startCursor, count)
    .catch(() => false);
};

export default {
  auth,
  setLike,
  setComment,
  setFollow,
  unsetFollow,
  getMedia,
};
