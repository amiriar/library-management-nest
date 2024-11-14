import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from '../../users/entities/user.entity';
import { Book } from '../../books/entities/book.entity';

export type TransactionDocument = Transaction & Document;

@Schema({ timestamps: true })
export class Transaction {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ required: true })
  amount: number;

  @Prop({ enum: ['pending', 'completed', 'cancelled'] })
  status: string;

  @Prop()
  date: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
