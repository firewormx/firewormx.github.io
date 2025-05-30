"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var FetchWrapper = /** @class */ (function () {
    function FetchWrapper(baseURL) {
        _FetchWrapper_instances.add(this);
        _FetchWrapper_baseURL.set(this, void 0);
        __classPrivateFieldSet(this, _FetchWrapper_baseURL, baseURL, "f");
    }
    FetchWrapper.prototype.get = function (endpoint) {
        return fetch(__classPrivateFieldGet(this, _FetchWrapper_baseURL, "f") + endpoint)
            .then(function (response) { return response.json(); });
    };
    FetchWrapper.prototype.put = function (endpoint, body) {
        return __classPrivateFieldGet(this, _FetchWrapper_instances, "m", _FetchWrapper_send).call(this, "PUT", endpoint, body);
    };
    FetchWrapper.prototype.post = function (endpoint, body) {
        return __classPrivateFieldGet(this, _FetchWrapper_instances, "m", _FetchWrapper_send).call(this, "POST", endpoint, body);
    };
    FetchWrapper.prototype.delete = function (endpoint, body) {
        return __classPrivateFieldGet(this, _FetchWrapper_instances, "m", _FetchWrapper_send).call(this, "DELETE", endpoint, body);
    };
    return FetchWrapper;
}());
_FetchWrapper_baseURL = new WeakMap(), _FetchWrapper_instances = new WeakSet(), _FetchWrapper_send = function _FetchWrapper_send(method, endpoint, body) {
    return fetch(__classPrivateFieldGet(this, _FetchWrapper_baseURL, "f") + endpoint, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(function (response) { return response.json(); });
};
exports.default = FetchWrapper;
