"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = require("./Model");
const joi_1 = __importDefault(require("@hapi/joi"));
class Comment extends Model_1.Model {
    constructor(obj) {
        super();
        if (obj) {
            Object.assign(this, obj);
        }
    }
    createSchema() {
        return joi_1.default.object();
    }
    onPrepareData() {
        let obj = Object.assign({}, this);
        return obj;
    }
}
exports.Comment = Comment;
//# sourceMappingURL=Comment.js.map