import mongoose from "mongoose";
import { ILastOrder } from "../interfaces/ILastOrder";

const lastOrderSchema = new mongoose.Schema({

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

export default mongoose.model<ILastOrder & mongoose.Document>(
    "LastOrder",
    lastOrderSchema
  );