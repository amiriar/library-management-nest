import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { IsEmail, IsString, IsOptional, IsNotEmpty, IsNumber, IsEnum, IsArray, IsDate } from 'class-validator';

export class UpdateUserDto {
    @ApiProperty({ required: false, example: 'user@example.com' })
    @IsEmail()
    @IsOptional()
    email?: string;

    @ApiProperty({ required: false, example: 'username123' })
    @IsString()
    @IsOptional()
    username?: string;

    @ApiProperty({ required: false, example: 100 })
    @IsNumber()
    @IsOptional()
    balance?: number;

    @ApiProperty({ required: false, example: ['bookId1', 'bookId2'] })
    @IsArray()
    @IsOptional()
    books?: Types.ObjectId[];
}
