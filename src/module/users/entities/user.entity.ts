import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    refreshToken?: string;
    
    @Prop({ type: Number, default: 0 })
    balance: number;

    @Prop({ enum: ['USER', 'AUTHOR', 'ADMIN'], default: 'USER' })
    role: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Book' }], default: [] })
    books: string[];

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
