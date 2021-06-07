import mongoose from "mongoose";
import { IDetail } from "../interfaces/IDetail";

const detailSchema = new mongoose.Schema({
        _id: {
            type: Number
        }, 
        title: {
            type: String
        }, 
        star: {
            type: String
        }, 
        review: {
            type: String
        }, 
        cheetahImage: {
            type: String
        }, 
        minute: {
            type: String
        }, 
        fee: {
            type: String
        }, 
        minimumPrice: {
            type: String
        }, 
        notice: {
            type: String
        }
});

export default mongoose.model<IDetail & mongoose.Document>(
    "Detail",
    detailSchema
  );