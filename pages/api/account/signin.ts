import { NextApiRequest, NextApiResponse } from "next";
import Account from "../../../lib/models/account";
import { compareSync, hashSync } from "bcryptjs";
import mongooseInit from "../../../lib/mongooseInit";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  mongooseInit();
  const { userId, password } = req.body as { userId: string; password: string };
  const find = await Account.findOne({ userId: userId });
  // console.log("SERVER - " + find);
  if (compareSync(password, find?.password!)) {
    // console.log("일치");
    return res.status(200).json(find);
  }
  return res.status(406).json(null);
}
