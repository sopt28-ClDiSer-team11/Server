import mongoose from "mongoose";
import { IHome } from "../interfaces/IHome";

const HomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    star: {
        type: String,
    },
    reviewCount: {
        type: String,
    },
    distance: {
        type: String,
    },
    image: {
        type: String,
    },
    minute: {
        type: String,
    },
});

export default mongoose.model<IHome & mongoose.Document>(
    "Home",
    HomeSchema
);
