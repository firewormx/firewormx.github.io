type DefaultBody = Record<string, unknown>;
type MethodType = "POST" | "PUT" | "DELETE";

export default class FetchWrapper {
    #baseURL;
  
    constructor(baseURL: string) {
      this.#baseURL = baseURL;
    }
  
    get<T>(endpoint: string): Promise<T> {
      return fetch(this.#baseURL + endpoint).then((response) => response.json());
    }
  
    post<T, B = DefaultBody>(endpoint: string, body: B): Promise<T> {
      return this.#send<B>("POST", endpoint, body);
    }
  
    put<T, B = DefaultBody>(endpoint: string, body: B): Promise<T> {
      return this.#send<B>("PUT", endpoint, body);
    }
  
    delete<T, B = DefaultBody>(endpoint: string, body?: B): Promise<T> {
      return this.#send<B>("DELETE", endpoint, body);
    }
  
    #send<B>(method: MethodType, endpoint: string, body?: B) {
      return fetch(this.#baseURL + endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((response) => response.json());
    }
  }