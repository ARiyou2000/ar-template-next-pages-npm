const fetchUrl = async (url, init = {}) => {
  const {method = "GET", header, body} = init

  return new Promise(async (resolve, reject) => {
    let response;
    try {
      const params = {
        method,
        headers: {
          "Content-Type": "application/json",
          ...header,
        },
      };
      if (method !== "GET") {
        params.body = JSON.stringify(body);
      }

      // Actual Data fetch with given url and request description
      response = await fetch(url, params);
      // return response;

      const result = await response.json();

      // console.log("response in fetchUrl: ", response);
      // console.log("result (json response) in fetchUrl: ", result);

      // Following statements will run only if fetch return resolved value
      if (response.ok && result.action) {
        // console.log(url, result.result)
        resolve(result.result);
      } else {
        // HTTP Response such as 404 and 500 are considered Resolved fetch data (since it will get something as answer)
        const errorMessage = JSON.stringify(result.error);
        reject(errorMessage);
      }
      // Following statements will run if fetch result is rejected or fetch has thrown an Error for connection issues
    } catch (e) {
      console.groupCollapsed("fetchUrl error : ");
      console.error("error : ", e);
      console.groupEnd();
      reject("A network error is encountered or there is syntax error in result");
      // reject(e);
    }
  });
};

export default fetchUrl;
