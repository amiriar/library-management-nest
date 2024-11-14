import { PartialType } from '@nestjs/swagger';
import { User } from 'src/module/users/entities/user.entity';

export class UpdateAdminUserDto extends PartialType(User) {}
