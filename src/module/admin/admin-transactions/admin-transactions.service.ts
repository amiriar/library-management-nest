import { Injectable } from '@nestjs/common';
import { CreateAdminTransactionDto } from './dto/create-admin-transaction.dto';
import { UpdateAdminTransactionDto } from './dto/update-admin-transaction.dto';

@Injectable()
export class AdminTransactionsService {
  create(createAdminTransactionDto: CreateAdminTransactionDto) {
    return 'This action adds a new adminTransaction';
  }

  findAll() {
    return `This action returns all adminTransactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminTransaction`;
  }

  update(id: number, updateAdminTransactionDto: UpdateAdminTransactionDto) {
    return `This action updates a #${id} adminTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminTransaction`;
  }
}
