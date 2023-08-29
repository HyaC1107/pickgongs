import mongoose from "mongoose";

export interface AccountData {
    _id: mongoose.Types.ObjectId;
    userId: string; // 계정 ID
    email: string; // 이메일
    password: string; // 계정 비번
    nickname: string; // 닉네임
    name: string; // 이름
    birth: string; // 생일
    phoneNumber: string;  // 전화번호
    type: string; // 회원 타입
    createdAt: Date; // 생성 날짜
    contractor: {
        profileImg: string; // 사업장 사진
        leaseAgreement: string; // 임대차 계약서
        CBP:{   // 사업자등록증
            businessNumber: string;
            CBPImg: string;
        };
        personalIdImg: string; // 신분증
        companyName: string;
        location: {
            state: string;
            city: string;
            street: string;
            apt: string;
            zipCode: string;
            lat: number;
            lng: number;
        };
        categories: Array<string>; // 주업종
        companyEmail: string;
        afterService: string;
        certificates: { // 자격증
            category: string;
            certImg: string;
        };
        guarantee:{ // 보증
            guarantor: string;
            guaranteeType: Array<string>;
        };
        homepage: string;
        sns: string;
        youtube: string;
        regionRange:Array<string>;
        published: boolean;
    };
    heavyEquip:{
        equipment:{
            frontImg: string;
            sideImg: string;
            rearImg: string;
        };
        CBP:{   // 사업자등록증
            businessNumber: string;
            CBPImg: string;
        };
        driverLicense: string;
        carCertificate: string;
        companyName: string;
        location: {
            state: string;
            city: string;
            street: string;
            apt: string;
            zipCode: string;
            lat: number;
            lng: number;
        };
        heavyType: string; // 크레인종류
        heavyTON: string; // 차량TON
        career: string; // 경력
        companyEmail: string;
        freightNum: string;
        freightCertImg: string; // 화물운송자격증
        pilotTrainingCertImg: string; //조종교육이수증
        homepage: string;
        sns: string;
        youtube: string;
        regionRange:Array<string>;
        published: boolean;
    }
}

const accountSchema = new mongoose.Schema<AccountData>({
    userId:{ type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    nickname: { type: String, required: true },
    name: { type: String },
    birth: { type: String }, 
    phoneNumber: { type: String}, 
    type: { type: String },
    createdAt: Date,
    contractor:{
        profileImg: String,
        leaseAgreement: String,
        CBP:{   // 사업자등록증
            businessNumber: String,
            CBPImg: String,
        },
        personalIdImg: String,
        companyName: String,
        location: {
            state: String,
            city: String,
            street: String,
            apt: String,
            zipCode: String,
            lat: Number,
            lng: Number,
        },
        categories: Array<String>,        
        companyEmail: String,
        afterService: String,
        certificates: {
            category: String,
            certImg: String,
        },
        guarantee:{
            guarantor: String,
            guaranteeType: Array<String>,
        },
        homepage: String,
        sns: String,
        youtube: String,
        regionRange:Array<String>,
        published: Boolean
    },
    heavyEquip:{
        equipment:{
            frontImg: String,
            sideImg: String,
            rearImg: String,
        },
        CBP:{   // 사업자등록증
            businessNumber: String,
            CBPImg: String,
        },
        driverLicense: String,
        carCertificate: String,
        companyName: String,
        location: {
            state: String,
            city: String,
            street: String,
            apt: String,
            zipCode: String,
            lat: Number,
            lng: Number,
        },
        heavyType: String,
        heavyTON: String,
        career: String,
        companyEmail: String,
        freightNum: String,
        freightCertImg: String,
        pilotTrainingCertImg: String,
        homepage: String,
        sns: String,
        youtube: String,
        regionRange:Array<String>,
        published: Boolean
    }
});

const Account: mongoose.Model<AccountData> =
  mongoose.models.Account ||
  mongoose.model<AccountData>("Account", accountSchema);

export default Account;
