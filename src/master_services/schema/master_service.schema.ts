import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema({ timestamps: true })
export class MasterService {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  unit: string;

  @Prop()
  description: string;
}

export const MasterServiceSchema = SchemaFactory.createForClass(MasterService);
