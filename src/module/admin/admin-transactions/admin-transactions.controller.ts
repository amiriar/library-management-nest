import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminTransactionsService } from './admin-transactions.service';
import { CreateAdminTransactionDto } from './dto/create-admin-transaction.dto';
import { UpdateAdminTransactionDto } from './dto/update-admin-transaction.dto';

@Controller('admin-transactions')
export class AdminTransactionsController {
  constructor(private readonly adminTransactionsService: AdminTransactionsService) {}

  @Post()
  create(@Body() createAdminTransactionDto: CreateAdminTransactionDto) {
    return this.adminTransactionsService.create(createAdminTransactionDto);
  }

  @Get()
  findAll() {
    return this.adminTransactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminTransactionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminTransactionDto: UpdateAdminTransactionDto) {
    return this.adminTransactionsService.update(+id, updateAdminTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminTransactionsService.remove(+id);
  }
}
