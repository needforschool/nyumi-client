import { Controller, HttpStatus } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

import { IStepMeterResponse } from "../interfaces/step-meter-response.interface";
import { IStepMeter } from "../interfaces/step-meter.interface";
import { IStepMetersResponse } from "../interfaces/step-meters-response.interface";
import { StepMeterService } from "../services/step-meter.service";

@Controller("step-meter")
export class StepMeterController {
  constructor(private readonly service: StepMeterService) {}

  @MessagePattern('get_all') 
  async getAllStepMeters(): Promise<IStepMetersResponse> {
    const stepMeters = await this.service.searchStepMeters();

    return {
      status: HttpStatus.OK,
      message: 'get_all_step-meters_success',
      stepMeters
    }
  }

  @MessagePattern('get_by_user_id')
  async getStepMeterByUserId(userId: string): Promise<IStepMeterResponse> {
    const stepMeters = await this.service.searchStepMeters({ userId });

    if(!stepMeters || stepMeters.length === 0) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'get_step-meter_by_user_id_not_found',
        stepMeter: null
      }
    }

    return {
      status: HttpStatus.OK,
      message: 'get_step-meter_by_user_id_success',
      stepMeter: stepMeters[0]
    }
  }

  async createStepMeter(stepMeter: IStepMeter): Promise<IStepMeterResponse> {
    const createdStepMeter = await this.service.createStepMeter(stepMeter);

    return {
      status: HttpStatus.CREATED,
      message: 'create_step-meter_success',
      stepMeter: createdStepMeter
    }
  }
}