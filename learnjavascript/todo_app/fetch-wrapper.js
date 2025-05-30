var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FetchWrapper_instances, _FetchWrapper_baseURL, _FetchWrapper_send;
class FetchWrapper {
    constructor(baseURL) {
        _FetchWrapper_instances.add(this);
        _FetchWrapper_baseURL.set(this, void 0);
        __classPrivateFieldSet(this, _FetchWrapper_baseURL, baseURL, "f");
    }
    get(endpoint) {
        return fetch(__classPrivateFieldGet(this, _FetchWrapper_baseURL, "f") + endpoint)
            .then(response => response.json());
    }
    put(endpoint, body) {
        return __classPrivateFieldGet(this, _FetchWrapper_instances, "m", _FetchWrapper_send).call(this, "PUT", endpoint, body);
    }
    post(endpoint, body) {
        return __classPrivateFieldGet(this, _FetchWrapper_instances, "m", _FetchWrapper_send).call(this, "POST", endpoint, body);
    }
    delete(endpoint, body) {
        return __classPrivateFieldGet(this, _FetchWrapper_instances, "m", _FetchWrapper_send).call(this, "DELETE", endpoint, body);
    }
}
_FetchWrapper_baseURL = new WeakMap(), _FetchWrapper_instances = new WeakSet(), _FetchWrapper_send = function _FetchWrapper_send(method, endpoint, body) {
    return fetch(__classPrivateFieldGet(this, _FetchWrapper_baseURL, "f") + endpoint, {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(response => response.json());
};
export default FetchWrapper;
