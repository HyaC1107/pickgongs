import mongoose  from "mongoose";
import { PickItemData } from "./pickItem";

export interface BookConstructionData{
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
}

const bookConstructionSchema = new mongoose.Schema<BookConstructionData>({
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
})

bookConstructionSchema.virtual("info",{
    localField:"contractorId",
    ref: "Contractor",
    foreignField:"_id"
});

const BookConstruction: mongoose.Model<BookConstructionData> = 
    mongoose.models.BookConstruction || mongoose.model("BookConstruction", bookConstructionSchema);

export default BookConstruction;