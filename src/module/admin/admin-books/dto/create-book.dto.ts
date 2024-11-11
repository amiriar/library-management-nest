import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ description: 'The title of the book' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'The author of the book' })
  @IsString()
  author: string;

  @ApiProperty({ description: 'The price of the book' })
  @IsNumber()
  price: number;

  @ApiProperty({ description: 'Book description', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Book isbn', required: true })
  @IsString()
  @IsOptional()
  isbn?: string;

  @IsString()
  @IsOptional()
  date?: string;

  @ApiProperty({ description: 'Number of pages in the book' })
  @IsNumber()
  pages: number;
}
