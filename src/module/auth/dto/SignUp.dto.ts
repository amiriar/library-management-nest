import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @ApiProperty({
    type: 'string',
    description: 'User email address',
    example: 'user@example.com',
    required: true,
  })
  email: string;

  @ApiProperty({
    type: 'string', 
    description: 'User password',
    required: true,
    minLength: 8,
  })
  password: string;

  @ApiProperty({
    type: 'string',
    description: 'Username for the account', 
    example: 'johndoe123',
    required: true,
  })
  username: string;
}
