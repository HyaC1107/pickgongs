import mongoose from "mongoose";

export interface CustomerData {
    _id: mongoose.Types.ObjectId;
    userId: string; // 계정 ID
    password: string; // 계정 비번
    email: string; // 이메일
    name: string; // 이름
    nickname: string; // 닉네임
    birth: string; // 생일
    phoneNumber: string;  // 전화번호
    type: string; // 회원 타입
    createdAt: Date; // 생성 날짜
    
}

const customerSchema = new mongoose.Schema<CustomerData>({
    userId:{ type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    nickname: { type: String, required: true },
    birth: { type: String, required: true }, 
    phoneNumber: { type: String, required: true }, 
    type: { type: String, required: true },
    createdAt: Date,
   
});

const Customer: mongoose.Model<CustomerData> =
  mongoose.models.Customer ||
  mongoose.model<CustomerData>("Customer", customerSchema);

export default Customer;
