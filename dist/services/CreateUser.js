"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateUserData(_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, email = _a.email, password = _a.password, tech = _a.tech;
    var user = {
        name: name,
        email: email,
        password: password,
        tech: tech,
    };
    return user;
}
exports.default = CreateUserData;
;
