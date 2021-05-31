import express, {Request, Response} from "express";
const router = express.Router();
import Banner from "../models/banner";
import Category from "../models/category";
import LastOrder from "../models/lastOrder";


import config from "../config";
import request from 'request';

import { check, validationResult } from "express-validator";


/**
 * @route GET api/main/banner
 * @desc Get all banners
 * @access Public
 */
 router.get("/banner", async (req,res) => {
  try{
      const banners = await Banner.find();

      if (!banners.length) {
        return res.status(200).json({ status: 200, success : true, message: "배너 데이터 없음", data: banners });
      }
      res.json({status: 200, success: true, message: "배너 가져오기 성공", data: banners});


  } catch (error) {
      console.error(error.message);
      res.status(500).send({ status: 500, success: false, message: "서버 내부 에러" });
  }
});

/**
 * @route GET api/main/category
 * @desc Get all categorys
 * @access Public
 */
 router.get("/category", async (req,res) => {
    try{
        const categories = await Category.find();
  
        if (!categories.length) {
          return res.status(200).json({ status: 200, success : true, message: "카테고리 데이터 없음", data: categories });
        }
        res.json({status: 200, success: true, message: "카테고리 가져오기 성공", data: categories});
  
  
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ status: 500, success: false, message: "서버 내부 에러" });
    }
  });

  /**
 * @route GET api/main/lastOrder
 * @desc Get all lastOrder
 * @access Public
 */
 router.get("/lastOrder", async (req,res) => {
    try{
        const lastOrders = await LastOrder.find();
  
        if (!lastOrders.length) {
          return res.status(200).json({ status: 200, success : true, message: "최근 맛집 데이터 없음", data: lastOrders });
        }
        res.json({status: 200, success: true, message: "최근 주문한 맛집 가져오기 성공", data: lastOrders});
  
  
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ status: 500, success: false, message: "서버 내부 에러" });
    }
  });

module.exports = router;