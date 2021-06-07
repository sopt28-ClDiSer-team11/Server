import mongoose from "mongoose";
import { IBanner } from "../interfaces/IBanner";

const BannerSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
});

export default mongoose.model<IBanner & mongoose.Document>(
    "Banner",
    BannerSchema
  );