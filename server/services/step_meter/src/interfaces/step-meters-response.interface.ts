import { IStepMeter } from "./step-meter.interface";

export interface IStepMetersResponse {
  status: number;
  message: string;
  stepMeters: IStepMeter[];
}