"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const lastOrderSchema = new mongoose_1.default.Schema({
    title: {
        type: String
    },
    star: {
        type: String
    },
    reviewCount: {
        type: String
    },
    distance: {
        type: String
    },
    image: {
        type: String
    },
    isFree: {
        type: Boolean
    },
});
exports.default = mongoose_1.default.model("LastOrder", lastOrderSchema);
//# sourceMappingURL=lastOrder.js.map