import mongoose  from "mongoose";
import { PickItemData } from "./pickItem";

export interface BookMeetData{
    _id: mongoose.Types.ObjectId;
    customerId: string; // 고객ID
    categories: Array<string>;  // 카테고리
    contractors: Array<{
        contractorId: string;
        info?: PickItemData;   
        meetDate: Date;
        checked: boolean;
        status: string;
    }>;
    publish: boolean;
    publishedDate: Date;
};

const bookMeetSchema = new mongoose.Schema<BookMeetData>({
    customerId: String,
    categories: [String],
    contractors: [{
        contractorId: String,
        meetDate: Date,
        checked: Boolean,
        status: String
    }],
    publish: Boolean,
    publishedDate: Date
});

bookMeetSchema.virtual("info",{
    localField:"contractorId",
    ref: "Contractor",
    foreignField:"_id"
});

const BookMeet: mongoose.Model<BookMeetData> = 
    mongoose.models.BookMeet || mongoose.model("BookMeet", bookMeetSchema);

export default BookMeet;