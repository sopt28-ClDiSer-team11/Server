import mongoose from "mongoose";
import { IBanner } from "../interfaces/Ibanner";

const BannerSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    }
});

export default mongoose.model<IBanner & mongoose.Document>(
    "Banner",
    BannerSchema
  );