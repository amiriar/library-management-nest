import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'User email address or username',
    example: 'user@example.com',
    required: true,
  })
  identifier: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'User password',
    required: true,
    minLength: 8,
  })
  password: string;
}
