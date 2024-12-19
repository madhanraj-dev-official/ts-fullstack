import { PrismaClient } from "@prisma/client";
import { sign } from 'jsonwebtoken';
import { compare } from "bcrypt";
const prisma = new PrismaClient();

export  function login(req, res) {
  const { username, password } = req.body;
  let checkPassword = "";
  if (!username) {
    return res.json({ success: false, message: "no username" });
  }
  if (!password) {
    return res.json({ success: false, message: "no username" });
  }
  try {
    const result = async () =>
      await prisma.staff.findUnique({ where: { username: username } });
    result().then((DATA) => (checkPassword = `${DATA?.password}`));
    const verifyCall = async()=> await compare(password, checkPassword);
    verifyCall().then(
        (verify)=>{
            if (verify) {
                const token = sign(username, `${process.env.PRIVATE_KEY}`, {
                  expiresIn: "5h",
                });
                return res.cookie("token", token, {});
              }
        }
    )

    return res.json({ success: false, message: "password not match" });
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, data: "error" })
      .clearCookie("token");
  }
}
