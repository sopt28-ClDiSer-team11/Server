import express, {Request, Response} from "express";
const router = express.Router();
import Detail from "../models/detail";


import config from "../config";
import request from 'request';

import { check, validationResult } from "express-validator";


/**
 * @route GET api/detail/:storeIdx
 * @desc Get all storeDetail
 * @access Public
 */
router.get("/:storeIdx", async (req,res) => {
  try{
      const storeIdx = req.params.storeIdx
      const details = await Detail.findOne({_id: storeIdx});
      //const details = await Detail.find();


      if (!details) {
        return res.status(200).json({ status: 200, success : true, message: "배너 데이터 없음", data: details});
      }
      res.json({status: 200, success: true, message: "배너 가져오기 성공", data: details});


  } catch (error) {
      console.error(error.message);
      res.status(500).send({ status: 500, success: false, message: "서버 내부 에러" });
  }
});

router.get("/detail", async (req,res) => {
    try{
        const details = await Detail.find();
  
  
        if (!details) {
          return res.status(200).json({ status: 200, success : true, message: "배너 데이터 없음", data: details});
        }
        res.json({status: 200, success: true, message: "배너 가져오기 성공", data: details});
  
  
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ status: 500, success: false, message: "서버 내부 에러" });
    }
  });

module.exports = router;