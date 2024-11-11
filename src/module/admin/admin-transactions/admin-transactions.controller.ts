import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminTransactionsService } from './admin-transactions.service';
import { CreateAdminTransactionDto } from './dto/create-admin-transaction.dto';
import { UpdateAdminTransactionDto } from './dto/update-admin-transaction.dto';

@Controller('admin-transactions')
export class AdminTransactionsController {
  constructor(private readonly adminTransactionsService: AdminTransactionsService) {}

  @Get()
  findAll() {
    return this.adminTransactionsService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminTransactionsService.remove(id);
  }
}
