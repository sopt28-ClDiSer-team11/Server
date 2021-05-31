import mongoose from "mongoose";

export interface IHome {
    _id?: string;
    user: mongoose.Types.ObjectId;
    text: string;
    name: string;
    avatar: string;
    date?: Date;
}
