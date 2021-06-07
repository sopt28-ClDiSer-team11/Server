import mongoose from "mongoose";
import config from "../config";
import Banner from "../models/banner";
import Category from "../models/category"
import LastOrder from "../models/lastOrder"
import Detail from "../models/detail"
import Menu from "../models/menu"


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

    // Detail.createCollection().then(function(collection) {
    //   console.log('Detail Collection is created!');
    // });
    // Detail.insertMany([
    //   {
    //     "_id" : 1,
    //     "title" : "라라레스토랑",
		// 		"star" : "4.8",
		// 		"review": "300",
		// 		"cheetahImage": "123.jpg",
		// 		"minute" : "15~25분",
		// 		"fee": "2,000원",
		// 		"minimumPrice": "10,000원",
		// 		"notice": "라라레스토랑은 양재천이 흐르며 나무숲 가득한 도곡동에 위치해 있습니다. 사계절 모두 특색 있는 라라만의 감성을 느끼실 수 있습니다."
    //   },
    //   {
    //     "_id" : 2,
    //     "title" : "여우골초밥",
		// 		"star" : "4.9",
		// 		"review": "500",
		// 		"cheetahImage": "123.jpg", 
		// 		"minute" : "19~29분",
		// 		"fee": "2,000원",
		// 		"minimumPrice": "10,000원",
		// 		"notice": "좋은 재료를 엄선해서 저렴하게 초밥을 판매하고 있는 여우골초밥입니다. 따뜻하고 부드러운 여우골 초밥 꼭 드셔보세요."      
    //   }
      
    // ]).then(function(collection) {
    //   console.log("Data Insert Success.");
    // });


    // Menu.createCollection().then(function(collection) {
    //   console.log('Menu Collection is created!');
    // });
    // Menu.insertMany([
    //   {
    //     "storeIdx" : "2",
    //     "title": "모듬초밥 12P",        
    //     "price": "12,000원",
    //     "image" : "https://yj-sopt-test.s3.us-east-2.amazonaws.com/menu/main_image4.png",
    //     "detailMenu": "연어2, 활어2, 참치2, 찐새우2, 계란2"
    //   },
    //   {
    //     "storeIdx" : "2",
    //     "title": "연어초밥 12P",        
    //     "price": "12,000원",
    //     "image" : "https://yj-sopt-test.s3.us-east-2.amazonaws.com/menu/main_image4.png",
    //     "detailMenu": "연어12"
    //   },
    //   {
    //     "storeIdx" : "2",
    //     "title": "연어초밥 12P",        
    //     "price": "12,000원",
    //     "image" : "https://yj-sopt-test.s3.us-east-2.amazonaws.com/menu/main_image4.png",
    //     "detailMenu": "연어12"
    //   },
    //   {
    //     "storeIdx" : "1",
    //     "title": "왕새우 오일파스타",        
    //     "price": "21,800원",
    //     "image" : "https://yj-sopt-test.s3.us-east-2.amazonaws.com/menu/main_image.png",
    //     "detailMenu": "신선한 왕새우와 해산물이 어우러진 오일 파스타"
    //   },
    //   {
    //     "storeIdx" : "1",
    //     "title": "살치살 스테이크",        
    //     "price": "38,000원",
    //     "image" : "https://yj-sopt-test.s3.us-east-2.amazonaws.com/menu/main_image2.png",
    //     "detailMenu": "부드러운 살치살 부위의 소고기 스테이크"
    //   },
    //   {
    //     "storeIdx" : "1",
    //     "title": "관자그린바질 파스타",        
    //     "price": "23,000원",
    //     "image" : "https://yj-sopt-test.s3.us-east-2.amazonaws.com/menu/main_image3.png",
    //     "detailMenu": "바질 소스에 구운 관자가 올려진 라라 시그니처 파스타"
    //   },
      
    // ]).then(function(collection) {
    // console.log("Data Insert Success.");
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
