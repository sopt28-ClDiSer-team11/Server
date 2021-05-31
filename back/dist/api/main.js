"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const banner_1 = __importDefault(require("../models/banner"));
const category_1 = __importDefault(require("../models/category"));
const lastOrder_1 = __importDefault(require("../models/lastOrder"));
/**
 * @route GET api/main/banner
 * @desc Get all banners
 * @access Public
 */
router.get("/banner", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const banners = yield banner_1.default.find();
        if (!banners.length) {
            return res.status(200).json({ status: 200, success: true, message: "배너 데이터 없음", data: banners });
        }
        res.json({ status: 200, success: true, message: "배너 가져오기 성공", data: banners });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send({ status: 500, success: false, message: "서버 내부 에러" });
    }
}));
/**
 * @route GET api/main/category
 * @desc Get all categorys
 * @access Public
 */
router.get("/category", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_1.default.find();
        if (!categories.length) {
            return res.status(200).json({ status: 200, success: true, message: "카테고리 데이터 없음", data: categories });
        }
        res.json({ status: 200, success: true, message: "카테고리 가져오기 성공", data: categories });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send({ status: 500, success: false, message: "서버 내부 에러" });
    }
}));
/**
* @route GET api/main/lastOrder
* @desc Get all lastOrder
* @access Public
*/
router.get("/lastOrder", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lastOrders = yield lastOrder_1.default.find();
        if (!lastOrders.length) {
            return res.status(200).json({ status: 200, success: true, message: "최근 맛집 데이터 없음", data: lastOrders });
        }
        res.json({ status: 200, success: true, message: "최근 주문한 맛집 가져오기 성공", data: lastOrders });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send({ status: 500, success: false, message: "서버 내부 에러" });
    }
}));
module.exports = router;
//# sourceMappingURL=main.js.map