import mongoose from "mongoose";

export interface PickItemData {
  _id: mongoose.Types.ObjectId;
  owner: string;
  type: string;
  photos: [{ _id: mongoose.Types.ObjectId; extraUrl: string }];
  description: string;  
  businessNumber: string;
  location: {
    state: string;
    city: string;
    street: string;
    apt: string;
    zipCode: string;
    lat: number;
    lng: number;
  };
  afterService: string;
  certifiedCompany: string;
  guarantee: boolean;
  categories: Array<string>;
  blogs: Array<{
    title: string;
    URL: string;
  }>;  
  reviews: Array<{
    writer: string;
    contents: string;
    createdAt: Date;
  }>
}

const pickItemSchema = new mongoose.Schema<PickItemData>({
  owner: String,
  type: String,
  location: {
    state: String,
    city: String,
    street: String,
    apt: String,
    zipCode: String,
    lat: Number,
    lng: Number,
  },
  businessNumber: {type: String, required: true},
  description: String,
  photos: [{ extraUrl: String }], 
  afterService: String,
  certifiedCompany: String,
  guarantee: Boolean,
  categories: [String],
  blogs: [{
    title: String,
    URL: String
  }],
  reviews: [{
    title: String,
    contents: String,
    createdAt: Date
  }]
});

const PickItem: mongoose.Model<PickItemData> =
  mongoose.models.PickItem || mongoose.model("PickItem", pickItemSchema);

export default PickItem;
