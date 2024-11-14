import { Module } from '@nestjs/common';
import { AdminUsersService } from './admin-users.service';
import { AdminUsersController } from './admin-users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/module/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/module/users/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [AdminUsersController],
  providers: [AdminUsersService, JwtService, UsersService],
})
export class AdminUsersModule {}
