import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { IUser } from "../interfaces/user/user.interface";

@Injectable()
export class UserService {
  constructor(@InjectModel("User") private readonly userModel: Model<IUser>) {}

  async searchUser(params: { email?: string }): Promise<IUser[]> {
    return this.userModel.find(params).exec();
  }

  async searchUserById(id: string): Promise<IUser | null> {
    return this.userModel.findById(id).exec();
  }

  async updateUserById(
    id: string,
    userParams: { is_confirmed: boolean }
  ): Promise<IUser | null> {
    return this.userModel
      .findByIdAndUpdate(id, userParams, { runValidators: true })
      .exec();
  }

  async createUser(user: IUser): Promise<IUser> {
    const userModel = new this.userModel(user);
    return await userModel.save();
  }
}
