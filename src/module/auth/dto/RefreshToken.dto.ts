import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'The refresh token to validate',
    required: true,
  })
  refreshToken: string;
}
