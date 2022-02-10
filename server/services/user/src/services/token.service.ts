import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Query } from "mongoose";

import { IToken } from "../interfaces/token/token.interface";
import { replaceIfPossible } from "../utils/replace";

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel("Token") private readonly tokenModel: Model<IToken>
  ) {}

  createToken(userId: string): Promise<IToken> {
    const token = this.jwtService.sign(
      {
        userId,
      },
      {
        expiresIn: 30 * 24 * 60 * 60,
      }
    );

    return new this.tokenModel({
      user_id: userId,
      token,
    }).save();
  }

  deleteTokenForUserId(userId: string): Query<any, any> {
    return this.tokenModel.remove({
      user_id: userId,
    });
  }

  async decodeToken(token: string): Promise<{ userId: string } | null> {
    token = replaceIfPossible(token, "Bearer ", "");

    const tokenModel = await this.tokenModel.find({
      token,
    });
    let result = null;

    if (tokenModel && tokenModel[0]) {
      try {
        const tokenData = this.jwtService.decode(tokenModel[0].token) as {
          exp: number;
          userId: unknown;
        };
        if (!tokenData || tokenData.exp <= Math.floor(+new Date() / 1000)) {
          result = null;
        } else {
          result = {
            userId: tokenData.userId,
          };
        }
      } catch (e) {
        result = null;
      }
    }
    return result;
  }
}
