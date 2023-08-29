import { NextApiRequest, NextApiResponse } from "next";
import Account, { AccountData } from "../../../lib/models/account";
import { hashSync } from "bcryptjs";
import mongooseInit from "../../../lib/mongooseInit";
// // import
// const { NiceAuth, NiceAuthError } = require('nice-api-node')

// // NICE에서 제공된 clientId, clientSecret, productId로 NiceAuth 인스턴스 생성
// const niceAuth = new NiceAuth({
//     clientId: '<client id>',
//     clientSecret: '<client secret>',
//     productId: '<product id>'
// })




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  mongooseInit();
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ result: false, message: "요청을 처리할 수 없습니다." });
  }

  
  const data = req.body as AccountData;
  
  console.log(data);
  try {
    // const emailRegex = /\S+@\S+\.\S+/;
    // if (
    //   !data.email ||
    //   !emailRegex.test(data.email) 
    // ) {
    //   throw new Error("누락된 필드값이 존재합니다.");
    // }
    const find = await Account.findOne({ email: data.email });
    if (find) {
      throw new Error("이미 사용중인 이메일입니다.");
    }
    const hashedPassword = hashSync(data.password);
    const result = await Account.create({ ...data, password: hashedPassword });
    return res.status(201).json({
      result: true,
      message: "회원가입처리가 되었습니다.",
    });
  } catch (e: any) {
    console.log("오류");
    return res.status(422).json({
      result: false,
      message: e.message ?? "회원가입 중 오류가 발생하였습니다",
    });
  }

  // try {
  //   const requestData = await niceAuth.generateRequestData({
  //       requestno: '123456789', // 최대 30자
  //       returnurl: 'http://localhost:3000/test',
  //       authtype: 'M',
  //       methodtype: 'post',
  //       popupyn: 'Y',
  //       receivedata: JSON.stringify({ foo: 'var' }),
  //   });
  //   console.log(requestData);
  // } catch (e) {
  //     // 오류 처리
  //     if (e instanceof NiceAuthError.AccessTokenError) {
  //         console.log('액세스 토큰 발급 실패!');
  //     } else if (e instanceof NiceAuthError.CryptoTokenError) {
  //         console.log('암호화 토큰 발급 실패!');
  //     } else if (e instanceof NiceAuthError.SymmetricKeyError) {
  //         console.log('대칭키 생성 실패!');
  //     } else if (e instanceof NiceAuthError.EncryptDataError) {
  //         console.log('요청 데이터 암호화 실패!');
  //     } else if (e instanceof NiceAuthError.IntegrityValueError) {
  //         console.log('무결성 검증 값 생성 실패!');
  //     } else {
  //         console.log('기타 오류')
  //     }
  // }




}
