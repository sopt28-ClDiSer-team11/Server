import mongoose from "mongoose";
import config from "../config";
import Banner from "../models/banner";
import Category from "../models/category"
import LastOrder from "../models/lastOrder"

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
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
    //     "title": "신규 맛집"
    //   },
    //   {
    //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_2.png",
    //     "title": "1인분"
    //   },
    //   {
    //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_3.png",
    //     "title": "한식"
    //   },
    //   {
    //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_4.png",
    //     "title": "치킨"
    //   },
    //   {
    //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_5.png",
    //     "title": "분식"
    //   },
    //   {
    //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_6.png",
    //     "title": "선물하기"
    //   },
    //   {
    //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_7.png",
    //     "title": "중국집"
    //   },
    //   {
    //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_8.png",
    //     "title": "버거"
    //   },
    //   {
    //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_9.png",
    //     "title": "찜/탕"
    //   },
    //   {
    //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/category/category_img_10.png",
    //     "title": "일식"
    //   }      
    // ]).then(function(collection) {
    //   console.log("Data Insert Success.");
    // });

    // LastOrder.createCollection().then(function(collection) {
    //   console.log('LastOrder Collection is created!');
    // });
    // LastOrder.insertMany([
    //   {
    //     "title": "라라레스토랑",
    //     "star": "4.8",
    //     "reviewCount": "705",
    //     "distance": "0.4km",
    //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/lastOrder/recently_img_1.png",
    //     "isFree": true 
    //   },
    //   {
    //     "title": "나폴로피자",
    //     "star": "4.6",
    //     "reviewCount": "685",
    //     "distance": "0.8km",
    //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/lastOrder/recently_img_2.png",
    //     "isFree": true
    //   },
    //   {
    //     "title": "퀸수제버거",
    //     "star": "4.3",
    //     "reviewCount": "450",
    //     "distance": "0.3km",
    //     "image": "https://yj-sopt-test.s3.us-east-2.amazonaws.com/lastOrder/recently_img_3.png",
    //     "isFree": true
    //   }
    // ]).then(function(collection) {
    //   console.log("Data Insert Success.");
    // });

  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
