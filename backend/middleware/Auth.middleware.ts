import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { checkUser } from "../utils/chechUser";
export function CookieAuth(req: Request, res: Response, next: NextFunction) {
  console.log(req.url);
  const { token } = req.cookies;
  const privateKey = `${process.env.PRIVATE_KEY}`;
  if (token) {
    const user = verify(token, privateKey);
    if (checkUser(user.toString())) {
      next();
    } else {
      res.clearCookie("token")
      res.redirect("/admin/v2/login");
    }
  } else {
    res.redirect("/admin/v2/login");
  }
}
