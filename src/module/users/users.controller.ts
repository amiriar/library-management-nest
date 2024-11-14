import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/common/guard/AuthGuard.guard';
import { RolesGuard } from 'src/common/guard/roles.guard';
import { Request } from 'express';
import { UserDocument } from './entities/user.entity';

@Controller('users')
@UseGuards(AuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Patch('/dashboard')
  update(@Req() req: Request, @Body() updateUserDto: UpdateUserDto) {
    const user = req.user as UserDocument;
    return this.usersService.update(user._id.toString(), updateUserDto);
  }

  @Get('me')
  async findOne(@Req() req: Request) {
    const user = req.user as UserDocument;
    return await this.usersService.findOne(user._id.toString());
  }
}
