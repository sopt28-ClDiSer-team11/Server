import mongoose from "mongoose";
import { IMenu } from "../interfaces/IMenu";

const menuSchema = new mongoose.Schema({
        storeIdx: {
            type: String
        }, 
        title: {
            type: String
        }, 
        price: {
            type: String
        }, 
        image: {
            type: String
        }, 
        detailMenu: {
            type: String
        }
});

export default mongoose.model<IMenu & mongoose.Document>(
    "Menu",
    menuSchema
  );