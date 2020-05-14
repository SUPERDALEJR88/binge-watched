export const performFetch = (url, options) => {
  const headers = options ? options.headers || new Headers() : new Headers();
  // headers.push('mode', 'no-cors');
  const mergedOptions = Object.assign({}, options, { headers });

  return new Promise((resolve, reject) => {
    fetch(url, Object.assign(mergedOptions)).then(
      (response) => {
        response.json().then((json) => {
          if (response.ok) {
            resolve(json);
          } else {
            reject({
              ...json,
              status: response.status,
            });
          }
        }).catch((error) => {
          reject({
            error,
            status: response.status,
          });
        })
      },
      (error) => {
        reject(error)
      },
    )
  })
}
