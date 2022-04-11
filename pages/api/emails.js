import { connectToDatabase } from "../../util/mongodb";
import EmailUser from "../../models/newslettersignup";

export default async function handler(req, res) {
  const db = await connectToDatabase();
  console.log(req.body);
  let emailUser = new EmailUser({
    first_name: req.body.first_name,
    email: req.body.email,
  });
  if (emailUser.email.match(/^\S+@\S+\.\S+$/)) {
    await emailUser.save((err, user) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ res: "Successful signup", user: user });
      }
    });
  } else {
    res.json({ res: "Email format is not correct" });
  }
}
