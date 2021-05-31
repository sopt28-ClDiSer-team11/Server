import mongoose from "mongoose";
import { ICategory } from "../interfaces/ICategory";

const CategorySchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title : {
        type: String,
        required: true
    }
});

export default mongoose.model<ICategory & mongoose.Document>(
    "Category",
    CategorySchema
  );