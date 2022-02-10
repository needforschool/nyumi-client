import { IStepMeter } from "./step-meter.interface";

export interface IStepMeterResponse {
  status: number;
  message: string;
  stepMeter: IStepMeter | null;
}
