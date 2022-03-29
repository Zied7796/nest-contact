import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop({ required: true, type: Number })
  phone: number;

  @Prop({ required: true, type: String })
  firstName: string;

  @Prop({ required: true, type: String })
  lastName: string;

  @Prop(String)
  address?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
