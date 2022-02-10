import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { IStepMeter } from "../interfaces/step-meter.interface";

@Injectable()
export class StepMeterService {
  constructor(
    @InjectModel("StepMeter") private readonly model: Model<IStepMeter>
  ) {}

  async searchStepMeters(params: { userId?: string }): Promise<IStepMeter[]> {
    return this.model.find(params).exec();
  }

  async searchStepMeterById(id: string): Promise<IStepMeter | null> {
    return this.model.findById(id).exec();
  }

  async updateStepMeterById(
    id: string,
    userParams: { is_confirmed: boolean }
  ): Promise<IStepMeter | null> {
    return this.model
      .findByIdAndUpdate(id, userParams, { runValidators: true })
      .exec();
  }

  async createStepMeter(user: IStepMeter): Promise<IStepMeter> {
    const model = new this.model(user);
    return await model.save();
  }
}
