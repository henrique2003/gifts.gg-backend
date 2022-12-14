"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = __importDefault(require("./app/routes"));
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.middlewares();
    }
    middlewares() {
        this.express.use(express_1.default.json());
        this.express.use((0, cors_1.default)());
        this.express.use((0, helmet_1.default)());
        this.express.use('/api', routes_1.default);
    }
}
exports.default = new App().express;
