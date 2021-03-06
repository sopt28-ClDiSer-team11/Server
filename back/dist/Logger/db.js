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
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(config_1.default.mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
        console.log("Mongoose Connected ...");
        // Banner.createCollection().then(function(collection) {
        //   console.log('Banner Collection is created!');
        // });
        // Banner.insertMany([
        //   {
        //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/card_img.png"
        //   },
        //   {
        //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/card_img_2.png"
        //   },
        //   {
        //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/card_img_3.png"
        //   }
        // ]).then(function(collection) {
        //   console.log("Data Insert Success.");
        // });
        // Category.createCollection().then(function(collection) {
        //   console.log('Category Collection is created!');
        // });
        // Category.insertMany([
        //   {
        //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_1.png",
        //     "title": "?????? ??????"
        //   },
        //   {
        //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_2.png",
        //     "title": "1??????"
        //   },
        //   {
        //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_3.png",
        //     "title": "??????"
        //   },
        //   {
        //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_4.png",
        //     "title": "??????"
        //   },
        //   {
        //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_5.png",
        //     "title": "??????"
        //   },
        //   {
        //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_6.png",
        //     "title": "????????????"
        //   },
        //   {
        //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_7.png",
        //     "title": "?????????"
        //   },
        //   {
        //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_8.png",
        //     "title": "??????"
        //   },
        //   {
        //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_9.png",
        //     "title": "???/???"
        //   },
        //   {
        //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_10.png",
        //     "title": "??????"
        //   }      
        // ]).then(function(collection) {
        //   console.log("Data Insert Success.");
        // });
        // LastOrder.createCollection().then(function(collection) {
        //   console.log('LastOrder Collection is created!');
        // });
        // LastOrder.insertMany([
        //   {
        //     "title": "??????????????????",
        //     "star": "4.8",
        //     "reviewCount": "705",
        //     "distance": "0.4km",
        //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/lastOrder/recently_img_1.png",
        //     "isFree": true 
        //   },
        //   {
        //     "title": "???????????????",
        //     "star": "4.6",
        //     "reviewCount": "685",
        //     "distance": "0.8km",
        //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/lastOrder/recently_img_2.png",
        //     "isFree": true
        //   },
        //   {
        //     "title": "???????????????",
        //     "star": "4.3",
        //     "reviewCount": "450",
        //     "distance": "0.3km",
        //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/lastOrder/recently_img_3.png",
        //     "isFree": true
        //   }
        // ]).then(function(collection) {
        //   console.log("Data Insert Success.");
        // });
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
});
exports.default = connectDB;
//# sourceMappingURL=db.js.map