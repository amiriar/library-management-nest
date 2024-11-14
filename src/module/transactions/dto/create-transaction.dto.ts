import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsEnum,
  IsDate,
  IsOptional,
  IsMongoId,
} from 'class-validator';

export class CreateTransactionDto {
  @ApiProperty({
    description: 'The amount of the transaction',
    example: 100.5,
  })
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty({
    description: 'The status of the transaction',
    enum: ['pending', 'completed', 'cancelled'],
    example: 'pending',
  })
  @IsNotEmpty()
  @IsEnum(['pending', 'completed', 'cancelled'])
  status: string;

  @ApiProperty({
    description: 'The user of the transaction',
    example: '672add26b85d6be186dc7f40',
  })
  @IsOptional()
  user: Types.ObjectId;

  @ApiProperty({
    description: 'Date of the transaction',
    example: '2024-03-20T10:00:00Z',
  })
  @IsOptional()
  date?: string;
}
