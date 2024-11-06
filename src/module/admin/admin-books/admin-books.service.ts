import { Injectable } from '@nestjs/common';
import { CreateAdminBookDto } from './dto/create-admin-book.dto';
import { UpdateAdminBookDto } from './dto/update-admin-book.dto';

@Injectable()
export class AdminBooksService {
  create(createAdminBookDto: CreateAdminBookDto) {
    return 'This action adds a new adminBook';
  }

  findAll() {
    return `This action returns all adminBooks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminBook`;
  }

  update(id: number, updateAdminBookDto: UpdateAdminBookDto) {
    return `This action updates a #${id} adminBook`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminBook`;
  }
}
