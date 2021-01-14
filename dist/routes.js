"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(req, res) {
    var user = CreateUser_1.default({
        name: 'Júnior',
        email: 'jr@email',
        password: '1234',
        tech: [
            'React',
            'React Native',
            { title: 'Javascript', experience: 100 }
        ]
    });
    console.log(user.name);
    console.log(user.tech);
    return res.json({ Hello: 'Hello world' });
}
exports.helloWorld = helloWorld;
