const apiGet = async (path) => {
  try {
    const res = await fetch(path);
    const data = await res.json();
    return data;
  } catch (err) {
    alert(err);
    return null;
  }
};

/**
 *
 * @param {string} path - path to post to
 * @param {Object} object - object literal to post
 */
const apiPost = async (path, object) => {
  try {
    const options = {
      method: 'post',
      body: JSON.stringify(object),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await fetch(path, options);
    const data = await res.json();
    return data;
  } catch (err) {
    return null;
  }
};

export { apiGet, apiPost };
