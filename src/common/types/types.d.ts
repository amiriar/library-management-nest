import { User } from "src/module/users/entities/user.entity";
declare global {
  namespace Express {
    interface Request {
      user?: User;
      "user._id"?: User['_id'];
    }
  }
}
