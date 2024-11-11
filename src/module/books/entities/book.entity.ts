import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema({ timestamps: true })
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  pages: number;

  @Prop()
  date: string;

  @Prop({ required: false })
  author: string;

  @Prop({ required: true })
  isbn: string;

  @Prop({ default: true })
  isAvailable: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);
