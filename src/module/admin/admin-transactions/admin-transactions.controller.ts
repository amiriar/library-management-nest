import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { AdminTransactionsService } from './admin-transactions.service';
import { CreateAdminTransactionDto } from './dto/create-admin-transaction.dto';
import { UpdateAdminTransactionDto } from './dto/update-admin-transaction.dto';
import { ApiQuery } from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/roles.decorator';
import { AuthGuard } from 'src/common/guard/AuthGuard.guard';
import { RolesGuard } from 'src/common/guard/roles.guard';

@Controller('admin-transactions')
@UseGuards(AuthGuard, RolesGuard)
export class AdminTransactionsController {
  constructor(private readonly adminTransactionsService: AdminTransactionsService) {}

  @Get()
  @Roles('ADMIN')
  @ApiQuery({ name: 'page', required: false, description: 'Page number' })
  @ApiQuery({ name: 'limit', required: false, description: 'Limit per page' })
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.adminTransactionsService.findAll(page, limit);
  }

  @Delete(':id')
  @Roles('ADMIN')
  remove(@Param('id') id: string) {
    return this.adminTransactionsService.remove(id);
  }
}
