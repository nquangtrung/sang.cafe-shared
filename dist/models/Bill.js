"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = require("./Model");
const joi_1 = __importDefault(require("@hapi/joi"));
class Bill extends Model_1.Model {
    constructor(obj) {
        super();
        this.billExpiredAfterMinutes = 120;
        this.status = 'pending';
        this.paid = 0;
        Object.assign(this, obj);
    }
    createSchema() {
        return joi_1.default.object({});
    }
    onPrepareData() {
        let obj = Object.assign({}, this);
        delete obj.createdAt;
        delete obj.uid;
        return obj;
    }
}
exports.Bill = Bill;
//# sourceMappingURL=Bill.js.map