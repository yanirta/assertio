import { resolve } from "url";

import { ApiClient, Check, CheckResult, DefaultApi } from './generated'
import { AssertionError } from 'assert';
import Operations from './operations';

export default class assertio {
    constructor(token, server) {
        this.api = new DefaultApi();
        this.api.apiClient.authentications['bearerAuth'].accessToken = token;
        if (server)
            this.api.apiClient.basePath = server;
    }

    assertEquals(left, right, checkId, callback) {
        return this._assert(left, right, checkId, callback, Operations.EQUALS);
    }

    assertNotEquals(left, right, checkId, callback) {
        return this._assert(left, right, checkId, callback, Operations.NOTEQUALS);
    }

    assertGreater(left, right, checkId, callback) {
        return this._assert(left, right, checkId, callback, Operations.GREATERTHAN);
    }

    assertLower(left, right, checkId, callback) {
        return this._assert(left, right, checkId, callback, Operations.LESSTHAN);
    }

    validateEquals(right, checkId, callback) {
        return this._assert(null, right, checkId, callback, Operations.EQUALS);
    }

    _assert(left, right, checkId, callback, operation) {
        var check = new Check();
        check.timestamp = new Date().toISOString();
        check.uname = checkId;
        check.leftCompareObj = this.normalize(left);
        check.rightCompareObj = this.normalize(right);
        check.operator = operation;

        var opts = {};
        opts['check'] = check;

        if (callback && typeof (callback) === 'function') { // Async
            this.api.checkPost(opts, (e, d, r) => {
                if (e) {
                    throw new Error(e);
                }
                else if (r.statusCode !== 200) {
                    throw new Error(r);
                }
                else if (d.status !== 'Passed') {
                    throw new AssertionError(d);
                }
                else callback(d);
            });
        } else return new Promise((resolve, reject) => { //Promises
            this.api.checkPost(opts, (e, d, r) => {
                if (e) reject(e);
                else if (r.statusCode !== 200) reject(r);
                else if (d.status !== 'Passed') reject(new AssertionError(d));
                else resolve(d);
            });
        });
    }
    normalize(obj) {
        if (obj === null) return {};
        if (obj instanceof Map || obj instanceof Set)
            return obj;
        var ret = {}
        ret[typeof obj] = obj;
        return ret;
    }
}