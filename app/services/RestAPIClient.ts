const API_URL = process.env.API_URL;

class RestAPIClient {
  protected api_url = API_URL;

  protected path: string;

  constructor(path: string) {
    this.path = path;
  }

  private async request(contextPath: string, method: string, payload?: any) {
    let url = new URL(`${this.api_url}${this.path}${contextPath}`);

    if (method === "GET" && payload) {
      for (const key in payload) {
        url.searchParams.append(key, payload?.[key]);
      }
    }

    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (
      method === "POST" ||
      method === "PUT" ||
      method === "PATCH" ||
      method === "DELETE"
    ) {
      options["body"] =
        payload instanceof FormData ? payload : JSON.stringify(payload);
    }

    const res = await fetch(url, options);
    try {
      switch (true) {
        case res.status === 301 ||
          res.status === 302 ||
          res.type === "opaqueredirect": {
          // RestAPIClient.process30x();
          break;
        }
        case res.status > 201:
          const json = await res?.json();
          if (json) {
            const error = {
              ...json,
              status: res.status,
            };
            throw error;
          } else {
            const error = {
              message: res.statusText,
              status: res.status,
            };
            throw error;
          }

        case res.status === 200 || res.status === 201: {
          const json = await res.json();
          return json;
        }
      }
    } catch (e) {
      throw e;
    }
  }

  protected get = (
    contextPath = "",
    params?: object,
  ) => this.request(contextPath, "GET", params);

  protected post = (
    contextPath = "",
    body: object | FormData = {},
  ) => this.request(contextPath, "POST", body);

  protected put = (contextPath = "", body: object = {}) =>
    this.request(contextPath, "PUT", body);

  protected patch = (contextPath = "", body: object = {}) =>
    this.request(contextPath, "PATCH", body);

  protected delete = (contextPath = "", body: object = {}) =>
    this.request(contextPath, "DELETE", body);
}

export default RestAPIClient;
