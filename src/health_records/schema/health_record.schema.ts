import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema()
export class HealthRecord {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop()
  user_id: string;

  @Prop()
  date: string;

  @Prop()
  record_by: string;

  @Prop()
  general_note: string;

  @Prop({
    type: [
      {
        name: { type: String },
        value: { type: String },
        unit: { type: String },
        note: { type: String },
      },
    ],
  })
  records: { id: string; text: string }[];
}

export const HealthRecordsSchema = SchemaFactory.createForClass(HealthRecord);
