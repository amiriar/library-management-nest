import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEnum, IsMongoId } from 'class-validator';

export class UpdateTransactionDto {
  @ApiProperty({
    description: 'The status of the transaction',
    enum: ['pending', 'completed', 'cancelled'],
    example: 'pending',
  })
  @IsNotEmpty()
  @IsEnum(['pending', 'completed', 'cancelled'])
  status: string;
}
