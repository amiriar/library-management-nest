import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @ApiProperty({
    description: 'The amount of the transaction',
    example: 100.5,
  })
  amount: number;

  @ApiProperty({
    description: 'The book of the transaction',
    example: 100.5,
  })
  book: string;

  @ApiProperty({
    description: 'The type of transaction (credit/debit)',
    example: 'credit',
  })
  type: string;

  @ApiProperty({
    description: 'Date of the transaction',
    example: '2024-03-20T10:00:00Z',
  })
  date: Date;
}
