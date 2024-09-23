import shouldMessageBePosted from "./shouldMessageBePosted.js"

const prepareMessages = ((config, comments, diff, messagesToPost = []) => {
  let paths;
  const _messagesToPost = messagesToPost;

  if (typeof config.paths === 'string') {
    paths = [config.paths];
  } else if (Array.isArray(config.paths) && config.paths.length > 0) {
    paths = config.paths;
  } else {
    throw new Error('"paths" should be either string or array:', config.paths, 'type:', typeof config.paths);
  }

  if (shouldMessageBePosted(paths, config.message, diff, comments, _messagesToPost)) {
    _messagesToPost.push(config.message);
  }

  return _messagesToPost;
})

export default prepareMessages;
