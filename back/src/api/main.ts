import express, {Request, Response} from "express";
const router = express.Router();
import Banner from "../models/banner";

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
        return res.status(200).json({ status: 200, success : true, message: "이미지 없음", data: banners });
      }
      res.json({status: 200, success: true, message: "배너 가져오기 성공", data: banners});


  } catch (error) {
      console.error(error.message);
      res.status(500).send({ status: 500, success: false, message: "배너 가져오기 실패" });
  }
});

module.exports = router;