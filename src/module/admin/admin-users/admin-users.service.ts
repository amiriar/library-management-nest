import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/module/users/entities/user.entity';
import { UpdateAdminUserDto } from './dto/update-admin-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminUsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(page: number, limit: number): Promise<{ users: User[], total: number }> {
    const users = await this.userModel.find().skip(page * limit).limit(limit).exec();
    const total = await this.userModel.countDocuments();
    return { users, total };
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(
    id: string,
    updateAdminUserDto: UpdateAdminUserDto,
  ): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(id, updateAdminUserDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findOneAndDelete({ _id: id }).exec();
  }
}
