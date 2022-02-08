import * as mongoose from 'mongoose';

function transformValue(_, ret: { [key: string]: any }) {
  delete ret._id;
}

export const StepMeterSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: [true, 'User can not be empty'],
    },
    step_count: {
      type: Number,
      required: [true, 'Step count can not be empty'],
      default: 0,
    },
  },
  {
    toObject: {
      virtuals: true,
      versionKey: false,
      transform: transformValue,
    },
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: transformValue,
    },
  },
);