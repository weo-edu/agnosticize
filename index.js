module.exports = function(url) {
  return url.replace(/^[a-z]+\:\/\//i, '//');
};